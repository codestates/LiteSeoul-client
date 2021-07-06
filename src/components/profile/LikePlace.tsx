import React from 'react';
import MypageNav from './MypageNav';
import dummyLikePlaces from '../documents/dummyLikePlaces';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const LikePlaceOut = styled.div`
  width: 80%;
  height: 100%;
  /* background: yellow; */
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
  /* border: 1px solid green; */
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
  /* background-color: #ccc; */
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
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
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

function LikePlace() {

  const [likePlaces, setLikePlaces] = useState([]);
  console.log(likePlaces)

  const consoleHandler = (e: any) => {
    console.log(e.target.innerText);
  };



  // 더미데이터
  const id = 1

  useEffect(() => {
    axios.get(`http://ec2-52-79-247-245.ap-northeast-2.compute.amazonaws.com/shop/manyVisits/${id}`)
    .then(res => {
      // console.log(res)
      setLikePlaces(res.data)
    })
  }, [])

  return (
    <LikePlaceOut>
      <LikePlaceTitle>자주 방문한 곳</LikePlaceTitle>
      <LikePlaceMain>
        {likePlaces.map((likePlace: any) => (
            <LikePlaceList key={likePlace.id} onClick={consoleHandler}>
              <LikePlaceListNum>{likePlace.rank}</LikePlaceListNum>
              <LikePlaceStore>{likePlace.shop.name}</LikePlaceStore>
              <LikePlaceAddr>
                <img src="icon/location_main.svg" alt="d"></img>
                {likePlace.shop.address}
              </LikePlaceAddr>
            </LikePlaceList>

        ))}
      </LikePlaceMain>
    </LikePlaceOut>
  );
}

export default LikePlace;
