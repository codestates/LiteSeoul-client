import React from "react";
import styled from "styled-components";

const PlayModal = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50%;
  min-width: 500px;
  background-color: #188cc4;
  z-index: 990;
  overflow: auto;
  opacity: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 1.5rem;
`;
const PlayModalInside = styled.div`
  width: 100px;
  height: 30px;
  margin: auto;
  margin-top: 80px;
  padding: 20px;
  position: relative;
  background-color: #ff735d;
  color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  align-items: center;
  cursor: pointer;
  box-shadow: 2px 2px 2px black;
  &:active {
  box-shadow: none;
  }
`;

function RealOut({ handleModalClose }: any) {

  const outHandler = (e: any) => {
    const returnvalue = window.confirm("정말 인증기록을 지우시겠어요?");
    if (returnvalue === true) {
      alert("회원탈퇴를 최종적으로 완료하셨습니다🥲");
      window.location.href = "http://localhost:3000/"
    } else {
      alert("탈퇴과정을 취소하였습니다😆");
      window.location.href = "http://localhost:3000/mypage/memberout"
    }
  };


  return (
    <PlayModal>
      <div
        className="ModalCloseBtn"
        onClick={() =>
          // window.history.back()
          handleModalClose
        }
      >
        X
      </div>
      <div></div>
      <PlayModalInside onClick={outHandler}>✨안녀엉✨</PlayModalInside>
    </PlayModal>
  );
}

export default RealOut;
