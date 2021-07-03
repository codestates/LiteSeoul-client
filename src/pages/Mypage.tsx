import React from "react";
import MypageNav from "../components/profile/MypageNav";
import JustInfo from "../components/profile/JustInfo";
import BillsLog from "../components/profile/BillsLog";
import { useState } from "react";
import LikePlace from "../components/profile/LikePlace";
import MemberOut from "../components/profile/MemberOut";

function Mypage() {

  const [nowPage, setNowPage] = useState('');
  console.log(nowPage)
  
  const handlePage = (data: any) => {
    setNowPage(data)
    console.log(nowPage)
  }

  const renderPage = (nowPage: string) => {
    if(nowPage === "JustInfo" || nowPage === '') {
      return <JustInfo />
    } else if(nowPage === "BillsLog") {
      return <BillsLog />
    } else if(nowPage === "LikePlace") {
      return <LikePlace />
    } else if(nowPage === "MemberOut") {
      return <MemberOut />
    }
  }

  return (
    <div className="MypageFlex">
      <div>
        <MypageNav handlePage={handlePage} />
      </div>
      <div className="MypageContents">
        {renderPage(nowPage)}
      </div>
    </div>
  );
}

export default Mypage;
