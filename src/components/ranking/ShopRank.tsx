import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
  @media screen and (max-width: 1501px) {
    width: 350px;
  }
  @media screen and (max-width: 901px) {
    width: 250px;
    height: 380px;
  }
  @media screen and (max-width: 831px) {
    width: 220px;
    height: 350px;
  }
  @media screen and (max-width: 761px) {
    width: 200px;
    height: 150px;
  }
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
  @media screen and (max-width: 1501px) {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }
`;

const AllRankers = styled.div`
  width: 100%;
  height: 530px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: pink; */
  @media screen and (max-width: 901px) {
    height: 380px;
  }
  @media screen and (max-width: 831px) {
    height: 350px;
  }
  @media screen and (max-width: 761px) {
    height: 150px;
  }
`;

const ShopImg = styled.div`
  width: 80%;
  height: 45%;
  /* border: 1px solid green; */
  margin-bottom: 5px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 761px) {
    display: none;
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
  @media screen and (max-width: 901px) {
    font-size: 1.5rem;
  }
`;

const ShopContent = styled.div`
  width: 80%;
  height: 16%;
  /* border: 1px solid green; */
  font-size: 0.8rem;
  text-align: justify;
  @media screen and (max-width: 901px) {
    display: none;
  }
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
  @media screen and (max-width: 901px) {
    height: 15%;
  }
  @media screen and (max-width: 761px) {
    height: 10%;
  }
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
  @media screen and (max-width: 761px) {
    font-size: 1.2rem;
    height: 30px;
    & img {
      margin-top: -3px;
      width: 25px;
      height: 25px;
      object-fit: cover;
      margin-right: 5px;
      /* border: 1px solid red; */
    }
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
  @media screen and (max-width: 831px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 761px) {
    font-size: 0.5rem;
  }
`;
const Hr = styled.hr`
  width: 100%;
`;

function ShopRank() {
  const [shopRankdata, setShopRankdata] = useState([]);

  useEffect(() => {
    axios.get('https://www.api.liteseoul.com/shop/rank').then((res) => {
      console.log(res.data);
      return setShopRankdata(res.data);
    });
  }, []);

  return (
    <>
      {shopRankdata.map((data: any, idx) => {
        return (
          <ShopRankOut key={data.id}>
            <RankNumber>{idx + 1}</RankNumber>
            <AllRankers>
              <ShopImg>
                {/* <img src="img/main_recycle.svg" alt="user"></img> */}
                <img src={data.imgPath} alt="user"></img>
              </ShopImg>
              <ShopTitle>{data.name}</ShopTitle>
              <ShopContent>{data.text}</ShopContent>
              <ShopContent2>
                <Like>
                  <img src="icon/like_fill.svg" alt="like"></img>
                  <span>Likes {data.likeLength}</span>
                </Like>
                <Hr></Hr>
                <Add>
                  <img src="icon/location_main.svg" alt="location"></img>
                  <span>{data.address}</span>
                </Add>
              </ShopContent2>
            </AllRankers>
          </ShopRankOut>
        );
      })}
    </>
  );
}

export default ShopRank;
