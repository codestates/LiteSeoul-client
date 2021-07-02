import React, { useState } from "react";
import MypageNav from "./MypageNav";
import RealOut from "../Modal/RealOut";

function MemberOut() {
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
    console.log("hello");
  };

  return (
    <div className="MypageFlex">
      <div>
        <MypageNav />
      </div>
      <div className="memberOutGrid">
        <div className="memberOutMents">
          <div>정말 Zero Waste를 관두시겠어요?</div>
          <div className="BillsMainBtn" hidden={!show}>
          <div className="modal-background" onClick={handleModalClose}>
            <div className="modal-card">
              <RealOut handleModalClose={handleModalClose} />
            </div>
          </div>
        </div>
          <div className="memberOutBtn" onClick={handleModalOpen}>
            탈퇴하기
          </div>
        </div>
        <div className="MypageADMents">
          여러분의 제로 웨이스트 숍으로 꾸며보세요!
        </div>
      </div>
    </div>
  );
}

export default MemberOut;
