import React from "react";
import choonShick from "../image/choonShick.png";
import dummyShops from "../documents/dummyShops";

function ShopRank() {
  return (
    <div>
      <ul className="AllRankers">
        {dummyShops.map((dummyShop) => (
          <li className="EachRanker" key={dummyShop.id}>
            <div className="EachNumber">{dummyShop.id}</div>
            <div className="RankPicsDiv">
              <img className="EachPic" src={choonShick} alt="pepe" />
            </div>
            <div className="EachName">{dummyShop.name}</div>
            <div className="EachMessage">{dummyShop.message}</div>
            <div className="EachLikes">❤️Likes {dummyShop.likes}</div>
            <div className="EachGround">📍{dummyShop.ground}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopRank;
