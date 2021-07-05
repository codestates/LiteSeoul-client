import React, { useState } from 'react';
import RealOut from '../Modal/RealOut';
import styled from 'styled-components';

const MemberDelOut = styled.div`
  width: 80%;
  height: 100%;
  /* background: yellow; */
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
  /* background: blue; */
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
  const [show, setShow] = useState(false);
  const handleModalClose = (e: any) => {
    const currentClass = e.target.className;
    if (
      currentClass === 'ModalCloseBtn' ||
      currentClass === 'modal-background'
    ) {
      setShow(false);
    }
    return;
  };
  const handleModalOpen = () => {
    setShow(true);
    console.log('hello');
  };

  return (
    <MemberDelOut>
      <MemberDelMain>
        <MemberDelText>정말 Zero Waste를 관두시겠어요?</MemberDelText>
        <div className="BillsMainBtn" hidden={!show}>
          <div className="modal-background" onClick={handleModalClose}>
            <RealOut handleModalClose={handleModalClose} />
          </div>
        </div>
        <MemberCloseBtn onClick={handleModalOpen}>탈퇴하기</MemberCloseBtn>
      </MemberDelMain>
    </MemberDelOut>
  );
}

export default MemberOut;
