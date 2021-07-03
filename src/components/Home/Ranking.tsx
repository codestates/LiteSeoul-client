import React, { useState } from 'react';
import ShopRank from '../ranking/ShopRank';
import UserRank from '../ranking/UserRank';

function Ranking() {
  const [option, setOption] = useState<string>('ShopRank');

  const rankingCategory = (value: string) => {
    setOption(value);
  };

  return (
    <div>
      <div className="AllRankingFlex">
        <div className="RankingTitle">Zero Waste TOP 9</div>
        <select
          className="selectBox"
          onChange={(e) => rankingCategory(e.target.value)}
        >
          <option value="ShopRank">Shop</option>
          <option value="UserRank">User</option>
        </select>
      </div>
      <div>{option === 'ShopRank' ? <ShopRank /> : <UserRank />}</div>
    </div>
  );
}

export default Ranking;
