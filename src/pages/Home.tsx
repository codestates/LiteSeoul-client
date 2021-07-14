import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Home/Footer';
import Rending from '../components/Home/Rending';
import Slogan1 from '../components/Home/Slogan1';
import Slogan2 from '../components/Home/Slogan2';
import Ranking from '../components/Home/Ranking';
import Recommends from '../components/Home/Recommends';
import styled from 'styled-components';
import Bike from '../components/Home/bikeAni';
import Bike2 from '../components/Home/bikeAni2';

const HomeOut = styled.div`
  width: 100%;
  min-width: 500px;
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

function Home(props: any) {
  //탑으로 올라가는 버튼 나타는 유무
  const [isBlock, setBlock] = useState(false);
  // 스크롤 위치 추적용 (랜딩페이지로 추적함)
  const [topbtn, setTopbtn] = useState(0);
  let nav = JSON.parse(localStorage.getItem('nav') || '{}');

  // 현재위치불러오기 추천시스템용으로다가 불러옴
  useEffect(() => {
    axios
      .post('https://www.api.liteseoul.com/shop/recommend', {
        latitude: nav.lat || 37.535946,
        longitude: nav.lon || 127.006161,
      })
      .then((res: any) => {
        localStorage.setItem('recommend', JSON.stringify(res.data));
        console.log(JSON.parse(localStorage.getItem('recommend') || '{}'));
      });
  }, []);

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

    if (
      Math.abs(
        Number(
          document.getElementById('recommend')?.getBoundingClientRect().top,
        ),
      ) < 500
    ) {
      document.getElementById('recommend1')?.classList.add('recommend1');
    } else {
      document.getElementById('recommend1')?.classList.remove('recommend1');
    }

    if (
      document.getElementById('rending') &&
      Math.abs(
        Number(document.getElementById('slogan1')?.getBoundingClientRect().top),
      ) < 500
    ) {
      document.getElementById('slogan1Img')?.classList.add('slogan1Img');
      document.getElementById('slogan1Text')?.classList.add('slogan1Text');
    } else {
      document.getElementById('slogan1Img')?.classList.remove('slogan1Img');
      document.getElementById('slogan1Text')?.classList.remove('slogan1Text');
    }

    if (
      document.getElementById('rending') &&
      Math.abs(
        Number(document.getElementById('slogan2')?.getBoundingClientRect().top),
      ) < 500
    ) {
      document.getElementById('slogan2Img')?.classList.add('slogan2Img');
      document.getElementById('slogan2Text')?.classList.add('slogan2Text');
    } else {
      document.getElementById('slogan2Img')?.classList.remove('slogan2Img');
      document.getElementById('slogan2Text')?.classList.remove('slogan2Text');
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

      {props.isLogin ? <></> : <Rending></Rending>}
      {props.isLogin ? <></> : <Recommends></Recommends>}
      {props.isLogin ? (
        <></>
      ) : (
        <>
          <Slogan1></Slogan1>
          <Slogan2></Slogan2>
          <Bike></Bike>
        </>
      )}

      {/* 애니메이션 추가 */}
      {props.isLogin ? <Bike2></Bike2> : <></>}
      {props.isLogin ? <Ranking></Ranking> : <></>}
      {props.isLogin ? <Recommends></Recommends> : <></>}
      <Footer></Footer>
    </HomeOut>
  );
}
export default Home;
