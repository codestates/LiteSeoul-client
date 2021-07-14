import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  display: flex;
  align-items: center;

  @media screen and (max-width: 901px) {
    font-size: 1.5rem;
  }
`;

const ShopContent = styled.div`
  width: 80%;
  height: 16%;
  font-size: 0.8rem;
  text-align: justify;

  @media screen and (max-width: 901px) {
    display: none;
  }
`;

const ShopContent2 = styled.div`
  width: 80%;
  height: 10%;
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
    }
  }
`;

const Add = styled.div`
  width: 100%;
  height: 20px;
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

// 유저정보 타입설정
type userInfoForm = {
  id: number;
  name: string;
  email: string;
  nick: string;
  phone: string;
  level: number;
  currentExp: number;
  maxExp: number;
  profileImgPath: string;
  profileText: string;
}

function UserRank() {
  const [userRankData, setUserRankData] = useState<userInfoForm[]>([]);

  // 유저랭크 서버에서 받아오는 이펙트 훅
  useEffect(() => {
    axios.get('https://www.api.liteseoul.com/user/rank').then((res) => {
      return setUserRankData(res.data);
    });
  }, []);

  return (
    <>
      {userRankData.map((data: any, idx: number) => {
        return (
          <ShopRankOut key={data.id}>
            <RankNumber>{idx + 1}</RankNumber>
            <AllRankers>
              <ShopImg>
                <img src={data.profileImgPath} alt="user"></img>
              </ShopImg>
              <ShopTitle>{data.name}</ShopTitle>
              <ShopContent>{data.profileText}</ShopContent>
              <ShopContent2>
                <Like>
                  <img src="icon/like_fill.svg" alt="like"></img>
                  <span>Level {data.level}</span>
                </Like>
                <Hr></Hr>
                <Add>
                  <img src="icon/location_main.svg" alt="location"></img>
                  <span>
                    Exp. {Math.floor((data.currentExp / data.maxExp) * 100)}%
                  </span>
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
