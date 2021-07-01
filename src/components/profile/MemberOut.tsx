import React from "react";
import MypageNav from "./MypageNav";

function MemberOut() {
  return (
    <div className="MypageFlex">
      <div>
        <MypageNav />
      </div>
      <div className="memberOutMents">
        정말 Zero Waste를 관두시겠어요?
        <div className="memberOutBtn">탈퇴하기</div>
      </div>
    </div>
  );
}

export default MemberOut;
