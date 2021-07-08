import React from 'react';
import styled from 'styled-components';
import RecNear from '../recommends/RecNear';
import RecNoPla from '../recommends/RecNoPla';
import RecRecycle from '../recommends/RecRecycle';
import RecNoChem from '../recommends/RecNoChem';

const RecommendsOut = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  background: #fff;
  /* border: 1px solid red; */
`;

const RecommendsMain = styled.div`
  width: 90%;
  height: 100%;
  /* border: 1px solid blue; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 1.2s all;
  transform: scale(0.7);
  &.recommend1 {
    opacity: 1;
    transform: scale(1);
  }
`;

const RecommendsTitle = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 10%;
  /* border: 1px solid green; */
  font-size: 3rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 851px) {
    font-size: 2rem;
  }
`;

const RecommendsSubTitle = styled.div`
  width: 100%;
  height: 5%;
  margin-top: 10px;
  /* border: 1px solid green; */
  color: #6e6e73;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 851px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 551px) {
    font-size: 1.2rem;
  }
`;

const RecommendsList = styled.div`
  width: 100%;
  height: 80%;
  /* border: 1px solid purple; */
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 1201px) {
    flex-wrap: wrap;
    height: 70%;
  }
  @media screen and (max-width: 851px) {
    flex-direction: column;
  }
`;

function Recommends() {
  return (
    <RecommendsOut id="recommend">
      <RecommendsMain id="recommend1">
        <RecommendsTitle>Today`s Recommend Store</RecommendsTitle>
        <RecommendsSubTitle>
          오늘도 함께 Zero Waste를 실천해보는건 어떠세요?
        </RecommendsSubTitle>
        <RecommendsList>
          <RecNear></RecNear>
          <RecNoPla></RecNoPla>
          <RecRecycle></RecRecycle>
          <RecNoChem></RecNoChem>
        </RecommendsList>
      </RecommendsMain>
    </RecommendsOut>
  );
}

export default Recommends;
