// import axios from 'axios';
// import { useState, useEffect } from 'react';
import { useState }from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Marker from './components/Modal/Marker';
import Nav from './components/Nav';
import SignIn from './components/Modal/SignIn';
import Mypage from './pages/Mypage';
// import Donation from './pages/Donation';
import NotFound from './pages/NotFound';
import Map from './pages/Map';
import SignUp from './components/Modal/SignUp';
import JustInfo from './components/profile/JustInfo';
import BillsLog from './components/profile/BillsLog';
import LikePlace from './components/profile/LikePlace';
import InfoEdit from './components/Modal/InfoEdit';
import MemberOut from './components/profile/MemberOut';

function App(): any {
  const [isModal, setModal] = useState<boolean>(false);
  const [isLogin, setLogin] = useState<boolean>(true);
  const [isLoginModal, setLoginModal] = useState<boolean>(false);
  // console.log(isLoginModal);
  const handleModal = () => {
    setModal(!isModal);
  };
  const handleLoginModal = () => {
    setLoginModal(!isLoginModal);
  };

  const handleLogin = () => {
    setLogin(!isLogin);
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
        <Route exact path="/mypage/billslog" render={() => <BillsLog />} />
        <Route exact path="/mypage/likeplace" render={() => <LikePlace />} />
        <Route exact path="/mypage/memberout" render={() => <MemberOut />} />
        <Route
          path="/signin"
          render={() => (
            <SignIn
              isLogin={isLogin}
              handleLogin={handleLogin}
              handleLoginModal={handleLoginModal}
            />
          )}
        />
        <Route
          path="/map"
          render={() => <Map isModal={isModal} handleModal={handleModal} />}
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
      {isLoginModal === false ? (
        <></>
      ) : (
        <SignIn
          // isLogin={isLogin}
          handleLogin={handleLogin}
          handleLoginModal={handleLoginModal}
        ></SignIn>
      )}
      {isModal ? (
        <Marker isModal={isModal} handleModal={handleModal}></Marker>
      ) : (
        <></>
      )}
    </BrowserRouter>
  );
}

export default App;
