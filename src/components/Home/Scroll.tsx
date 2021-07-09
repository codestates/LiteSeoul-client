import React from 'react';
import styled, { keyframes } from 'styled-components';

const ScrollAni = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translateY(70px);
  }

`;

const ScrollOp = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }

`;
const ScrollOut = styled.div`
  width: 30px;
  height: 90px;
  margin-left: -20px;
  top: 50%;
  margin-top: -35px;
  box-shadow: inset 0 0 0 3px #189cc4;
  border-radius: 15px;
  position: absolute;
  right: 5%;
  animation: ${ScrollOp} 2s forwards;
  opacity: 0;
  animation-delay: 2s;
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #189cc4;
    margin-left: -4px;
    position: absolute;
    left: 50%;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: ${ScrollAni};
  }
`;

function Scroll() {
  return <ScrollOut></ScrollOut>;
}

export default Scroll;
