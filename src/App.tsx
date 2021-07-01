// import axios from 'axios';
// import { useState, useEffect } from 'react';
import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./components/Modal/SignIn";
import Mypage from "./pages/Mypage";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
// import Donation from './pages/Donation';
import NotFound from "./pages/NotFound";
import Map from "./pages/Map";
import SignUp from "./components/Modal/SignUp";
import JustInfo from "./components/profile/JustInfo";
import BillsLog from "./components/profile/BillsLog";
import LikePlace from "./components/profile/LikePlace";
import InfoEdit from "./components/Modal/InfoEdit";
import MemberOut from "./components/profile/MemberOut";

const App: React.FC = () => {
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

  const [isLogin, SetLogin] = useState<boolean>(true);
  return (
    <BrowserRouter>
      <Nav></Nav>
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
        <Route path="/mypage/justinfo" render={() => <JustInfo />} />
        <Route exact path="/mypage/billslog" render={() => <BillsLog />} />
        <Route exact path="/mypage/likeplace" render={() => <LikePlace />} />
        <Route exact path="/mypage/memberout" render={() => <MemberOut />} />
        {/* <Route exact path="/mypage/infoedit" render={() => <InfoEdit />} /> */}
        <Route path="/signin" render={() => <SignIn />} />
        <Route path="/map" render={() => <Map />} />
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
      <Footer />
    </BrowserRouter>
  );
};

export default App;
