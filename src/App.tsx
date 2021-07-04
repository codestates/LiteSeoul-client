// import axios from 'axios';
// import { useState, useEffect } from 'react';
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
// import Donation from './pages/Donation';
import NotFound from './pages/NotFound';
import Map from './pages/Map';
// import BillsLog from './components/profile/BillsLog';
import LikePlace from './components/profile/LikePlace';
// import MemberOut from './components/profile/MemberOut';
import SignUp from './components/Modal/SignUp';

function App(): any {
  const [isModal, setModal] = useState<boolean>(false);
  const [isLogin, setLogin] = useState<boolean>(true);
  const [isLoginModal, setLoginModal] = useState<boolean>(false);

  // 타입생성 및 상태 객체값 지정 필요
  const [modalData, setModalData] = useState([]);

  const handleModalData = (data: any) => {
    setModalData(data);
  }

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

  // const [result, setResult] = useState('');
  // useEffect((): any => {
  //   axios.get('http://ec2-3-142-146-122.us-east-2.compute.amazonaws.com')
  //   .then(res => {
  //     console.log('--- res === ', res)
  //     setResult(res.data);
  //   })
  // }, [])

  // return (
  //   <div className="App">
  //     {result}
  //   </div>
  // );
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
            if (isLogin === false) {
              return <Redirect to="/signin" />;
            }
            return <Mypage />;
          }}
        />
        {/* <Route path="/mypage/justinfo" render={() => <JustInfo />} /> */}
        <Route exact path="/mypage/MyPage2" render={() => <Mypage2 />} />
        <Route exact path="/mypage/MyPage3" render={() => <Mypage3 />} />
        <Route exact path="/mypage/MyPage4" render={() => <Mypage4 />} />
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
          render={() => <Map isModal={isModal} handleModal={handleModal} handleModalData={handleModalData} />}
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
        <Marker isModal={isModal} handleModal={handleModal} modalData={modalData}></Marker>
      ) : (
        <></>
      )}

      {isSignUp ? <SignUp handleSignUp={handleSignUp}></SignUp> : <></>}
    </BrowserRouter>
  );
}

export default App;
