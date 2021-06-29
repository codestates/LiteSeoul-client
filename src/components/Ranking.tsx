import React, { useState } from "react";
import ShopRank from "./ranking/ShopRank";
import UserRank from "./ranking/UserRank";
// import dummyDatas from "./documents/dummyDatas";
// import dummyShops from "./documents/dummyShops";

// type dummyInfo = {
//   name: string,
//   id: number,
//   ground: string,
//   message: string,
//   likes: number,
//   img: string
// }

function Ranking() {
  const [option, setOption] = useState<string>("ShopRank");
//   const {id, img, name, message, likes, ground} = dummyDatas;

  const rankingCategory = (value: string) => {
    // console.log(value);
    setOption(value);
    // console.log(option)
  };


  return (
    <div>
      <div className="AllRankingFlex">
        <div className="RankingTitle">Zero Waste TOP 9</div>
        <select className="selectBox" onChange={(e) => rankingCategory(e.target.value)}>
          <option value="ShopRank">Shop</option>
          <option value="UserRank">User</option>
        </select>
      </div>
      <div>{option === "ShopRank" ? <ShopRank /> : <UserRank />}</div>
    </div>
  );
}

export default Ranking;
