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

  // ????????? ???????????? ????????????
  const xbtnHandler = (e: any) => {
    const returnvalue = window.confirm('?????? ??????????????? ???????????????????');

    if (returnvalue === true) {
      axios
        .post(process.env.REACT_APP_DOAMIN_URL + '/receipt/delete', {
          access_token: sessionStorage.getItem('access_token'),
          name: `${e.target.id}`,
        })
        .then((res) => {
          alert('??????????????? ?????????????????????.');
          window.location.reload();
        });
    } else {
      alert('??????????????? ?????????????????????.');
    }
  };

  // ????????? ????????? ????????? ???????????? ?????????
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_DOAMIN_URL + '/receipt/list', {
        access_token: sessionStorage.getItem('access_token'),
      })
      .then((res) => {
        setLogs(res.data);
      });
  }, []);

  //????????? ???????????? ??? ??????
  const handleModalClose = () => {
    setShow(false);
  };
  const handleModalOpen = () => {
    setShow(true);
  };

  return (
    <>
      <BillsOut>
        <BillsTitle>?????? ????????????</BillsTitle>
        <BillsMain>
          <BillsUl>
            {logs.length !== 0 ? (
              logs.map((log: any) => (
                <li key={log.imgName}>
                  <BillsDel onClick={xbtnHandler} id={log.imgName}></BillsDel>
                  <img
                    className="BillsImg"
                    src={log.imgPath}
                    alt="?????????"
                  ></img>
                  <span>{log.created_at.substring(0, 10)}</span>
                </li>
              ))
            ) : (
              <div>
              <div>?????? ???????????? ??? ?????? ????????? ????????????!</div>
              <div>* ??????: ????????? ????????? ???????????? ?????????????????? ??????(??????)?????? ??????????????? ??????:)</div>
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
