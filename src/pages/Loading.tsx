import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loadinging = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 1000;
  & img {
    width: 190px;
    height: 190px;
    position: absolute;
  }
`;

const textAni = keyframes`
0%{
  opacity:0;
}
50%{
  opacity:1;
}
100%{
  opacity:0;
  
}
`;

const LoadingText = styled.div`
  width: 150px;
  height: 40px;
  color: #189cc4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  animation: ${textAni} 4s infinite;
`;

function Loading() {
  return (
    <Loadinging>
      <LoadingText>Loading</LoadingText>
      <img src="img/loading.gif" alt="loading"></img>
    </Loadinging>
  );
}

export default Loading;
