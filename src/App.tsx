import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Marker from "./components/Modal/Marker";
import Nav from "./components/Nav";
import SignIn from "./components/Modal/SignIn";
import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound";
import Map from "./pages/Map";
import SignUp from "./components/Modal/SignUp";
import queryStringify from "qs-stringify";
import Loading from "./pages/Loading";
import Participation from "./pages/Participation";
import Donation from "./pages/Donation";
import dotenv from 'dotenv';
dotenv.config();

//유저정보 데이터 타입 관리
interface userInfoForm {
  id: number;
  name: string;
  email: string;
  nick: string;
  phone: string;
  level: number;
  currentExp: number;
  maxExp: number;
  profileImgPath: string;
  profileText: string;
}

function App(): any {
  // 상태관리 파트
  const [isModal, setModal] = useState<boolean>(false);
  const [isLogin, setLogin] = useState<boolean>(false);
  const [isLoginModal, setLoginModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<never[]>([]);
  const [isSignUp, setSignUp] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [myinfo, setMyinfo] = useState<userInfoForm>({
    id: 0,
    name: "",
    email: "",
    nick: "",
    phone: "",
    level: 0,
    currentExp: 0,
    maxExp: 0,
    profileImgPath: "",
    profileText: "",
  });

  // 기본 샵 더미데이터 로컬스토리지 삽입
  localStorage.setItem(
    "recommend",
    JSON.stringify({
      nearest: {
        address: "성동구 왕십리로 115 헤이그라운드 9층",
        category: "life",
        distance: 3.608268553240311,
        id: 6,
        latitude: "37.54804049927143",
        longitude: "127.04413748468407",
        name: "더피커",
        phone: "070-4118-0710",
        recommend: "antiPlastic",
        imgPath: process.env.REACT_APP_DOAMIN_URL + "/uploads/shops/06_thepicker.jpg"
      },
      resultAntiChemical: {
        address: "서대문구 홍제천로2길 100, 1층",
        category: "cafe",
        id: 17,
        latitude: "37.57177467293018",
        longitude: "126.92323569632859",
        name: "카페 샘",
        phone: "010-3646-4135",
        recommend: "antiChemical",
        imgPath: process.env.REACT_APP_DOAMIN_URL + "/uploads/shops/17_cafesam.jpeg"
      },
      resultAntiPlastic: {
        address: "금천구 독산로 312 1층",
        category: "cafe",
        id: 3,
        latitude: "37.47491311875498",
        longitude: "126.90365938283361",
        name: "데일리로스팅",
        phone: "070-4205-1212",
        recommend: "antiPlastic",
        imgPath: process.env.REACT_APP_DOAMIN_URL + "/uploads/shops/03_dailyroasting.png"
      },
      resultRecycle: {
        address: "서대문구 연희동 708번지 1층",
        category: "cafe",
        id: 12,
        latitude: "37.575344352775566",
        longitude: "126.92843671167105",
        name: "보틀팩토리",
        phone: "02-3144-0703",
        recommend: "recycle",
        imgPath: process.env.REACT_APP_DOAMIN_URL + "/uploads/shops/12_bottlefactory.jpeg"
      },
    })
  );

  //전체 지도 데이터 받아오기
  useEffect(() => {
    axios.get(process.env.REACT_APP_DOAMIN_URL + "/shop/getAll").then((res) => {
      localStorage.setItem("total", JSON.stringify(res.data));
    });
  }, []);

  //내위치 위도경도
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도
      let latlon: any = {
        lat: lat,
        lon: lon,
      };
      localStorage.setItem("nav", JSON.stringify(latlon));
    });
  }, []);

  const handleModalData = (data: any) => {
    setModalData(data);
  };

  const handleModal = () => {
    setModal(!isModal);
  };

  const handleLoginModal = () => {
    setLoginModal(!isLoginModal);
  };

  const handleLogin = () => {
    setLogin(!isLogin);
  };

  const handleSignUp = () => {
    setSignUp(!isSignUp);
  };

  // 액세스 토큰으로 내 정보 가져오기
  useEffect(() => {
    if (sessionStorage.getItem("access_token")) {
      setLogin(true);
      axios
        .post(process.env.REACT_APP_DOAMIN_URL + "/user/get", {
          access_token: sessionStorage.getItem("access_token"),
        })
        .then((res) => {
          setMyinfo(res.data);
        });
    }
  }, []);

  // 토큰을 받아와서 세션 스토리지에 저장 & myinfo 저장하는 이펙트 훅
  useEffect(() => {
    const url = new URL(window.location.href);

    // 구글 소셜로그인
    if (url.searchParams.get("query")) {
      const token: any = url.searchParams.get("query");
      const id: any = url.searchParams.get("id");

      setLogin(true);
      setLoading(true);

      sessionStorage.setItem("access_token", token);
      sessionStorage.setItem("id", id);

      setLoading(false);
      window.location.replace("https://liteseoul.com/");
    }
    // 카카오 소셜로그인
    else if (url.searchParams.get("code")) {
      const code = url.searchParams.get("code");

      const data = queryStringify({
        grant_type: "authorization_code",
        client_id: process.env.REACT_APP_KAKAO_CLIETN_ID,
        redirect_uri: process.env.REACT_APP_HOME_URL,
        code: code,
      });

      axios({
        method: "post",
        url: "https://kauth.kakao.com/oauth/token",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      }).then((res) => {
        setLogin(true);
        setLoading(true);
        axios
          .post(process.env.REACT_APP_DOAMIN_URL + "/kakao/login", {
            kakaoToken: res.data.access_token,
          })
          .then((result) => {
            sessionStorage.setItem("access_token", result.data.access_token);
            sessionStorage.setItem("id", result.data.payload.id);
            window.location.reload();
            setLoading(false);
          });
      });
    }
  }, []);

  // 토큰을 갖고 로그인 유지해주는 이펙트 훅
  useEffect(() => {
    if (
      sessionStorage.getItem("access_token") !== null ||
      localStorage.getItem("id") !== null
    ) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [isLogin]);

  return (
    <BrowserRouter>
      <Nav
        isLogin={isLogin}
        handleLoginModal={handleLoginModal}
        loading={loading}
      ></Nav>
      <Switch>
        <Route path="/donation" render={() => <Donation />} />
        <Route path="/participation" render={() => <Participation />} />
        <Route
          exact
          path="/mypage"
          render={() => {
            if (!sessionStorage.getItem("access_token")) {
              return <Redirect to="/" />;
            } else {
              return (
                <Mypage
                  myinfo={myinfo}
                  setLoading={setLoading}
                  handleModal={handleModal}
                  handleModalData={handleModalData}
                />
              );
            }
          }}
        />
        <Route
          path="/signin"
          render={() => (
            <SignIn
              isLogin={isLogin}
              handleLogin={handleLogin}
              handleLoginModal={handleLoginModal}
              handleSignUp={handleSignUp}
            />
          )}
        />
        <Route
          path="/map"
          render={() => (
            <Map
              isModal={isModal}
              handleModal={handleModal}
              handleModalData={handleModalData}
              setMyinfo={setMyinfo}
              setLogin={setLogin}
              setLoading={setLoading}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Home
              isLogin={isLogin}
              handleModal={handleModal}
              handleModalData={handleModalData}
            />
          )}
        />
        <Route component={NotFound} />
      </Switch>
      {isLoginModal ? (
        <SignIn
          handleLogin={handleLogin}
          handleLoginModal={handleLoginModal}
          handleSignUp={handleSignUp}
        ></SignIn>
      ) : (
        <></>
      )}
      {isModal ? (
        <Marker
          isModal={isModal}
          handleModal={handleModal}
          modalData={modalData}
          handleLoginModal={handleLoginModal}
          isLoginModal={isLoginModal}
          isLogin={isLogin}
          handleLogin={handleLogin}
        ></Marker>
      ) : (
        <></>
      )}
      {isSignUp ? (
        <SignUp handleSignUp={handleSignUp} setLoading={setLoading}></SignUp>
      ) : (
        <></>
      )}
      {loading ? <Loading></Loading> : <></>}
    </BrowserRouter>
  );
}

export default App;
