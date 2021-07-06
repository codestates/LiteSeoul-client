import React, { useState } from 'react';
import MypageNav from '../components/profile/MypageNav';
import JustInfo from '../components/profile/JustInfo';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';

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

//유저정보 데이터 타입 관리
interface userInfoForm {
  id: number;
  name: string;
  email: string;
  nickname: string;
  phone: string;
  level: number;
  expnow: number;
  expall: number;
}

function Mypage() {

  const [myinfo, setMyinfo] = useState<userInfoForm>({
    id: 0,
    name: '',
    email: '',
    nickname: '',
    phone: '',
    level: 0,
    expnow: 0,
    expall: 0,
  })

  useEffect(() => {
    axios.get('url')
    .then(res => {
      setMyinfo(res.data)
    })
  }, [myinfo])
    // 개인정보 관리 인터페이스와 객체(여기를 기점으로 MypageNav와 JustInfo에 동시 프롭스를 내려주면 된다.)


  return (
    <MyPageOut>
      <MypageNav myinfo={myinfo} />
      <JustInfo myinfo={myinfo}/>
    </MyPageOut>
  );
}

export default Mypage;
