import React from 'react';
import MypageNav from '../components/profile/MypageNav';
import MemberOut from '../components/profile/MemberOut';
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
    height: 900px;
  }
`;

function Mypage4() {
  return (
    <MyPageOut>
      <MypageNav />
      <MemberOut />
    </MyPageOut>
  );
}

export default Mypage4;
