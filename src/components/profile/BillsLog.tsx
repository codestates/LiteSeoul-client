import React, { useState } from 'react';
import dummyBills from '../documents/dummyBills';
import danggeun from '../image/danggeun.jpg';
import AddBills from '../Modal/AddBills';
import styled from 'styled-components';

const BillsOut = styled.div`
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

const BillsTitle = styled.div`
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

const BillsMain = styled.div`
  width: 100%;
  height: 85%;
  position: relative;
`;

const BillsUl = styled.ul`
  width: 90%;
  height: auto;
  /* border: 1px solid green; */
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  overflow: auto;
  padding-left: 45px;
  & li {
    width: 200px;
    height: 300px;
    /* border: 1px solid red; */
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    margin: 25px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
    & img {
      width: 100%;
      object-fit: cover;
    }
    & span {
      display: block;
      width: 100%;
      /* border: 1px solid blue; */
      text-align: center;
      font-size: 1rem;
      color: #189cc4;
      position: absolute;
      bottom: 20px;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 1101px) {
    justify-content: space-evenly;
  }
`;

const BillsDel = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  right: 2%;
  top: 2%;
  cursor: pointer;
  transition: 0.2s all;
  background-image: url('/icon/close.svg');
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1);
    background-image: url('/icon/close2.svg');
  }
`;

const BillsAdd = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: fixed;
  bottom: 2%;
  right: 2%;
  cursor: pointer;
  transition: 0.2s all;
  background-image: url('/icon/close.svg');
  background-size: cover;
  background-repeat: no-repeat;
  transform: rotate(45deg);
  &:hover {
    transform: scale(1.1);
    background-image: url('/icon/close2.svg');
    transform: rotate(45deg);
  }
`;

const BillsUpload = styled.div`
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

function BillsLog() {
  const xbtnHandler = (e: any) => {
    const returnvalue = window.confirm('정말 인증기록을 지우시겠어요?');
    if (returnvalue === true) {
      alert('인증기록을 삭제하였습니다.');
    } else {
      alert('삭제과정을 취소하였습니다.');
    }
  };

  const [show, setShow] = useState(false);

  //영수증 추가하는 창 열기
  const handleModalClose = () => {
    setShow(false);
  };
  const handleModalOpen = () => {
    setShow(true);
  };

  return (
    <>
      <BillsOut>
        <BillsTitle>나의 인증목록</BillsTitle>
        <BillsMain>
          <BillsUl>
            {dummyBills.map((dummyBill) => (
              <li key={dummyBill.id}>
                <BillsDel onClick={xbtnHandler}></BillsDel>
                <img className="BillsImg" src={danggeun} alt="영수증"></img>
                <span>{dummyBill.text}</span>
              </li>
            ))}
          </BillsUl>
          <BillsAdd onClick={handleModalOpen}></BillsAdd>

          {/* {show ? (
          <></>
        ) : (
          <div className="BillsLogAddBtn" onClick={handleModalOpen}>
            +
          </div>
        )} */}
        </BillsMain>

        {/* <ul className="BillsLogsWhole">
        {dummyBills.map((dummyBill) => (
          <li className="BillsOne" key={dummyBill.id}>
            <div className="BillsBack">
              <div className="BillsXBtn" onClick={xbtnHandler}>
                X
              </div>
              <img className="BillsImg" src={danggeun} alt="영수증"></img>
              {dummyBill.text}
            </div>
          </li>
        ))}
      </ul>

      <div className="BillsMainBtn" hidden={!show}>
        <div className="modal-background" onClick={handleModalClose}>
          <div className="modal-card">
            <AddBills handleModalClose={handleModalClose} />
          </div>
        </div>
      </div>
      {show ? (
        <></>
      ) : (
        <div className="BillsLogAddBtn" onClick={handleModalOpen}>
          +
        </div>
      )} */}
      </BillsOut>
      {show ? (
        <BillsUpload onClick={handleModalClose}>
          <AddBills handleModalClose={handleModalClose} />
        </BillsUpload>
      ) : (
        <></>
      )}
    </>
  );
}

export default BillsLog;
