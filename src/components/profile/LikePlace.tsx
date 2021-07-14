import React from "react";
import MypageNav from "./MypageNav";
import dummyLikePlaces from "../documents/dummyLikePlaces";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const LikePlaceOut = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
  z-index: 800;

  @media screen and (max-width: 1101px) {
    height: auto;
  }
  @media screen and (max-width: 1001px) {
    width: 100%;
  }
`;

const LikePlaceTitle = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  font-size: 3rem;
  font-weight: 700;

  @media screen and (max-width: 1101px) {
    display: none;
  }
`;

const LikePlaceMain = styled.div`
  width: 80%;
  height: 85%;
  padding: 1%;
  margin-left: 5%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%;
    background-color: #189cc4;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }

  @media screen and (max-width: 1101px) {
    width: 100%;
    align-items: center;
  }
`;

const LikePlaceList = styled.div`
  width: 80%;
  height: 50px;
  border: 2px solid #999;
  border-radius: 25px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  transition: 0.4s all;
  cursor: pointer;
  &:hover {
    border: 2px solid #189cc4;
  }
  &:hover > div:nth-child(1) {
    background-color: #189cc4;
  }
`;

const LikePlaceListNum = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #999;
  border-radius: 50%;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  position: absolute;
  left: -2px;
  top: -2px;
  transition: 0.4s all;
`;

const LikePlaceStore = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2rem;
  color: #000;

  @media screen and (max-width: 901px) {
    width: 40%;
    align-items: center;
    font-size: 1rem;
  }
  @media screen and (max-width: 701px) {
    width: 30%;
    align-items: center;
    font-size: 0.8rem;
  }
`;

const LikePlaceAddr = styled.div`
  width: 25%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: #6e6e73;
  & img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  @media screen and (max-width: 901px) {
    width: 20%;
    align-items: center;
    font-size: 0.6rem;
  }
  @media screen and (max-width: 751px) {
    width: 30%;
    align-items: center;
    font-size: 0.6rem;
  }
`;

// 유저가 좋아요 누른 샵 목록 타입지정
type likePlaceForm = {
  id: number;
  rank: number;
  shop: {
    name: string;
    address: string;
  };
};

type likeShopInfoForm = {
  id: number;
  name: string;
  address: string;
  phone: string;
  likeLength: number;
  imgPath: string;
  text: string;
  category: string;
  email: string;
  isAdmitted: string;
  recommend: string;
};

//마커에서 필요한 모달데이터
// address: "영등포구 당산로16길 16 1층"
// category: "life"
// email: ""
// id: 2
// imgPath: "http://ec2-3-34-143-57.ap-northeast-2.compute.amazonaws.com/uploads/shops/02_space1616.jpeg"
// isAdmitted: 1
// latitude: "37.52262452797101"
// longitude: "126.89781222701237"
// name: "공간1616"
// phone: "02-6952-6050"
// recommend: "recycle"
// regisNumber: ""
// text: ""

function LikePlace({ handleModal, handleModalData }: any) {
  const [likePlaces, setLikePlaces] = useState<likePlaceForm[]>([]);
  console.log(likePlaces);

  const markerHandler = (likePlace: any) => {
    handleModalData(likePlace.shop)
    handleModal()
  };

  const id = sessionStorage.getItem("id");

  useEffect(() => {
    axios
      .get(`https://www.api.liteseoul.com/shop/manyVisits/${Number(id)}`)
      .then((res) => {
        console.log(res);
        setLikePlaces(res.data);
      });
  }, []);

  return (
    <LikePlaceOut>
      <LikePlaceTitle>좋아하는 장소</LikePlaceTitle>
      <LikePlaceMain>
        {likePlaces.length !== 0 ? (
          likePlaces.map((likePlace: any) => (
            <LikePlaceList
              key={likePlace.id}
              onClick={() => markerHandler(likePlace)}
            >
              <LikePlaceListNum>{likePlace.rank}</LikePlaceListNum>
              <LikePlaceStore>{likePlace.shop.name}</LikePlaceStore>
              <LikePlaceAddr>
                <img src="icon/location_main.svg" alt="d"></img>
                {likePlace.shop.address}
              </LikePlaceAddr>
            </LikePlaceList>
          ))
        ) : (
          <div>
            자주이용하시는 샵에 상세정보 창에서 좋아요를 눌러서 모아보세요!
          </div>
        )}
      </LikePlaceMain>
    </LikePlaceOut>
  );
}

export default LikePlace;
