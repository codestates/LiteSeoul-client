import React, { useState } from "react";
import dummyMyInfo from "../documents/dummyMyInfo";
import mememe from "../image/mememe.png";
import styled from "styled-components";
import InfoEdit from "../Modal/InfoEdit";

const JustInfoOut = styled.div`
  width: 80%;
  height: 100%;
  /* background: yellow; */
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
  z-index: 800;
  @media screen and (max-width: 1101px) {
    height: auto;
  }
  @media screen and (max-width: 1001px) {
    width: 100%;
  }
`;

const MyInfoTitle = styled.div`
  width: 100%;
  height: 15%;
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  padding-left: 5%;
  font-size: 3rem;
  font-weight: 700;
  @media screen and (max-width: 1101px) {
    display: none;
  }
`;

const MyInfoMain = styled.ul`
  width: 100%;
  height: 85%;
  /* background: blue; */
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 4%;
  & li {
    width: 40%;
    height: 100%;
    padding: 2%;
    /* border: 1px solid pink; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 400px;
  }
  @media screen and (max-width: 1101px) {
    flex-direction: column;
    height: auto;
    & li {
      width: 100%;
      margin-bottom: 50px;
    }
    & li:nth-child(1) {
      border-bottom: 1px solid #ccc;
      padding-top: 50px;
    }
  }
`;

const ProfileImg = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  margin-bottom: 20px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileName = styled.div`
  width: 100%;
  height: 60px;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileEmail = styled.div`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6e6e73;
  margin-bottom: 10px;
`;

const ProfileEdit = styled.div`
  width: 20%;
  height: 30px;
  border-radius: 15px;
  background-color: #ff735d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  min-width: 150px;
`;

//레벨
const ProfileLevelImg = styled.div`
  width: 500px;
  height: 320px;
  /* border-radius: 50%; */
  /* overflow: hidden; */
  margin-bottom: 20px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileLevel = styled.div`
  width: 100%;
  height: 60px;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #189cc4;
`;

const MyLevelText1 = styled.div`
  width: 100%;
  height: auto;
  font-size: 1rem;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6e6e73;
  & span:nth-child(1) {
    color: #000;
    font-weight: 700;
    font-size: 1.2rem;
  }
  & span:nth-child(2) {
    color: #189cc4;
    font-size: 1rem;
  }
`;
const MyLevelText2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  & div {
    color: #6e6e73;
  }
`;

const MyPageEdit = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  inset: 0;
  z-index: 1000;
  background-color: #000000b3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 경계선 --------------------------
const MyLevelBarOut = styled.div`
  width: 80%;
  background-color: #ddd;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const MyLevelExpControll = styled.div`
  text-align: right;
  font-size: 13px;
  padding-right: 5px;
`;

function JustInfo({ myinfo }: any) {
  const {
    id,
    name,
    email,
    nick,
    phone,
    level,
    currentExp,
    maxExp,
    profileImgPath,
    profileText
  } = myinfo;

  console.log(profileImgPath)

  const percentage = Math.floor((currentExp / maxExp) * 100);

  //얘는 exp bar 때문에 함수 안에 있어야 함
  const MyLevelBarIn = styled.div`
    text-align: center;
    color: white;
    width: ${percentage}%;
    background-color: #189cc4;
    border-radius: 50px;
  `;

  const MypageADMents = styled.div`
    border: 3px solid #188cc4;
    /* margin: 20px; */
    background-color: #188cc4;
    color: white;
    padding: 50px;
    text-align: center;
    align-items: center;
  `;

  // 인포에딧 모달창 관리
  const [show, setShow] = useState(false);
  const handleModalClose = (e: any) => {
    setShow(false);
  };
  const handleModalOpen = () => {
    setShow(true);
  };

  return (
    <>
      <JustInfoOut>
        <MyInfoTitle>MY PROFILE</MyInfoTitle>
        <MyInfoMain>
          {/* 프로필 */}
          <li>
            <ProfileImg>
              <img src={profileImgPath} alt="profileImg"></img>
            </ProfileImg>
            <ProfileName>{nick}</ProfileName>
            <ProfileEmail>{email}</ProfileEmail>
            <ProfileEdit onClick={handleModalOpen}>Edit</ProfileEdit>
          </li>
          {/* 레벨 */}
          <li>
            <ProfileLevelImg>
              <img
                className="MyLevelPicsImg"
                src="/img/mypage_moxman-01.svg"
                alt="levelPics"
              ></img>
            </ProfileLevelImg>
            <ProfileLevel>Level {level}</ProfileLevel>
            <MyLevelBarOut>
              <MyLevelBarIn>
                <MyLevelExpControll>{percentage}%</MyLevelExpControll>
              </MyLevelBarIn>
            </MyLevelBarOut>
            <MyLevelText1>
              <span>{nick}</span> 님은 다음 레벨까지 &nbsp;
              <span>{maxExp - currentExp}</span>점 남으셨습니다.
            </MyLevelText1>
            <MyLevelText2>
              <div>오늘도 Zero Waste에</div>
              <div>참여해주셔서 감사합니다.</div>
            </MyLevelText2>
          </li>
        </MyInfoMain>
      </JustInfoOut>
      {show ? (
        <MyPageEdit>
          <InfoEdit handleModalClose={handleModalClose} myinfo={myinfo} />
        </MyPageEdit>
      ) : (
        <></>
      )}
    </>
  );
}

export default JustInfo;
