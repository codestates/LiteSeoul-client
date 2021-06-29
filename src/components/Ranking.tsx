import React, { useState } from "react";
import ShopRank from "./ranking/ShopRank";
import UserRank from "./ranking/UserRank";
import dummyDatas from "./documents/dummyDatas";


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
          <option value="ShopRank">ShopRank</option>
          <option value="UserRank">UserRank</option>
        </select>
      </div>
      <div>{option === "ShopRank" ? <ShopRank /> : <UserRank />}</div>
    </div>
  );
}

export default Ranking;
