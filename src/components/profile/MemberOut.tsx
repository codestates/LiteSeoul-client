import React from "react";
import MypageNav from "./MypageNav";

function MemberOut() {
  return (
    <div className="MypageFlex">
      <div>
        <MypageNav />
      </div>
      <div className="memberOutMents">
        정말 Zero Waste 생활을 그만하시겠어요?ㅜㅜ
        <div className="memberOutBtn">탈퇴하기</div>
      </div>
    </div>
  );
}

export default MemberOut;
