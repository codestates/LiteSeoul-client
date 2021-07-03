import React from "react";
import pepe from "../image/pepeBamboo.png";
import dummyUsers from "../documents/dummyUsers";

function UserRank() {
  return (
    <div>
      <ul className="AllRankers">
        {dummyUsers.map((dummyUser) => (
          <li className="EachRanker" key={dummyUser.id}>
            <div className="EachNumber">{dummyUser.id}</div>
            <div className="RankPicsDiv">
              <img className="EachPic" src={pepe} alt="pepe" />
            </div>
            <div className="EachName">{dummyUser.name}</div>
            <div className="EachMessage">{dummyUser.message}</div>
            <div className="EachLikes">❤️Likes {dummyUser.likes}</div>
            <div className="EachGround">📍{dummyUser.ground}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserRank;
