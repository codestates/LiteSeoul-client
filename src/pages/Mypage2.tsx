import React from 'react';
import MypageNav from '../components/profile/MypageNav';
import BillsLog from '../components/profile/BillsLog';
import styled from 'styled-components';

const MyPageOut = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  overflow: auto;
  /* border: 1px solid red; */
  /* background: yellow; */
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

function Mypage2({myinfo}: any) {
  return (
    <MyPageOut>
      <MypageNav myinfo={myinfo}/>
      <BillsLog />
    </MyPageOut>
  );
}

export default Mypage2;
