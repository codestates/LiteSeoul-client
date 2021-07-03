// import axios from 'axios';
// import { useState, useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignIn from './components/Modal/SignIn';
import Marker from './components/Modal/Marker';
import Mypage from './pages/Mypage';
import Nav from './components/Nav';
// import Donation from './pages/Donation';
import NotFound from './pages/NotFound';
import Map from './pages/Map';

function App(): any {
  const [isModal, setModal] = useState<boolean>(false);
  const [isLogin, setLogin] = useState<boolean>(false);
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
          path="/mypage"
          render={() => {
            return <Mypage />;
          }}
        />
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
