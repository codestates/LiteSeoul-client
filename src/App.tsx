import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Marker from "./components/Modal/Marker";
import Nav from "./components/Nav";
import SignIn from "./components/Modal/SignIn";
import Mypage from "./pages/Mypage";
import Mypage2 from "./pages/Mypage2";
import Mypage3 from "./pages/Mypage3";
import Mypage4 from "./pages/Mypage4";
import NotFound from "./pages/NotFound";
import Map from "./pages/Map";
import SignUp from "./components/Modal/SignUp";
import { useEffect } from "react";
import queryStringify from "qs-stringify";

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
  const [isModal, setModal] = useState<boolean>(false);
  const [isLogin, setLogin] = useState<boolean>(false);
  console.log("============= 로그인 여부", isLogin);
  const [isLoginModal, setLoginModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState([]);
  const [isSignUp, setSignUp] = useState<boolean>(false);
  console.log("회원가입 모달창", isSignUp);
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
  console.log(myinfo);

  //전체 지도 데이터 받아오기
  useEffect(() => {
    axios
      .get(
        "http://ec2-52-79-247-245.ap-northeast-2.compute.amazonaws.com/shop/getAll"
      )
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("total", JSON.stringify(res.data));
      });
  }, []);

  //내위치 위도경도
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도
      // console.log(lat, lon);
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

  const [loading, setLoading] = useState(false);
  // 토큰을 받아와서 세션 스토리지에 저장 & myinfo 저장하는 이펙트 훅
  useEffect(() => {
    const url = new URL(window.location.href);
    if (sessionStorage.getItem("access_token")) {
      axios
        .post(
          "http://ec2-3-142-145-100.us-east-2.compute.amazonaws.com/user/get",
          {
            access_token: sessionStorage.getItem("access_token"),
          }
        )
        .then((res) => {
          // console.log(res)
          setMyinfo(res.data);
        });
    }

    if (url.searchParams.get("code")) {
      const code = url.searchParams.get("code");
      console.log("kakao");

      const data = queryStringify({
        grant_type: "authorization_code",
        client_id: "d33a84f54f22e12cd75db7c1981bd095",
        redirect_uri: "http://localhost:3000",
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
        console.log("============ setLogin을 true로 변경")
        setLogin(true);
        console.log("============ setLoading을 true로 변경")
        setLoading(true)
        axios
          .post(
            "http://ec2-3-142-145-100.us-east-2.compute.amazonaws.com/kakao/login",
            {
              kakaoToken: res.data.access_token,
            }
          )
          .then((result) => {
            console.log("============== 토큰까지 넣는 것 완료")
            sessionStorage.setItem("access_token", result.data);
            window.location.reload();
            console.log("============== setLoading을 false로 변경")
            setLoading(false)
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
      console.log("======== 로그인 유지! true!")
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Nav isLogin={isLogin} handleLoginModal={handleLoginModal}></Nav>
      <Switch>
        {/* <Route 
          path="/donation"
          render={() => (
            <Donation/>
          )}
        /> */}
        <Route
          exact
          path="/mypage"
          render={() => {
            if (!isLogin) {
              return <Redirect to="/" />;
            } else {
              return <Mypage myinfo={myinfo} />;
            }
          }}
        />
        <Route
          exact
          path="/mypage2"
          render={() => {
            if (!isLogin) {
              return <Redirect to="/" />;
            } else {
              return <Mypage2 myinfo={myinfo} />;
            }
          }}
        />
        <Route
          exact
          path="/mypage3"
          render={() => {
            if (!isLogin) {
              return <Redirect to="/" />;
            } else {
              return <Mypage3 myinfo={myinfo} />;
            }
          }}
        />
        <Route
          exact
          path="/mypage4"
          render={() => {
            if (!isLogin) {
              return <Redirect to="/" />;
            } else {
              return <Mypage4 myinfo={myinfo} />;
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
            />
          )}
        />
        <Route exact path="/" render={() => <Home isLogin={isLogin} loading={loading} />} />
        <Route component={NotFound} />
      </Switch>
      {isLoginModal ? (
        <SignIn
          // isLogin={isLogin}
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

      {isSignUp ? <SignUp handleSignUp={handleSignUp}></SignUp> : <></>}
    </BrowserRouter>
  );
}

export default App;
