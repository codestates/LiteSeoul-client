import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const NavAni = keyframes`
  0% {
    top: -70px;
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
  height: 70px;
  border-bottom: 1px solid #189cc4;
  position: fixed;
  z-index: 920;
  background: #ffffffb3;
  transition: 0.4s all;
  animation: ${NavAni} 1.2s;
  @media screen and (max-width: 750px) {
    height: 60px;
  }
  @media screen and (max-width: 601px) {
    display: none;
    position: absolute;
    inset: 0;
    align-items: center;
    height: auto;
    background: transparent;
    animation: none;
  }
`;

const NavBtn = styled.div`
  width: 40px;
  height: 40px;
  display: none;
  cursor: pointer;
  z-index: 998;
  background-image: url('/icon/menu_white.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 0.4s all;
  @media screen and (max-width: 601px) {
    display: block;
    position: absolute;
    right: 5%;
    top: 5%;
    &.NavBtn {
      background-image: url('/icon/close_white.svg');
    }
  }
`;
const NavTopColor = styled.div`
  height: 10px;
  background: #189cc4;
  @media screen and (max-width: 601px) {
    display: none;
  }
`;

const NavMainOut = styled.div`
  width: 90%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 750px) {
    height: 50px;
    justify-content: center;
  }
`;
const Logo = styled.div`
  width: 10%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  /* border: 1px solid red; */
  /* background: red; */
  & a {
    color: #189cc4;
    font-weight: 700;
    font-size: 1.3rem;
    transition: 0.4s all;
    &:hover {
      letter-spacing: 0.2rem;
    }
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const NavUl = styled.ul`
  display: flex;
  & li {
    width: 120px;
    height: 60px;
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
      height: 50px;
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
  @media screen and (max-width: 601px) {
    display: none;
  }
`;

const NavUl2 = styled.ul`
  display: none;
  @media screen and (max-width: 601px) {
    /* border: 1px solid red; */
    z-index: 997;
    flex-direction: column;
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #189cc4;
    position: absolute;
    align-items: center;
    justify-content: center;
    right: -100%;
    transition: 0.4s all;
    &.MainNavHidden {
      right: 0;
    }
    & li {
      display: flex;
      width: 100%;
      height: 10%;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: #fff;

      /* border-bottom: 1px solid #fff; */
      &:hover {
        color: #189cc4;

        background-color: #fff;
        & a {
          color: #189cc4;
        }
      }
      & a {
        color: #fff;
      }
    }
  }
`;

function Nav(props: any) {
  const handleNav = () => {
    document.getElementById('MainNavHidden')?.classList.toggle('MainNavHidden');
    document.getElementById('NavId')?.classList.toggle('NavBtn');
  };

  const handelNav2 = () => {
    document.getElementById('MainNavHidden')?.classList.remove('MainNavHidden');
  };

  const deleteSession = () => {
    console.log('hello');
    sessionStorage.removeItem('access_token');
    // 로그아웃 시 로컬스토리지 데이터 삭제
    localStorage.removeItem('id');
    // localStorage.removeItem('total');
    window.location.replace('http://localhost:3000/');
  };

  return (
    <>
      {props.loading === true ? (
        <></>
      ) : (
        <>
          <NavBtn onClick={handleNav} id="NavId"></NavBtn>
          <NavUl2 id="MainNavHidden">
            <li>
              <NavLink exact to="/" onClick={handelNav2}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/map" onClick={handelNav2}>
                Map
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/participation" onClick={handelNav2}>
                Participation
              </NavLink>
            </li>
            {props.isLogin ? (
              <li>
                <NavLink exact to="/mypage" onClick={handelNav2}>
                  MyPage
                </NavLink>
              </li>
            ) : (
              <></>
            )}

            {props.isLogin ? (
              <li
                style={{
                  color: '#ff735D',
                }}
              >
                Logout
              </li>
            ) : (
              <li onClick={props.handleLoginModal}>Login</li>
            )}
          </NavUl2>
          <NavOut>
            <NavTopColor></NavTopColor>
            <NavMainOut>
              <Logo>
                <NavLink exact to="/">
                  LiteSeoul
                </NavLink>
              </Logo>
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
              <NavLink exact to="/participation">
                Participation
              </NavLink>
            </li>
                {props.isLogin ? (
                  <li>
                    <NavLink exact to="/mypage">
                      MyPage
                    </NavLink>
                  </li>
                ) : (
                  <></>
                )}

                {props.isLogin ? (
                  <li
                    onClick={deleteSession}
                    style={{
                      color: '#ff735D',
                    }}
                  >
                    Logout
                  </li>
                ) : (
                  <li onClick={props.handleLoginModal}>Login</li>
                )}
              </NavUl>
            </NavMainOut>
          </NavOut>
        </>
      )}
    </>
  );
}

export default Nav;
