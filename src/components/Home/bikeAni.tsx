import React from 'react';
import styled, { keyframes } from 'styled-components';

const BikeOut = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  z-index: 910;
  min-height: 800px;
  min-width: 500px;
  background-image: url('img/bgbike.png');
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: '';
    width: 100%;
    height: 800px;
    min-height: 900px;
    position: absolute;
    background-color: #fff;
    opacity: 0.6;
  }

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const Move = keyframes`
0%{
 transform:translateX(-120%);
}
100%{
    transform:translateX(120%);
}
`;

const AniOut = styled.div`
  padding-top: 150px;
  width: max-content;
  min-height: 800px;
  height: 100vh;
  display: flex;
  align-items: center;
  animation: ${Move} 12s infinite linear;
`;

const Ani = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
`;

const Rotate = keyframes`
0%{
 transform:rotate(0deg);
}
100%{
    transform:rotate(360deg);
}
`;

const Img1 = styled.img`
  width: 580px;
  height: 580px;
  position: absolute;
  z-index: 901;
`;

const Img2 = styled.img`
  width: 195px;
  height: 195px;
  position: absolute;
  bottom: 44px;
  left: 57px;
  z-index: 900;
  animation: ${Rotate} 3s infinite linear;
`;

const Img3 = styled.img`
  width: 195px;
  height: 195px;
  position: absolute;
  bottom: 44px;
  right: 9px;
  z-index: 900;
  animation: ${Rotate} 3s infinite linear;
`;

const Text = styled.div`
  width: max-content;
  height: 350px;
  color: black;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & span:nth-child(1) {
    font-size: 6rem;
    color: #189cc4;
    font-weight: 700;
    margin-right: 30px;
  }
`;

function Bike() {
  return (
    <BikeOut>
      <AniOut>
        <Text>
          <span>LiteSeoul</span>
          <br></br>
          <span>"당신의 서울, 서울을 깨끗하게"</span>
        </Text>
        <Ani>
          <Img1 src="img/bike1.png"></Img1>
          <Img2 src="img/bike2.png"></Img2>
          <Img3 src="img/bike2.png"></Img3>
        </Ani>
      </AniOut>
    </BikeOut>
  );
}

export default Bike;
