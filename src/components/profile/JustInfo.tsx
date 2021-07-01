import React, { useState } from "react";
import dummyMyInfo from "../documents/dummyMyInfo";
import ramguiThunder from "../image/ramguiThunder.jpeg";
import mememe from "../image/mememe.png";
import styled from "styled-components";
import InfoEdit from "../Modal/InfoEdit";

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

  // 더미데이터 구조분해할당
  const { id, name, email, nickname, phone, level, expnow, expall } =
    dummyMyInfo;

  // 개인정보 관리 인터페이스와 객체
  interface userInfoForm {
    id: number;
    name: string;
    email: string;
    nickname: string;
    phone: string;
    level: number;
    expnow: number;
    expall: number;
  }
  const MyInfo: userInfoForm = {
    id: id,
    name: name,
    email: email,
    nickname: nickname,
    phone: phone,
    level: level,
    expnow: expnow,
    expall: expall
  }
  // console.log(MyInfo) // 정상렌더링 확인

  //얘는 exp bar 때문에 함수 안에 있어야 함
  const MyLevelBarIn = styled.div`
    text-align: center;
    color: white;
    width: ${(expnow / expall) * 100}%;
    background-color: #189cc4;
    border-radius: 50px;
  `;
  
  // 인포에딧 모달창 관리
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
                    <InfoEdit handleModalClose={handleModalClose} MyInfo={MyInfo}/>
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
