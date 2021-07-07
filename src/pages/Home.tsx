import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Home/Footer';
import Rending from '../components/Home/Rending';
import Slogan1 from '../components/Home/Slogan1';
import Slogan2 from '../components/Home/Slogan2';
import Ranking from '../components/Home/Ranking';
import Recommends from '../components/Home/Recommends';
import styled from 'styled-components';

const HomeOut = styled.div`
  /* padding-top: 90px; */
  /* border: 1px solid red; */
  width: 100%;
  height: 100vh;
  overflow: scroll;
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

function Home({isLogin}: any) {
  //탑으로 올라가는 버튼 나타는 유무
  const [isBlock, setBlock] = useState(false);
  // 스크롤 위치 추적용 (랜딩페이지로 추적함)
  const [topbtn, setTopbtn] = useState(0);

  //현재위치불러오기 추천시스템용으로다가 불러옴
  // useEffect(() => {
  //   axios
  //     .post(
  //       'http://ec2-52-79-247-245.ap-northeast-2.compute.amazonaws.com/shop/recommend',
  //       {
  //         latitude: '',
  //         longitude: '',
  //         userId: 4,
  //       },
  //     )
  //     .then((res: any) => {
  //       console.log(res);
  //     });
  // }, []);

  useEffect(() => {
    if (topbtn > 300) {
      setBlock(true);
    } else {
      setBlock(false);
    }
  }, [topbtn]);

  useEffect(() => {
    document.getElementById('home')?.addEventListener('scroll', test);
    return () =>
      document.getElementById('home')?.removeEventListener('scroll', test);
  }, []);

  const test = () => {
    if (document.getElementById('home')) {
      setTopbtn(
        Math.abs(
          Number(
            document.getElementById('rending')?.getBoundingClientRect().top,
          ),
        ),
      );
    }
  };

  const handleScroll = () => {
    document.getElementById('home')?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <HomeOut id="home">
      {isBlock ? (
        <TopBtn onClick={handleScroll} id="topbtn">
          TOP
        </TopBtn>
      ) : (
        <></>
      )}

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

