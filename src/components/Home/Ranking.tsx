import React, { useState } from 'react';
import ShopRank from '../ranking/ShopRank';
import UserRank from '../ranking/UserRank';
import styled from 'styled-components';

const RankingOut = styled.div`
  padding-top: 100px;
  width: 100%;
  height: auto;
  overflow: hidden;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-bottom: 30px;
`;

const RangkingMain = styled.div`
  width: 90%;
  height: auto;
  /* border: 1px solid green; */
`;

const RankingTitle = styled.div`
  width: 100%;
  height: 10%;
  /* border: 1px solid blue; */
  margin-bottom: 50px;
  font-size: 4rem;
  font-weight: 700;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RankingSelect = styled.select`
  width: 150px;
  height: 50px;
  margin-left: 20px;
  line-height: 50px;
  text-indent: 20px;
  border: 2px solid #189cc4;
  color: #189cc4;
  font-size: 1.5rem;
  font-weight: 700;
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
  background: url('icon/arrow_left_color.svg');
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: right;
  outline: none;
  & select::-ms-expand {
    display: none;
  }
`;

const RankingList = styled.div`
  width: 100%;
  height: auto;
  /* border: 1px solid blue; */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

function Ranking() {
  const [option, setOption] = useState<string>('ShopRank');

  const rankingCategory = (value: string) => {
    console.log(value);
    setOption(value);
  };

  return (
    <RankingOut>
      <RangkingMain>
        <RankingTitle>
          Zero Waste TOP 9
          <RankingSelect onChange={(e) => rankingCategory(e.target.value)}>
            <option value="ShopRank">Shop</option>
            <option value="UserRank">User</option>
          </RankingSelect>
        </RankingTitle>
        <RankingList>
          {option === 'ShopRank' ? (
            <>
              <ShopRank />
            </>
          ) : (
            <>
              <UserRank />
            </>
          )}
        </RankingList>
      </RangkingMain>
    </RankingOut>
  );
}

export default Ranking;
