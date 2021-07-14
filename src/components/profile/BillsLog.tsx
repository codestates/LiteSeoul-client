import React, { useState, useEffect } from 'react';
import AddBills from '../Modal/AddBills';
import styled from 'styled-components';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const BillsOut = styled.div`
  width: 80%;
  height: 100%;
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
  height: 120vh;
  position: absolute;
  inset: 0;
  z-index: 1000;
  background-color: #000000b3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function BillsLog({ handleMypageNow, setLoading }: any) {
  const [show, setShow] = useState<boolean>(false);
  const [logs, setLogs] = useState<never[]>([]);
  console.log(logs)

  // 영수증 인증기록 제거버튼
  const xbtnHandler = (e: any) => {
    const returnvalue = window.confirm('정말 인증기록을 지우시겠어요?');

    if (returnvalue === true) {
      axios
        .post(process.env.REACT_APP_DOAMIN_URL + 'receipt/delete', {
          access_token: sessionStorage.getItem('access_token'),
          name: `${e.target.id}`,
        })
        // .then(res => )
        .then((res) => {
          alert('인증기록을 삭제하였습니다.');
          window.location.reload();
          // window.location.replace('http://localhost:3000/mypage');
        });
    } else {
      alert('삭제과정을 취소하였습니다.');
    }
  };

  // 실시간 유저의 영수증 인증정보 렌더링
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_DOAMIN_URL + 'receipt/list', {
        access_token: sessionStorage.getItem('access_token'),
      })
      .then((res) => {
        console.log(res);
        setLogs(res.data);
      });
  }, []);

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
            {logs.length !== 0 ? (
              logs.map((log: any) => (
                <li key={log.imgName}>
                  <BillsDel onClick={xbtnHandler} id={log.imgName}></BillsDel>
                  <img
                    className="BillsImg"
                    src={log.imgPath}
                    alt="영수증"
                  ></img>
                  <span>{log.created_at.substring(0, 10)}</span>
                </li>
              ))
            ) : (
              <div>
              <div>제로 웨이스트 숍 이용 인증을 해주세요!</div>
              <div>* 참고: 영수증 인증은 상단부의 사업자번호와 매장(업체)명만 보여주시면 돼요:)</div>
              </div>
            )}
          </BillsUl>
          <BillsAdd onClick={handleModalOpen}></BillsAdd>
        </BillsMain>
      </BillsOut>
      {show ? (
        <BillsUpload>
          <AddBills
            handleMypageNow={handleMypageNow}
            handleModalClose={handleModalClose}
            setLoading={setLoading}
          />
        </BillsUpload>
      ) : (
        <></>
      )}
    </>
  );
}

export default BillsLog;
