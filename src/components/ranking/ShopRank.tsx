import React from "react";
import choonShick from "../image/choonShick.png";
import dummyShops from "../documents/dummyShops";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function ShopRank() {
  const [shopdata, setShopdata] = useState([]);

  useEffect(() => {
    axios.get("http://ec2-52-79-247-245.ap-northeast-2.compute.amazonaws.com/shop/rank")
    .then(res => {
      console.log(shopdata)
      return setShopdata(res.data);
    })
  },[])

  return (
    <div>
      <ul className="AllRankers">
        {shopdata.map((shop: any) => (
          <li className="EachRanker" key={shop.id}>
            <div className="EachNumber">{shop.id}</div>
            <div className="RankPicsDiv">
              <img className="EachPic" src={choonShick} alt="pepe" />
            </div>
            <div className="EachName">{shop.name}</div>
            <div className="EachMessage">{shop.message}</div>
            <div className="EachLikes">❤️Likes {shop.likes}</div>
            <div className="EachGround">📍{shop.address}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopRank;
