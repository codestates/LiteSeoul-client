import React from "react";
import { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import dummyMyInfo from "../documents/dummyMyInfo";

function MypageNav() {

  return (
    <div className="MypageNavOut">
      <div className="MypageNavTitleWhole">
        <div className="MypageNavTitleHello">반갑습니다.</div>
        <div className="MypageNavUsername">{dummyMyInfo.nickname}님</div>
      </div>
      <div className="MypageNav">
        <ul className="MypageNavUl">
          <li>
            <NavLink exact to="/mypage" className="textLink">
              <div className="MypageNavBtns">👤 Mypage</div>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/mypage/billslog" className="textLink">
              <div className="MypageNavBtns">👤 인증하기</div>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/mypage/likeplace" className="textLink">
              <div className="MypageNavBtns">👤 즐겨찾기</div>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/mypage/memberout" className="textLink">
              <div className="MypageNavBtns">👤 회원탈퇴</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MypageNav;
