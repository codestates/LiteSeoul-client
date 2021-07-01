import React from "react";
import MypageNav from "../components/profile/MypageNav";
import JustInfo from "../components/profile/JustInfo";

function Mypage() {
  return (
    <div className="MypageFlex">
      <div>
        <MypageNav />
      </div>
      <div className="MypageContents">
        <div className="MyInfoTitle">MY PROFILE</div>
        <JustInfo />
      </div>
    </div>
  );
}

export default Mypage;
