import React from 'react';
import styled from 'styled-components';
import Recycle from '../SVG/Recycle';

const Slogan1Out = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  background: #fff;
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
  /* border: 1px solid blue; */
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
  /* border: 1px solid red; */
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
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 3%;
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
  text-align: right;
  font-size: 3.5rem;
  font-weight: 700;
  @media screen and (max-width: 1200px) {
    height: auto;
    font-size: 3rem;
  }
`;

const SloganTextContent = styled.div`
  width: 100%;
  height: auto;
  /* background-color: red; */
  font-size: 1.2rem;
  text-align: right;
  color: #6e6e73;
  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
`;
function Slogan1() {
  return (
    <Slogan1Out>
      <SloganMain>
        <SloganImg>
          <Recycle></Recycle>
          <SloganTitle>LiteSeoul</SloganTitle>
          <SloganSubTitle>Zero Waste Life</SloganSubTitle>
        </SloganImg>
        <SloganText>
          <SloganTextTitle>Zero Waste Life</SloganTextTitle>
          <SloganTextContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </SloganTextContent>
        </SloganText>
      </SloganMain>
    </Slogan1Out>
  );
}

export default Slogan1;
