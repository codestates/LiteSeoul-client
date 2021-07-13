import React, { useState } from "react";
import MypageNav from "../components/profile/MypageNav";
import JustInfo from "../components/profile/JustInfo";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import BillsLog from "../components/profile/BillsLog";
import LikePlace from "../components/profile/LikePlace";
import MemberOut from "../components/profile/MemberOut";
import NotFound from "./NotFound";
import { NavLink } from "react-router-dom";

// JustInfo
const MyPageOut = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  overflow: hidden;
  padding-top: 68px;
  display: flex;
  position: relative;
  @media screen and (max-width: 1101px) {
    height: auto;
  }
`;

// BillsLog
const MyPageOut2 = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  overflow: auto;
  padding-top: 68px;
  display: flex;
  position: relative;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1101px) {
    height: auto;
  }
`;

// LikePlace
const MyPageOut3 = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  padding-top: 68px;
  display: flex;
  position: relative;

  @media screen and (max-width: 1101px) {
    height: auto;
  }
`;

// MemberOut
const MyPageOut4 = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  overflow: hidden;
  padding-top: 68px;
  display: flex;
  position: relative;
  @media screen and (max-width: 1101px) {
    height: 900px;
  }
`;

function Mypage({ myinfo }: any) {
  const [mypageNow, setMypageNow] = useState("justinfo");
  console.log(mypageNow);

  // 마이페이지 컴포넌트 분리 실행 관련 상태

  const handleMypageNow = (page: any) => {
    setMypageNow(page);
  };

  useEffect(() => {
    console.log(mypageNow);
  }, [mypageNow]);

  return (
    <>
      {mypageNow === "justinfo" ? (
        <MyPageOut>
          <MypageNav myinfo={myinfo} handleMypageNow={handleMypageNow} />
          <JustInfo myinfo={myinfo} />
        </MyPageOut>
      ) : mypageNow === "billslog" ? (
        <MyPageOut2>
          <MypageNav myinfo={myinfo} handleMypageNow={handleMypageNow} />
          <BillsLog handleMypageNow={handleMypageNow}/>
        </MyPageOut2>
      ) : mypageNow === "likeplace" ? (
        <MyPageOut3>
          <MypageNav myinfo={myinfo} handleMypageNow={handleMypageNow} />
          <LikePlace myinfo={myinfo} />
        </MyPageOut3>
      ) : mypageNow === "memberout" ? (
        <MyPageOut4>
          <MypageNav myinfo={myinfo} handleMypageNow={handleMypageNow} />
          <MemberOut />
        </MyPageOut4>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default Mypage;