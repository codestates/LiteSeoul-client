import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  @media screen and (max-width: 1201px) {
    position: absolute;
    opacity: 0.6;
    width: 600px;
    height: 600px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const NotFoundLogo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & span {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  & img {
    width: 80%;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 1201px) {
    width: 500px;
    position: absolute;
    & span {
      font-size: 2.5rem;
    }
  }
`;

const NotFoundBtn = styled.button`
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: #1894cc;
  z-index: 3;
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: 20px;
  & a {
    color: #fff;
    transition: 0.4s all;
    &:hover {
      letter-spacing: 0.2rem;
    }
  }

  @media screen and (max-width: 1201px) {
    width: 200px;
  }
`;

function NotFound() {
  return (
    <NotFoundOut>
      <NotFoundImg>
        <NotFoundImgs></NotFoundImgs>
      </NotFoundImg>
      <NotFoundLogo>
        <span>Not Found</span>
        <img src="/img/LiteSeoul_mainLogo.svg" alt="NotFound"></img>
        <NotFoundBtn>
          <Link to="/">참여하기</Link>
        </NotFoundBtn>
      </NotFoundLogo>
    </NotFoundOut>
  );
}

export default NotFound;
