import React from 'react';
import Footer from '../components/Home/Footer';
import Rending from '../components/Home/Rending';
import Slogan1 from '../components/Home/Slogan1';
import Slogan2 from '../components/Home/Slogan2';
import Recommends from '../components/Home/Recommends';
import styled from 'styled-components';

const HomeOut = styled.div`
  /* padding-top: 90px; */
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: #eee;
  position: relative;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const TopBtn = styled.div`
  width: 80px;
  height: 80px;
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
  font-size: 1.2rem;
  bottom: 3%;
  right: 3%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.4s all;
  &:hover {
    background-color: #ff735d;
    letter-spacing: 0.2rem;
  }
`;

function Home() {
  return (
    <HomeOut>
      <TopBtn>TOP</TopBtn>
      <Rending></Rending>
      <Recommends></Recommends>
      <Slogan1></Slogan1>
      <Slogan2></Slogan2>
      <Footer></Footer>
    </HomeOut>
  );
}

export default Home;
