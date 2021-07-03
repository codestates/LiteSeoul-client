import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Home/Footer';
import Rending from '../components/Home/Rending';
import Slogan1 from '../components/Home/Slogan1';
import Slogan2 from '../components/Home/Slogan2';
import Slogan3 from '../components/Home/Slogan3';
import Ranking from '../components/Home/Ranking';

import Recommends from '../components/Home/Recommends';
import styled from 'styled-components';
import { homedir } from 'os';

const HomeOut = styled.div`
  /* padding-top: 90px; */
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: relative;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const TopBtn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #189cc4;
  position: fixed;
  z-index: 991;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  bottom: 3%;
  right: 3%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.4s all;
  opacity: 1;
  &:hover {
    background-color: #ff735d;
    letter-spacing: 0.2rem;
  }
`;

function Home() {
  const [isLogin, setLogin] = useState(true);
  const handleTop = () => {
    console.log('버튼 확인');
  };

  return (
    <HomeOut id="home">
      <TopBtn onClick={handleTop}>TOP</TopBtn>
      {isLogin ? <></> : <Rending></Rending>}
      {isLogin ? <></> : <Recommends></Recommends>}
      {isLogin ? (
        <></>
      ) : (
        <>
          <Slogan1></Slogan1>
          <Slogan2></Slogan2>
        </>
      )}

      {isLogin ? <Ranking></Ranking> : <></>}
      {isLogin ? <Recommends></Recommends> : <></>}
      <Footer></Footer>
    </HomeOut>
  );
}
export default Home;
