import React from 'react';
import styled from 'styled-components';
import NotFoundImgs from '../components/SVG/NotFoundImgs';

const NotFoundOut = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 999;
  background: #fff;
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundImg = styled.div`
  width: 700px;
  height: 700px;
  &img {
    width: 100%;
    height: 100%;
  }
`;

const NotFoundLogo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    width: 80%;
    margin-bottom: 30px;
  }
`;

const NotFoundBtn = styled.button`
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: #1894cc;
  color: #fff;
  z-index: 3;
  font-weight: 500;
  font-size: 1.3rem;
  transition: 0.4s all;
  &:hover {
    letter-spacing: 0.2rem;
  }
`;

function NotFound() {
  return (
    <NotFoundOut>
      <NotFoundImg>
        {/* <img src="/img/notfound.svg" alt="NotFound"></img> */}
        <NotFoundImgs></NotFoundImgs>
      </NotFoundImg>
      <NotFoundLogo>
        <img src="/img/LiteSeoul_mainLogo.svg" alt="NotFound"></img>
        <NotFoundBtn>Explore</NotFoundBtn>
      </NotFoundLogo>
    </NotFoundOut>
  );
}

export default NotFound;
