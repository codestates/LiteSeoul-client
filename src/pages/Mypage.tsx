import React, { useState } from "react";
import MypageNav from "../components/profile/MypageNav";
import JustInfo from "../components/profile/JustInfo";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import BillsLog from "../components/profile/BillsLog";
import LikePlace from "../components/profile/LikePlace";
import MemberOut from "../components/profile/MemberOut";

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

function Mypage({myinfo}: any) {

  return (
    <MyPageOut>
      <MypageNav myinfo={myinfo} />
      <JustInfo myinfo={myinfo} />
    </MyPageOut>
  );
}

export default Mypage;
