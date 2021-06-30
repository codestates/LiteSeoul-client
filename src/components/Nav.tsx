import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const NavAni = keyframes`
  0% {
    top: -90px;
    opacity:0;
  }
  100%{
    top: 0px;
    opacity:1;
  }
`;

const NavOut = styled.div`
  width: 100%;
  min-width: 500px;
  height: 90px;
  border-bottom: 1px solid #189cc4;
  position: fixed;
  z-index: 900;
  background: #ffffffb3;
  transition: 0.4s all;
  animation: ${NavAni} 1.2s;

  @media screen and (max-width: 750px) {
    height: 70px;
  }
`;
const NavTopColor = styled.div`
  height: 10px;
  background: #189cc4;
`;

const NavMainOut = styled.div`
  width: 90%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 750px) {
    height: 60px;
    justify-content: center;
  }
`;
const Logo = styled.div`
  width: 10%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  /* border: 1px solid red; */
  /* background: red; */
  color: #189cc4;
  font-weight: 700;
  font-size: 1.3rem;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const NavUl = styled.ul`
  display: flex;
  & li {
    width: 120px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s all;
    cursor: pointer;
    color: #6e6e73;
    font-weight: 500;
    &:hover {
      background: #189cc4;
      color: #fff;
    }

    & .active {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #189cc4;
      color: #fff;
    }
    & a {
      color: #6e6e73;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background: #189cc4;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 750px) {
    display: flex;
    & li {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.4s all;
      cursor: pointer;
      color: #6e6e73;
      font-weight: 500;
      font-size: 12px;
      &:hover {
        background: #189cc4;
        color: #fff;
      }

      & .active {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #189cc4;
        color: #fff;
      }
      & a {
        color: #6e6e73;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          background: #189cc4;
          color: #fff;
        }
      }
    }
  }
`;

function Nav() {
  //임시 스테이트
  const [isLogin, setLogin] = useState(false);

  return (
    <NavOut>
      <NavTopColor></NavTopColor>
      <NavMainOut>
        <Logo>LiteSeoul</Logo>
        <NavUl>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/map">
              Map
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/mypage">
              MyPage
            </NavLink>
          </li>
          {isLogin ? (
            <li
              style={{
                color: '#ff735D',
              }}
            >
              Logout
            </li>
          ) : (
            <li>Login</li>
          )}
        </NavUl>
      </NavMainOut>
    </NavOut>
  );
}

export default Nav;
