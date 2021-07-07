import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Marker from './components/Modal/Marker';
import Nav from './components/Nav';
import SignIn from './components/Modal/SignIn';
import Mypage from './pages/Mypage';
import Mypage2 from './pages/Mypage2';
import Mypage3 from './pages/Mypage3';
import Mypage4 from './pages/Mypage4';
import NotFound from './pages/NotFound';
import Map from './pages/Map';
import SignUp from './components/Modal/SignUp';

function App(): any {
  const [isModal, setModal] = useState<boolean>(false);
  const [isLogin, setLogin] = useState<boolean>(false);
  const [isLoginModal, setLoginModal] = useState<boolean>(false);

  // 타입생성 및 상태 객체값 지정 필요
  const [modalData, setModalData] = useState([]);

  //전체 지도 데이터 받아오기
  useEffect(() => {
    axios
      .get(
        'http://ec2-52-79-247-245.ap-northeast-2.compute.amazonaws.com/shop/getAll',
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('total', JSON.stringify(res.data));
      });
  }, []);

  //내위치 위도경도

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도
      console.log(lat, lon);
    });
  }, []);

  const handleModalData = (data: any) => {
    setModalData(data);
  };

  const [isSignUp, setSignUp] = useState<boolean>(false);
  // console.log(isLoginModal);
  // console.log(isSignUp);

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
    if (sessionStorage.getItem('access_token') !== null) {
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
              return <Mypage />;
            }
          }}
        />
        {/* <Route path="/mypage/justinfo" render={() => <JustInfo />} /> */}
        <Route exact path="/mypage2" render={() => <Mypage2 />} />
        <Route exact path="/mypage3" render={() => <Mypage3 />} />
        <Route exact path="/mypage4" render={() => <Mypage4 />} />
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
