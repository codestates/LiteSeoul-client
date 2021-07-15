import styled from 'styled-components';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const MemberDelOut = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  z-index: 800;

  @media screen and (max-width: 1101px) {
    width: 100%;
  }
`;

const MemberDelMain = styled.div`
  width: 100%;
  height: 30%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1101px) {
    width: 100%;
  }
`;

const MemberDelText = styled.div`
  width: 100%;
  height: 50px;
  font-size: 2rem;
  text-align: center;
`;

const MemberCloseBtn = styled.div`
  width: 20%;
  height: 40px;
  background-color: #ff735d;
  color: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.4s all;
  &:hover {
    background-color: red;
    letter-spacing: 0.2rem;
  }
`;

function MemberOut() {

  // 회원탈퇴시 얼럿창 분기나누는 함수
  const outHandler = () => {
    const returnvalue = window.confirm(
      '😣 정말 제로 웨이스트를 그만두시겠어요?',
    );
    if (returnvalue === true) {
      alert('회원탈퇴를 최종적으로 완료하셨습니다🥲');
      axios
        .post(process.env.REACT_APP_DOAMIN_URL + '/user/delete', {
          access_token: sessionStorage.getItem('access_token'),
        })
        .then((res) => {
          console.log(res);
          sessionStorage.clear();
          window.location.replace('https://liteseoul.com/');
        });
    } else {
      alert('탈퇴과정을 취소하였습니다😆');
    }
  };

  return (
    <MemberDelOut>
      <MemberDelMain>
        <MemberDelText>정말 Zero Waste를 관두시겠어요?</MemberDelText>
        <MemberCloseBtn onClick={outHandler}>탈퇴하기</MemberCloseBtn>
      </MemberDelMain>
    </MemberDelOut>
  );
}

export default MemberOut;
