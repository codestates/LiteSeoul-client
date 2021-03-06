import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Background from '../SVG/BackGround';
import LogoSvg from '../SVG/LogoSvg';
import Scroll from './Scroll';

const RendingOut = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 990px;
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  position: relative;
  overflow: hidden;
`;

const SubTitleAni = keyframes`
0%{
  opacity:0;
  transform:translateX(-400px);
}
100%{
  opacity:1;
  transform:translateX(0px);

}
`;

const RendingSubTitle = styled.div`
  width: 40%;
  text-align: right;
  font-size: 3rem;
  font-weight: 700;
  color: #000;
  margin-top: 20px;
  z-index: 900;
  animation: ${SubTitleAni} 2s ease forwards;

  @media screen and (max-width: 1471px) {
    font-size: 1.9rem;
    text-align: center;
  }
  @media screen and (max-width: 901px) {
    font-size: 1.6rem;
    text-align: center;
  }
  @media screen and (max-width: 781px) {
    font-size: 1.3rem;
    text-align: center;
  }
  @media screen and (max-width: 641px) {
    font-size: 1.1rem;
    text-align: center;
  }
  @media screen and (max-width: 541px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;

const RendingContentAni = keyframes`
0%{
  opacity:0;
  transform:translateY(90px) scale(0.7);
}
100%{
  opacity:1;
  transform:translateY(0px) scale(1);
}
`;

const RendingContent = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  z-index: 990;
  animation: ${RendingContentAni} 2s ease forwards;
  & div {
    width: 65%;
    color: #6e6e73;
    font-size: 1rem;
    line-height: 25px;
    text-align: justify;
  }

  @media screen and (max-width: 1600px) {
    width: 40%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    & div {
      width: 100%;
      color: #6e6e73;
      font-size: 1rem;
      margin-bottom: 10px;
      font-size: 0.9rem;
      text-align: center;
    }
  }
  @media screen and (max-width: 900px) {
    width: 40%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    & div {
      display: none;
    }
  }
`;

const RendingBtn = styled.button`
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: #189cc4;
  color: #fff;
  z-index: 99;
  font-weight: 500;
  font-size: 1.3rem;
  transition: 0.4s all;
  position: relative;
  & a {
    color: #fff;
  }
  &:hover {
    background-color: #ff735d;
    letter-spacing: 0.2rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
  }

  @media screen and (max-width: 1100px) {
    height: 30px;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    /* display: none; */
  }
`;

function Rending() {
  return (
    <RendingOut id="rending">
      <Scroll></Scroll>
      <Background></Background>
      <LogoSvg></LogoSvg>
      <RendingSubTitle>"????????? ??????, ????????? ????????????"</RendingSubTitle>
      <RendingContent>
        <div>
          ??????, ?????? ????????? ????????? ?????? ????????? ????????? ???????????????.
          <br />
          ????????? ??? ?????? ??????????????? ???????????? ????????? ?????? ????????? ??????
          ??????????????????.
        </div>
        <RendingBtn>
          <Link to="/map">????????????</Link>
        </RendingBtn>
      </RendingContent>
    </RendingOut>
  );
}

export default Rending;
