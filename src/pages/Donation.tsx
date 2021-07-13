import React from 'react';
import styled from 'styled-components';

const DonationOut = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
`;

const DonationMain = styled.div`
  margin: 0 auto;
  display: flex;
  border-radius: 20px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  width: 70%;
  height: 80%;
`;

const Img = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 80%;
    object-fit: cover;
  }
  @media screen and (max-width: 1600px) {
    display: none;
  }
`;
const Text = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5%;
  @media screen and (max-width: 1601px) {
    width: 100%;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 15%;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  font-weight: 700;
  align-items: center;
  color: #189cc4;
  @media screen and (max-width: 1101px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 670px) {
    font-size: 3rem;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  height: 10%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff735d;
  font-weight: 500;
  @media screen and (max-width: 850px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 670px) {
    font-size: 1.3rem;
  }
`;

const List1 = styled.div`
  width: 100%;
  height: 10%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  font-weight: 700;
  align-items: center;
  @media screen and (max-width: 1800px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 807px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 670px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const Account = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & div {
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500px;
    @media screen and (max-width: 807px) {
      font-size: 0.8rem;
    }
  }
`;

const DonationEnd = styled.div`
  width: 150px;
  text-align: center;
  font-size: 10px;
  margin-top: 150px;
  color: #86868b;
  position: absolute;
  bottom: 3%;
  left: 50%;
  margin-left: -75px;
`;

function Donation() {
  return (
    <DonationOut>
      <DonationMain>
        <Img>
          <img src="/img/notfound.svg" alt="img"></img>
        </Img>
        <Text>
          <Title>Donation</Title>
          <SubTitle>Zero Waste을 위해 기부해주세요!</SubTitle>
          <List1>
            우리는 세상을 바꾸기 위해 공부하고, 기획하며, 만들고, 운영합니다.
          </List1>
          <List1>LiteSeoul은 Net-zero를 달성하기 위해 노력하겠습니다.</List1>
          <Account>
            <div>후원문의: 010-1234-5697 (담당자: 000)</div>
            <div>계좌번호: 1234-56-7590 (HellCoders, KakaoBank)</div>
          </Account>
        </Text>
        <DonationEnd>© 2021 LiteSeoul, HellCoders</DonationEnd>
      </DonationMain>
    </DonationOut>
  );
}

export default Donation;
