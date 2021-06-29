import React from "react";
import dummyDatas from "../documents/dummyDatas";
import pepe from "../image/pepeBamboo.png";

function UserRank() {
  // console.log(dummyDatas[0].img);
  const { name, id, ground, message, likes, img } = dummyDatas[0];
  return (
    <div>
      userrank
      <ul className="AllRankers">
        <li className="EachRanker">
          <div className="EachNumber">1</div>
          <div>{<img className="EachPic" src={pepe} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">1</div>
          <div>{<img className="EachPic" src={pepe} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">1</div>
          <div>{<img className="EachPic" src={pepe} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">1</div>
          <div>{<img className="EachPic" src={pepe} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">1</div>
          <div>{<img className="EachPic" src={pepe} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">1</div>
          <div>{<img className="EachPic" src={pepe} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">1</div>
          <div>{<img className="EachPic" src={pepe} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">1</div>
          <div>{<img className="EachPic" src={pepe} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">1</div>
          <div>{<img className="EachPic" src={pepe} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
      </ul>
    </div>
  );
}

export default UserRank;
