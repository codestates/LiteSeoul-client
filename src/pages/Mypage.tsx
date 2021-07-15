import React, { useState } from "react";
import MypageNav from "../components/profile/MypageNav";
import JustInfo from "../components/profile/JustInfo";
import styled from "styled-components";
import BillsLog from "../components/profile/BillsLog";
import LikePlace from "../components/profile/LikePlace";
import MemberOut from "../components/profile/MemberOut";
import NotFound from "./NotFound";

// JustInfo
const MyPageOut = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  overflow: auto;
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

function Mypage({
  myinfo,
  setLoading,
  handleModal,
  isModal,
  handleModalData,
}: any) {
  // 마이페이지 네비의 사이즈를 각 컴포넌트와 연결시 잘 맞지 않기 때문에 개별실행으로 상태 분리
  const [mypageNow, setMypageNow] = useState<string>("justinfo");

  // 각 컴포넌트 렌더링 관리 함수
  const handleMypageNow = (page: string) => {
    setMypageNow(page);
  };

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
          <BillsLog handleMypageNow={handleMypageNow} setLoading={setLoading} />
        </MyPageOut2>
      ) : mypageNow === "likeplace" ? (
        <MyPageOut3>
          <MypageNav myinfo={myinfo} handleMypageNow={handleMypageNow} />
          <LikePlace
            handleModal={handleModal}
            handleModalData={handleModalData}
          />
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
