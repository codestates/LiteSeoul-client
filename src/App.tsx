// import axios from 'axios';
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
import axios from "axios";

function App(): any {
  const [isModal, setModal] = useState<boolean>(false);
  const [isLogin, setLogin] = useState<boolean>(false);
  const [isLoginModal, setLoginModal] = useState<boolean>(false);

  // 타입생성 및 상태 객체값 지정 필요
  const [modalData, setModalData] = useState([]);

  const handleModalData = (data: any) => {
    setModalData(data);
  };

  const [isSignUp, setSignUp] = useState<boolean>(false);
  // console.log(isLoginModal);
  console.log(isSignUp);

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

  // 토큰을 갖고 로그인 유지해주는 이펙트 훅
  useEffect(() => {
    if (sessionStorage.getItem("access_token") !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

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
  }

  const [myinfo, setMyinfo] = useState<userInfoForm>({
    id: 0,
    name: "",
    email: "",
    nick: "",
    phone: "",
    level: 0,
    currentExp: 0,
    maxExp: 0,
    profileImgPath: ''
  });
  // console.log(myinfo)

  useEffect(() => {
    axios.post("http://ec2-3-142-145-100.us-east-2.compute.amazonaws.com/user/get", {
      "access_token": sessionStorage.getItem("access_token")
    })
    .then(res => {
      setMyinfo(res.data)
    })
  }, [])

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
              return <Mypage myinfo={myinfo}/>;
            }
          }}
        />
        {/* <Route path="/mypage/justinfo" render={() => <JustInfo />} /> */}
        <Route
          exact
          path="/mypage2"
          render={() => {
            if (!isLogin) {
              return <Redirect to="/" />;
            } else {
              return <Mypage2 />;
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
              return <Mypage3 />;
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
              return <Mypage4 />;
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
        <Route
          exact
          path="/"
          render={() => (
            <Home
            // isLogin={isLogin: boolean}
            />
          )}
        />
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
        ></Marker>
      ) : (
        <></>
      )}

      {isSignUp ? <SignUp handleSignUp={handleSignUp}></SignUp> : <></>}
    </BrowserRouter>
  );
}

export default App;
