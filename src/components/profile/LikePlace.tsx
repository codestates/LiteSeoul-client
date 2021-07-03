import React from "react";
// import MypageNav from "./MypageNav";
import dummyLikePlaces from "../documents/dummyLikePlaces";
import styled from "styled-components";

function LikePlace() {
  const LikeADgrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-auto-rows: auto;
    @media screen and (max-width: 1500px) {
      grid-template-columns: 1fr;
    }
  `;

  const consoleHandler = (e: any) => {
    console.log(e.target.innerText);
  };

  return (
    <div className="MypageFlex">
      {/* <div>
        <MypageNav />
      </div> */}
      <LikeADgrid>
        <div className="WholeLikePlaces">
          <div className="LikePlaceTitle">자주 방문한 곳</div>
          {dummyLikePlaces.map((dummyLikePlace: any) => (
            <div
              className="OneLikePlace"
              key={dummyLikePlace.id}
              onClick={consoleHandler}
            >
              <div className="LikePlaceNum">{dummyLikePlace.id}</div>
              <div className="LikePlaceName">{dummyLikePlace.name}</div>
              <div className="LikePlaceWhere">📍{dummyLikePlace.where}</div>
            </div>
          ))}
        </div>
        <div className="MypageADMents">
          여러분의 제로 웨이스트 숍으로 꾸며보세요!
        </div>
      </LikeADgrid>
    </div>
  );
}

export default LikePlace;
