import React from 'react';
import styled from 'styled-components';
import Background from '../SVG/BackGround';
import LogoSvg from '../SVG/LogoSvg';

const RendingOut = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  position: relative;
  overflow: hidden;
`;

const RendingSubTitle = styled.div`
  width: 40%;
  /* border: 1px solid red; */
  text-align: right;
  font-size: 3rem;
  font-weight: 700;
  color: #000;
  margin-top: 20px;
  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const RendingContent = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  & div {
    width: 60%;
    color: #6e6e73;
    font-size: 1rem;
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
  z-index: 3;
  font-weight: 500;
  font-size: 1.3rem;
  transition: 0.4s all;
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
  }
`;
function Rending() {
  return (
    <RendingOut>
      <Background></Background>
      <LogoSvg></LogoSvg>
      <RendingSubTitle>Zero Waste Life</RendingSubTitle>
      <RendingContent>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.mmy text of the printing and typesetting
        </div>
        <RendingBtn>Explore</RendingBtn>
      </RendingContent>
    </RendingOut>
  );
}

export default Rending;
