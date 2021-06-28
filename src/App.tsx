// import axios from 'axios';
// import { useState, useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './components/Modal/SignIn';
import Mypage from './pages/Mypage';
import Footer from './components/Footer';
import Nav from './components/Nav';
// import Donation from './pages/Donation';
import NotFound from './pages/NotFound';
import Map from './pages/Map';


function App(): any {
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
  const [isLogin, SetLogin] = useState<boolean>(false);
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
          path="/mypage"
          render={() => {
            if(isLogin === false) {
              return <Redirect to="/signin" />
            }
            return <Mypage/>
          }}
        />
        <Route 
          path="/signin"
          render={() => (
            <SignIn/>
          )}
        />
        <Route 
          path="/map"
          render={() => (
            <Map/>
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
      <Footer />
    </BrowserRouter>
  )
}

export default App;
