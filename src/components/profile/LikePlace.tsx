import React from "react";
import MypageNav from "./MypageNav";
import dummyLikePlaces from "../documents/dummyLikePlaces";

function LikePlace() {

  const consoleHandler = (e: any) => {
    console.log(e.target.innerText)
  }

  return (
    <div className="MypageFlex">
      <div>
        <MypageNav />
      </div>
      <div className="WholeLikePlaces">
        <div className="LikePlaceTitle">자주 방문한 곳</div>
        {dummyLikePlaces.map((dummyLikePlace) => (
          <div className="OneLikePlace" onClick={consoleHandler}>
            <div className="LikePlaceNum">{dummyLikePlace.id}</div>
            <div className="LikePlaceName">{dummyLikePlace.name}</div>
            <div className="LikePlaceWhere">📍{dummyLikePlace.where}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikePlace;
