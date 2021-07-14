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
  animation-delay: 1s;
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
  & span {
    display: block;
    position: absolute;
    font-size: 1rem;
    color: #189cc4;
    top: 100px;
    width: 60px;
    /* border: 1px solid red; */
    text-align: center;
    left: -50%;
    font-weight: 700;
  }
  
  @media screen and (max-width: 800px) {
    top: 70%;
    right: 50%;
    margin-right: -15px;
  }
`;

function Scroll() {
  return (
    <ScrollOut>
      <span>Down</span>
    </ScrollOut>
  );
}

export default Scroll;
