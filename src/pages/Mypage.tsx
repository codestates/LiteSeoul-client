import React, { useState } from 'react';
import MypageNav from '../components/profile/MypageNav';
import JustInfo from '../components/profile/JustInfo';
import styled from 'styled-components';

const MyPageOut = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  overflow: hidden;
  /* border: 1px solid red; */
  /* background: yellow; */
  padding-top: 68px;
  display: flex;
  position: relative;
  @media screen and (max-width: 1101px) {
    height: 1300px;
  }
`;

function Mypage() {

    // 개인정보 관리 인터페이스와 객체(여기를 기점으로 MypageNav와 JustInfo에 동시 프롭스를 내려주면 된다.)
    // interface userInfoForm {
    //   id: number;
    //   name: string;
    //   email: string;
    //   nickname: string;
    //   phone: string;
    //   level: number;
    //   expnow: number;
    //   expall: number;
    // }
    // const MyInfo: userInfoForm = {
    //   id: id,
    //   name: name,
    //   email: email,
    //   nickname: nickname,
    //   phone: phone,
    //   level: level,
    //   expnow: expnow,
    //   expall: expall,
    // };

  return (
    <MyPageOut>
      <MypageNav />
      <JustInfo />
    </MyPageOut>
  );
}

export default Mypage;
