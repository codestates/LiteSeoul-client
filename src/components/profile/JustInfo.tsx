import React, { useState } from "react";
import dummyMyInfo from "../documents/dummyMyInfo";
import pepeJoker from "../image/pepeJoker.jpeg";
import ramguiThunder from "../image/ramguiThunder.jpeg";
import mememe from "../image/mememe.png";
import styled from "styled-components";
import InfoEdit from "./InfoEdit";
import { Link, NavLink, Redirect } from "react-router-dom";

const MyLevelBarOut = styled.div`
  width: 100%;
  background-color: #ddd;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const MyLevelExpControll = styled.div`
  text-align: center;
  align-items: center;
  font-size: 13px;
`;

function JustInfo() {
  const { id, name, email, nickname, phone, level, expnow, expall } =
    dummyMyInfo;

  //얘는 exp bar 때문에 함수 안에 있어야 함
  const MyLevelBarIn = styled.div`
    text-align: center;
    color: white;
    width: ${(expnow / expall) * 100}%;
    background-color: #189cc4;
    border-radius: 50px;
  `;
  const [show, setShow] = useState(false);

  const handleModalClose = (e: any) => {
    const currentClass = e.target.className;
    if (
      currentClass === "ModalCloseBtn" ||
      currentClass === "modal-background"
    ) {
      setShow(false);
    }
    return;
  };

  const handleModalOpen = () => {
    setShow(true);
  };

  return (
    <div className="JustInfoFlex">
      <div className="MyInfo">
        <div className="MyInfoTitle">MY PROFILE</div>
        <ul className="MyInfoUl">
          <li>
            <div className="MyInfoPics">
              <img className="MyInfoPicsImg" src={mememe} alt="내사진"></img>
            </div>
          </li>
          <li>
            <div className="MyInfoName">{nickname}</div>
          </li>
          <li>
            <div className="MyInfoEmail">{email}</div>
          </li>
          <li>
            <div>
              <div hidden={!show}>
                <div className="modal-background" onClick={handleModalClose}>
                  <div className="modal-card">
                    <InfoEdit handleModalClose={handleModalClose} />
                  </div>
                </div>
              </div>
              <div className="MyInfoEdit" onClick={handleModalOpen}>EDIT</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="MyLevel">
        <ul className="MyLevelUl">
          <li>
            <div className="MyLevelPics">
              <img
                className="MyLevelPicsImg"
                src={ramguiThunder}
                alt="람쥐"
              ></img>
            </div>
          </li>
          <li>
            <div className="MyLevelNums">Level {level}</div>
          </li>
          <li>
            <MyLevelBarOut>
              <MyLevelBarIn>
                <MyLevelExpControll>
                  {(expnow / expall) * 100}%
                </MyLevelExpControll>
              </MyLevelBarIn>
            </MyLevelBarOut>
          </li>
          <li>
            <div className="MylevelMents">
              <div className="MentsExp">
                <span className="MentExpNick">{nickname}</span>
                {" 님은 다음 레벨까지 "}
                <span className="MentExpNums">{expall - expnow}</span>
                {"점 남으셨습니다."}
              </div>
              <div className="MentsZero">
                <div>오늘도 Zero Waste에</div>
                <div>참여해주셔서 감사합니다.</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default JustInfo;
