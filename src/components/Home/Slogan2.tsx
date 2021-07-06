import React from 'react';
import styled from 'styled-components';
import Wood from '../SVG/Wood';

const Slogan2Out = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  background: #fff;
  min-width: 500px;
`;

const SloganMain = styled.div`
  width: 90%;
  height: 100%;
  /* border: 1px solid red; */
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
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  @media screen and (max-width: 801px) {
    width: 60%;
    height: 50%;
  }
`;

const SloganText = styled.div`
  width: 60%;
  height: 70%;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 3%;
  & img {
    width: 30%;
    object-fit: cover;
    opacity: 0.2;
    left: 5%;
    position: absolute;
    z-index: 10;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

const SloganTextTitle = styled.div`
  width: 100%;
  height: 10%;
  /* background-color: red; */
  margin-bottom: 15px;
  text-align: left;
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
  @media screen and (max-width: 720px) {
    height: auto;
    font-size: 1.8rem;
  }
`;

const SloganTextContent = styled.div`
  width: 90%;
  height: 20%;
  /* background-color: red; */
  font-size: 1.2rem;
  text-align: left;
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
function Slogan2() {
  return (
    <Slogan2Out>
      <SloganMain>
        <SloganText>
          <img src="img/blueback-03.png" alt="bg"></img>

          <SloganTextTitle>당신의 제로 웨이스트(Zero Waste)</SloganTextTitle>
          <SloganTextContent>
            제로 웨이스트 샵에서 구매한 영수증 혹은 인증샷을 올려주세요! <br />
            점수를 산정하여 매 달 상위권에 계신 분들의 명의로 서울시내 결식아동
            구호관련 기부를 진행합니다
          </SloganTextContent>
        </SloganText>

        <SloganImg>
          <Wood></Wood>
        </SloganImg>
      </SloganMain>
    </Slogan2Out>
  );
}

export default Slogan2;
