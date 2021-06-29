import React from "react";
import dummyDatas from "../documents/dummyDatas";
import pepe from '../image/pepeBamboo.png'

function UserRank() {
  console.log(dummyDatas[0].img);
  const { name, id, ground, message, likes, img } = dummyDatas[0];
  return (
    <div>
      userrank
      <ul className="AllUserRankers">
        <li className="EachUserRanker">
          <div className="EachUserNumber">1</div>
          <div >
            {<img className="EachUserPic" src={pepe} alt="pepe" />}
          </div>
          <div className="EachUserName">{name}</div>
          <div className="EachUserMessage">{message}</div>
          <div className="EachUserLikes">❤️Likes {likes}</div>
          <div className="EachUserGround">📍{ground}</div>
        </li>
        <li className="EachUserRanker">
          <div className="EachUserNumber">1</div>
          <div className="EachUserPic">유저사진</div>
          <div className="EachUserName">유저명</div>
          <div className="EachUserMessage">유저상메</div>
          <div className="EachUserLikes">좋아요</div>
          <div className="EachUserGround">주요활동지</div>
        </li>
        <li className="EachUserRanker">
          <div className="EachUserNumber">1</div>
          <div className="EachUserPic">유저사진</div>
          <div className="EachUserName">유저명</div>
          <div className="EachUserMessage">유저상메</div>
          <div className="EachUserLikes">좋아요</div>
          <div className="EachUserGround">주요활동지</div>
        </li>
        <li className="EachUserRanker">
          <div className="EachUserNumber">1</div>
          <div className="EachUserPic">유저사진</div>
          <div className="EachUserName">유저명</div>
          <div className="EachUserMessage">유저상메</div>
          <div className="EachUserLikes">좋아요</div>
          <div className="EachUserGround">주요활동지</div>
        </li>
        <li className="EachUserRanker">
          <div className="EachUserNumber">1</div>
          <div className="EachUserPic">유저사진</div>
          <div className="EachUserName">유저명</div>
          <div className="EachUserMessage">유저상메</div>
          <div className="EachUserLikes">좋아요</div>
          <div className="EachUserGround">주요활동지</div>
        </li>
        <li className="EachUserRanker">
          <div className="EachUserNumber">1</div>
          <div className="EachUserPic">유저사진</div>
          <div className="EachUserName">유저명</div>
          <div className="EachUserMessage">유저상메</div>
          <div className="EachUserLikes">좋아요</div>
          <div className="EachUserGround">주요활동지</div>
        </li>
        <li className="EachUserRanker">
          <div className="EachUserNumber">1</div>
          <div className="EachUserPic">유저사진</div>
          <div className="EachUserName">유저명</div>
          <div className="EachUserMessage">유저상메</div>
          <div className="EachUserLikes">좋아요</div>
          <div className="EachUserGround">주요활동지</div>
        </li>
        <li className="EachUserRanker">
          <div className="EachUserNumber">1</div>
          <div className="EachUserPic">유저사진</div>
          <div className="EachUserName">유저명</div>
          <div className="EachUserMessage">유저상메</div>
          <div className="EachUserLikes">좋아요</div>
          <div className="EachUserGround">주요활동지</div>
        </li>
        <li className="EachUserRanker">
          <div className="EachUserNumber">1</div>
          <div className="EachUserPic">유저사진</div>
          <div className="EachUserName">유저명</div>
          <div className="EachUserMessage">유저상메</div>
          <div className="EachUserLikes">좋아요</div>
          <div className="EachUserGround">주요활동지</div>
        </li>
      </ul>
    </div>
  );
}

export default UserRank;
