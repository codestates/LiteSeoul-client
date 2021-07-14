import React from "react";
import styled from "styled-components";

const Out = styled.div`
  width: 18%;
  height: 75%;
  border: 3px solid #189cc4;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1401px) {
    height: 65%;
  }
  @media screen and (max-width: 1201px) {
    width: 40%;
    height: 15%;
  }
  @media screen and (max-width: 851px) {
    width: 90%;
  }
`;

const ListTitle = styled.div`
  width: 250px;
  height: 40px;
  border-radius: 20px;
  background-color: #189cc4;
  color: #fff;
  position: absolute;
  left: 50%;
  font-size: 1.5rem;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    width: 25px;
    height: 25px;
    background-image: url("/icon/location_white.svg");
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 5px;
  }
  @media screen and (max-width: 1701px) {
    width: 200px;
    font-size: 1.2rem;
    &::before {
      content: "";
      width: 20px;
      height: 20px;
      background-image: url("/icon/recycle_white.svg");
      background-repeat: no-repeat;
      background-position: center;
      margin-right: 5px;
    }
  }

  @media screen and (max-width: 1401px) {
    width: 160px;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1101px) {
    width: 140px;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 901px) {
    width: 80%;
  }
`;

const Store = styled.div`
  width: 200px;
  height: 220px;
  position: absolute;
  bottom: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 1401px) {
    width: 160px;
    height: 180px;
  }
  @media screen and (max-width: 1101px) {
    width: 140px;
    height: 140px;
  }
  @media screen and (max-width: 1201px) {
    width: 100%;
    height: 80%;
    top: 20%;
    flex-direction: row;
  }
`;

const StoreName = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.4rem;
  font-weight: 700;

  @media screen and (max-width: 1501px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 1401px) {
    width: 160px;
  }
  @media screen and (max-width: 1201px) {
    width: 140px;
  }
  @media screen and (max-width: 901px) {
    width: 250px;
    justify-content: center;
  }
`;

const StoreText = styled.div`
  width: 200px;
  height: 60px;
  text-align: left;
  font-size: 0.8rem;
  color: #6e6e73;
  line-height: 1.2rem;

  @media screen and (max-width: 1501px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 1401px) {
    width: 160px;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 1201px) {
    display: none;
  }
`;

const StoreAdd = styled.div`
  width: 200px;
  height: 50px;
  text-align: left;
  font-size: 0.8rem;
  color: #6e6e73;
  display: flex;
  align-items: center;
  word-break: keep-all;
  font-weight: 600;
  & img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    margin-right: 5px;
  }

  @media screen and (max-width: 1401px) {
    width: 160px;
    font-size: 0.6rem;
  }
  @media screen and (max-width: 1201px) {
    width: 140px;
    font-size: 0.6rem;
  }
  @media screen and (max-width: 901px) {
    width: 250px;
  }
`;

const Img = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 30%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media screen and (max-width: 1401px) {
    width: 160px;
    height: 160px;
  }
  @media screen and (max-width: 1201px) {
    display: none;
  }
`;

function ReRecycle() {
  const data = JSON.parse(localStorage.getItem("recommend") || "{}");

  return (
    <Out>
      <ListTitle>Recycle</ListTitle>
      <Img>
        <img src={data.resultRecycle.imgPath} alt="store"></img>
      </Img>
      <Store>
        <StoreName>
          {localStorage.getItem("recommend")
            ? data.resultRecycle.name
            : "가게이름"}
        </StoreName>
        <StoreText>
          {localStorage.getItem("recommend")
            ? data.resultRecycle.phone
            : "전화번호"}
        </StoreText>
        <StoreAdd>
          <img src="icon/location_main.svg" alt="location"></img>
          <span>
            {localStorage.getItem("recommend")
              ? data.resultRecycle.address
              : "가게주소"}
          </span>
        </StoreAdd>
      </Store>
    </Out>
  );
}

export default ReRecycle;
