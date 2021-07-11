import React from "react";
import styled from "styled-components";

const DonationOut = styled.div`
  width: 100%;
  padding-top: 200px;
  text-align: center;
  align-items: center;
`;

const DonationTitle = styled.div`
  font-size: 100px;
  font-weight: 700;
  color: #189cc4;
`;

const DonationBody = styled.div`
  /* text-align: ; */
  font-size: 25px;
  margin: 50px;
`;

const BodyBig = styled.div`
  margin-bottom: 100px;
  font-weight: 700;
  color: #ff735d;
`;

const BodySmall = styled.div`
padding: 0 20%;
  margin: 20px;
  /* width: 40%; */
`;

const BodyEnd = styled.div`
font-size: 20px;
margin-top: 100px;
`

const DonationEnd = styled.div`
  font-size: 10px;
  margin-top: 150px;
`;

function Donation() {
  return (
    <DonationOut>
      <DonationTitle>Donation</DonationTitle>
      <DonationBody>
        <BodyBig>LiteSeoul 운영진을 위해 기부해주세요!</BodyBig>
        <BodySmall>
          우리는 세상을 바꾸기 위해 공부하고, 기획하며, 만들고, 운영합니다.
        </BodySmall>
        <BodySmall>
          LiteSeoul은 탄소중립시대, 넷제로를 달성하기 위해 노력하겠습니다.
        </BodySmall>
        <BodyEnd>
          <div>후원문의: 010-0000-0000(담당자: 000)</div>
          <div>계좌번호: 0000-00-000000(팀헬코더스, 카카오뱅크)</div>
        </BodyEnd>

        

      </DonationBody>
      <DonationEnd>© 2021 LiteSeoul, HellCoders</DonationEnd>
    </DonationOut>
  );
}

export default Donation;
