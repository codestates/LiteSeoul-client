import React from 'react';
import styled, { keyframes } from 'styled-components';
import Scroll from './Scroll';

const BikeOut = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: 910;
  min-height: 800px;
  min-width: 500px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 801px) {
    display: none;
  }
`;

const EarthAni = keyframes`
0%{
  transform:rotate(0deg)
}
100%{
  transform:rotate(360deg)
}
`;

const Earth = styled.div`
  width: 800px;
  height: 800px;
  position: absolute;
  /* border: 1px solid red; */
  left: 50%;
  margin-left: -400px;
  top: 50%;
  background-image: url('img/earth-01.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  margin-top: 100px;
  animation: ${EarthAni} 15s linear infinite;
  opacity: 0.7;
`;
const SunAni = keyframes`
0%{
  transform: translate(-18px, 20px);
}
50%{
  transform: translate(18px, 0px);
}
100%{
  transform: translate(-18px, 20px);
}
`;

const Sun = styled.div`
  width: 300px;
  height: 300px;
  background-image: url('img/sunny.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: absolute;
  top: 18%;
  left: 70%;
  animation: ${SunAni} 5s linear infinite;
`;

const CloudAni = keyframes`
0%{
  transform:translateX(-50vw);
}
100%{
  transform:translateX(100vw);
}
`;
const CloudAni2 = keyframes`
0%{
  transform:translateX(-50vw);
}
100%{
  transform:translateX(100vw);
}
`;
const CloudAni3 = keyframes`
0%{
  transform:translateX(-50vw);
}
100%{
  transform:translateX(100vw);
}
`;
const CloudAni4 = keyframes`
0%{
  transform:translateX(-50vw);
}
100%{
  transform:translateX(100vw);
}
`;

const Cloud = styled.div`
  width: 300px;
  height: 150px;
  background-image: url('img/cloud-01.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: absolute;
  top: 18%;
  left: 10%;
  animation: ${CloudAni} 18s linear infinite;
`;

const Cloud2 = styled.div`
  width: 300px;
  height: 150px;
  background-image: url('img/cloud-01.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: absolute;
  top: 45%;
  left: 50%;
  animation: ${CloudAni2} 17s linear infinite;
`;

const Cloud3 = styled.div`
  width: 100px;
  height: 100px;
  background-image: url('img/cloud-01.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: absolute;
  top: 15%;
  right: 60%;
  opacity: 0.6;
  animation: ${CloudAni3} 16s linear infinite;
`;
const Cloud4 = styled.div`
  width: 200px;
  height: 100px;
  background-image: url('img/cloud-01.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: absolute;
  top: 50%;
  right: 10%;
  opacity: 0.6;
  animation: ${CloudAni4} 15s linear infinite;
`;

const TextAni = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1;
  
}
`;

const Text = styled.div`
  width: 1000px;
  height: 350px;
  color: black;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 20%;
  margin-left: -500px;
  z-index: 900;
  opacity: 0;
  animation: ${TextAni} 3s linear forwards;

  & span:nth-of-type(1) {
    font-size: 8rem;
    color: #189cc4;
    font-weight: 700;
    margin-right: 30px;
  }
  & span:nth-of-type(2) {
    font-size: 2rem;
    color: #000;
    font-weight: 700;
    margin-right: 30px;
  }
  @media screen and (max-width: 1101px) {
    width: 800px;
    margin-left: -400px;

    & span:nth-of-type(1) {
      font-size: 6rem;
    }
    & span:nth-of-type(2) {
      font-size: 1.2rem;
      color: #000;
      font-weight: 700;
      margin-right: 30px;
    }
  }
`;
function Bike2() {
  return (
    <BikeOut>
      <Text>
        <span>LiteSeoul</span>
        <br></br>
        <span>"당신의 서울, 서울을 깨끗하게"</span>
      </Text>
      <Scroll></Scroll>

      <Sun></Sun>
      <Earth></Earth>
      <Cloud></Cloud>
      <Cloud2></Cloud2>
      <Cloud3></Cloud3>
      <Cloud4></Cloud4>
    </BikeOut>
  );
}

export default Bike2;
