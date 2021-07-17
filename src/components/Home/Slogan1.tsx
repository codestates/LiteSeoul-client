import React from 'react';
import styled from 'styled-components';
import Recycle from '../SVG/Recycle';

const Slogan1Out = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  background: #fff;
  min-width: 500px;
`;

const SloganMain = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const SloganImg = styled.div`
  width: 40%;
  height: 70%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: 2s all;
  transform: translateX(-100%);
  opacity: 0;
  &.slogan1Img {
    transform: translateX(0%);
    opacity: 1;
  }

  @media screen and (max-width: 800px) {
    width: 70%;
    height: 50%;
  }
`;

const SloganTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 7rem;
  font-weight: 700;
  color: #1894cc;

  @media screen and (max-width: 1900px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 1280px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 650px) {
    font-size: 3rem;
  }
`;

const SloganSubTitle = styled.div`
  position: absolute;
  top: 63%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 700;
  color: #000;

  @media screen and (max-width: 1900px) {
    font-size: 2rem;
    top: 58%;
  }
  @media screen and (max-width: 1280px) {
    font-size: 1.5rem;
    top: 58%;
  }
  @media screen and (max-width: 951px) {
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
    top: 62%;
  }
  @media screen and (max-width: 905px) {
    font-size: 1.3rem;
    top: 55%;
  }
  @media screen and (max-width: 805px) {
    font-size: 1.3rem;
    top: 62%;
  }
  @media screen and (max-width: 650px) {
    font-size: 1.3rem;
    top: 58%;
  }
`;

const SloganText = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 3%;
  position: relative;
  opacity: 0;
  transition: 2s all;
  & img {
    width: 40%;
    object-fit: cover;
    opacity: 0.2;
    position: absolute;
    z-index: 10;
    transform: rotate(15deg);
  }
  &.slogan1Text {
    opacity: 1;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

const SloganTextTitle = styled.div`
  width: 100%;
  height: 10%;
  margin-bottom: 15px;
  text-align: right;
  font-size: 3.5rem;
  font-weight: 700;
  z-index: 20;

  @media screen and (max-width: 1550px) {
    height: auto;
    font-size: 3rem;
  }
  @media screen and (max-width: 1320px) {
    height: auto;
    font-size: 2.4rem;
  }
  @media screen and (max-width: 700px) {
    height: auto;
    font-size: 1.8rem;
  }
`;

const SloganTextContent = styled.div`
  width: 100%;
  height: auto;
  font-size: 1.2rem;
  text-align: right;
  color: #6e6e73;
  z-index: 20;
  line-height: 30px;

  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 761px) {
    font-size: 0.9rem;
  }
`;

function Slogan1() {
  return (
    <Slogan1Out id="slogan1">
      <SloganMain>
        <SloganImg id="slogan1Img">
          <Recycle></Recycle>
          <SloganTitle>LiteSeoul</SloganTitle>
          <SloganSubTitle>Zero Waste Life</SloganSubTitle>
        </SloganImg>
        <SloganText id="slogan1Text">
          <SloganTextTitle>'제로 웨이스트 샵'을 찾아드릴게요</SloganTextTitle>
          <SloganTextContent>
            탄소중립시대인 '넷제로(Net-Zero)'를 위해 함께 동참해주세요.
            <br />
            당신 근처에서 환경을 위해 재생용기를 사용하고 1회용품과 화학용품을
            없앤 '제로 웨이스트 샵'을 만나보세요.
          </SloganTextContent>
        </SloganText>
      </SloganMain>
    </Slogan1Out>
  );
}

export default Slogan1;
