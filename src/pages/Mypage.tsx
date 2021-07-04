import React from 'react';
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

// const MypageContents = styled.div`
//   width: 80%;
//   height: 100%;
//   /* background: #ccc; */
//   position: absolute;
//   right: 0;
// `;

function Mypage() {
  return (
    <MyPageOut>
      <MypageNav />
      <JustInfo />

      {/* <MypageContents> */}
      {/* </MypageContents> */}
    </MyPageOut>
  );
}

export default Mypage;
