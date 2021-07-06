import React from "react";
import { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import dummyMyInfo from "../documents/dummyMyInfo";
import styled from "styled-components";
import Mypage from "../../pages/Mypage";

const MyPageNavOut = styled.div`
  width: 20%;
  height: 100%;
  border-right: 1px solid #189cc4;
  position: fixed;
  background-color: #fff;
  z-index: 900;
  @media screen and (max-width: 1101px) {
    width: 300px;
  }
  @media screen and (max-width: 1001px) {
    position: absolute;
    display: none;
    &.nav1 {
      display: block;
    }
  }
  @media screen and (max-width: 751px) {
    position: absolute;
    top: 60px;
  }
  @media screen and (max-width: 601px) {
    position: absolute;
    display: none;
    top: 0;
  }
`;
const MyPageNavTop = styled.div`
  width: 100%;
  height: 15%;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #189cc4;
`;
const MyPageNavTopInfo = styled.div`
  width: 70%;
  height: 50%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  & div:nth-child(1) {
    width: 100%;
    height: 50%;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: yellow; */
  }
  /* & div:nth-child(2) {
    height: 30%;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    background: blue;
  } */
`;

const MyPageNavMain = styled.div`
  width: 100%;
  height: 85%;
  /* background: #ccc; */
`;

const MyPageNavUl = styled.ul`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* background: pink; */
  & li {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: yellow; */
    & a {
      width: 70%;
      height: 50px;
      border-radius: 25px;
      border: 3px solid #189cc4;
      color: #189cc4;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 25px;
      position: relative;

      &.active {
        border: none;
        background: #ff735d;
        color: #fff;
      }
      &:hover {
        border: none;
        background: #ff735d;
        color: #fff;
      }
    }
  }
`;

const NavHidden = styled.div`
  width: 20px;
  height: 80px;
  background-color: #189cc4;
  position: absolute;
  top: 20%;
  transform: translateY(-50%);
  border-radius: 0 5px 5px 0;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  z-index: 900;
  display: none;
  & img {
    width: 15px;
    height: 15px;
  }
  @media screen and (max-width: 1001px) {
    display: flex;
  }
`;

function MypageNav(props: any) {
  const handleNav = () => {
    document.getElementById("nav1")?.classList.toggle("nav1");
    document.getElementById("hidden1")?.classList.toggle("hidden1");
  };

  return (
    <>
      <NavHidden id="hidden1" onClick={handleNav}>
        <img src="icon/arrow_left_white.svg" alt="arrow"></img>
      </NavHidden>
      <MyPageNavOut id="nav1">
        <MyPageNavTop>
          <MyPageNavTopInfo>
            {/* <div>반갑습니다. {myinfo.nickname}님</div> */}
            <div>반갑습니다. {dummyMyInfo.nickname}님</div>
          </MyPageNavTopInfo>
        </MyPageNavTop>
        <MyPageNavMain>
          <MyPageNavUl>
            <li>
              <NavLink exact to="/mypage">
                MyPage
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/mypage2">
                인증하기
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/mypage3">
                즐겨찾기
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/mypage4">
                회원탈퇴
              </NavLink>
            </li>
          </MyPageNavUl>
        </MyPageNavMain>
      </MyPageNavOut>
    </>
  );
}

export default MypageNav;
