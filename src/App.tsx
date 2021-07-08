import axios from 'axios';
import { useState } from 'react';
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
import { useEffect } from 'react';

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

function App(): any {
  const [isModal, setModal] = useState<boolean>(false);
  const [isLogin, setLogin] = useState<boolean>(false);
  console.log('로그인 여부', isLogin);
  const [isLoginModal, setLoginModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState([]);
  const [isSignUp, setSignUp] = useState<boolean>(false);
  console.log('회원가입 모달창', isSignUp);
  const [myinfo, setMyinfo] = useState<userInfoForm>({
    id: 0,
    name: '',
    email: '',
    nick: '',
    phone: '',
    level: 0,
    currentExp: 0,
    maxExp: 0,
    profileImgPath: '',
  });
  // console.log(myinfo)

  //전체 지도 데이터 받아오기
  useEffect(() => {
    axios.get('https://www.api.liteseoul.com/shop/getAll').then((res) => {
      // console.log(res.data);
      localStorage.setItem('total', JSON.stringify(res.data));
    });
    localStorage.setItem(
      'recommend',
      JSON.stringify({
        nearest: {
          address: '성동구 왕십리로 115 헤이그라운드 9층',
          category: 'life',
          distance: 3.608268553240311,
          id: 6,
          latitude: '37.54804049927143',
          longitude: '127.04413748468407',
          name: '더피커',
          phone: '070-4118-0710',
          recommend: 'antiPlastic',
        },
        resultAntiChemical: {
          address: '서대문구 홍제천로2길 100, 1층',
          category: 'cafe',
          id: 17,
          latitude: '37.57177467293018',
          longitude: '126.92323569632859',
          name: '카페 샘',
          phone: '010-3646-4135',
          recommend: 'antiChemical',
        },
        resultAntiPlastic: {
          address: '금천구 독산로 312 1층',
          category: 'cafe',
          id: 3,
          latitude: '37.47491311875498',
          longitude: '126.90365938283361',
          name: '데일리로스팅',
          phone: '070-4205-1212',
          recommend: 'antiPlastic',
        },
        resultRecycle: {
          address: '서대문구 연희동 708번지 1층',
          category: 'cafe',
          id: 12,
          latitude: '37.575344352775566',
          longitude: '126.92843671167105',
          name: '보틀팩토리',
          phone: '02-3144-0703',
          recommend: 'recycle',
        },
      }),
    );
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
      localStorage.setItem('nav', JSON.stringify(latlon));
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

  // 토큰을 받아와서 세션 스토리지에 저장하는 이펙트 훅
  useEffect(() => {
    axios
      .post(
        'http://ec2-3-142-145-100.us-east-2.compute.amazonaws.com/user/get',
        {
          access_token: sessionStorage.getItem('access_token'),
        },
      )
      .then((res) => {
        // console.log(res)
        setMyinfo(res.data);
      });
  }, []);

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
        <Route exact path="/" render={() => <Home isLogin={isLogin} />} />
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
