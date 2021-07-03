import React, { useEffect, useState } from 'react';
import choonShick from '../image/choonShick.png';
import dummyShops from '../documents/dummyShops';
import styled from 'styled-components';

const ShopRankOut = styled.div`
  width: 22%;
  height: 530px;
  margin: 60px;
  display: flex;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;
const RankNumber = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ff735d;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -30px;
  top: -30px;
  font-weight: 700;
  font-size: 2.5rem;
  color: #fff;
`;

const AllRankers = styled.div`
  width: 100%;
  height: 530px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: pink; */
`;

const ShopImg = styled.div`
  width: 80%;
  height: 45%;
  border: 1px solid green;
  margin-bottom: 5px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ShopTitle = styled.div`
  width: 80%;
  height: 10%;
  font-size: 2rem;
  font-weight: 700;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
`;

const ShopContent = styled.div`
  width: 80%;
  height: 16%;
  /* border: 1px solid green; */
  font-size: 0.8rem;
  text-align: justify;
`;

const ShopContent2 = styled.div`
  width: 80%;
  height: 10%;
  /* border: 1px solid green; */
  font-size: 0.8rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Like = styled.div`
  width: 100%;
  height: 20px;
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 700;

  & img {
    margin-top: 3px;
    width: 20px;
    height: 20px;
    object-fit: cover;
    margin-right: 5px;
    /* border: 1px solid red; */
  }
`;
const InputCk = styled.input`
  display: none;
  &:checked + label {
    width: 20px;
    height: 20px;
    background-image: url('icon/like_fill.svg');
    background-size: cover;
    margin-right: 5px;
  }
`;
const Label = styled.label`
  width: 20px;
  height: 20px;
  background-image: url('icon/like_stroke.svg');
  background-size: cover;
  margin-right: 5px;
`;
const Add = styled.div`
  width: 100%;
  height: 20px;
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  & img {
    width: 20px;
    height: 20px;
    object-fit: cover;
    margin-right: 5px;
  }
`;
const Hr = styled.hr`
  width: 100%;
`;

function UserRank() {
  // const [checkedItems, setCheckedItems] = useState(new Set());
  // const [bChecked, setChecked] = useState(false);

  // console.log(checkedItems, bChecked);
  // const checkedItemHandler = (id: any, isChecked: any) => {
  //   if (isChecked) {
  //     checkedItems.add(id);
  //     setCheckedItems(checkedItems);
  //   } else if (!isChecked && checkedItems.has(id)) {
  //     checkedItems.delete(id);
  //     setCheckedItems(checkedItems);
  //   }
  // };

  // const checkHandler = (e: any) => {
  //   setChecked(!bChecked);
  //   checkedItemHandler(e.target.id, e.target.checked);
  // };
  return (
    <>
      {dummyShops.map((data: any) => {
        return (
          <ShopRankOut key={data.id}>
            <RankNumber>{data.id}</RankNumber>
            <AllRankers>
              <ShopImg>
                <img src="img/main_wood.svg" alt="user"></img>
              </ShopImg>
              <ShopTitle>{data.name}</ShopTitle>
              <ShopContent>{data.message}</ShopContent>
              <ShopContent2>
                <Like>
                  <img src="icon/like_fill.svg" alt="like"></img>
                  <span>Likes {data.likes}</span>
                </Like>
                <Hr></Hr>
                <Add>
                  <img src="icon/location_main.svg" alt="location"></img>
                  <span>{data.ground}</span>
                </Add>
              </ShopContent2>
            </AllRankers>
          </ShopRankOut>
        );
      })}
    </>
  );
}

export default UserRank;
