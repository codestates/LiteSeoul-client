import React from 'react';
import MypageNav from '../components/profile/MypageNav';
import LikePlace from '../components/profile/LikePlace';
import styled from 'styled-components';

const MyPageOut = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  /* overflow: hidden; */
  /* border: 1px solid red; */
  /* background: yellow; */
  padding-top: 68px;
  display: flex;
  position: relative;

  @media screen and (max-width: 1101px) {
    height: auto;
  }
`;

function Mypage3({myinfo}: any) {
  return (
    <MyPageOut id="Mypage">
      <MypageNav myinfo={myinfo}/>
      <LikePlace myinfo={myinfo}/>
    </MyPageOut>
  );
}

export default Mypage3;
