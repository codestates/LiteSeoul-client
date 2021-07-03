import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import CategoryCafe from "./CategoryCafe";
import CategoryLife from "./CategoryLife";
import CategoryOrgan from "./CategoryOrgan";
import axios from "axios";
import CateRenderLists from "./CateRenderLists";

const MapNav1 = styled.div`
  width: 20%;
  min-width: 350px;
  height: 100%;
  min-height: 800px;
  background-color: #ccc;
  /* border: 1px solid blue; */
  position: fixed;
  box-shadow: rgba(17, 17, 26, 0.4) 0px 0px 16px;
  overflow: auto;
  z-index: 999;
  transition: 0.4s all;
`;

const NavTop = styled.div`
  width: 100%;
  height: 15%;
  background-color: #189cc4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  padding-right: 20px;
  & img:nth-child(1) {
    width: 20px;
    height: 20px;
    object-fit: cover;
    transform: rotate(180deg);
    position: absolute;
    left: 10px;
    cursor: pointer;
  }
  & img:nth-child(2) {
    width: 35px;
    height: 35px;
    object-fit: cover;
    margin-right: 10px;
  }
`;

const NavMain = styled.div`
  width: 100%;
  height: 70%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
`;

const NavMain2 = styled.div`
  width: 100%;
  height: 70%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
`;

const NavAdd = styled.div`
  width: 100%;
  height: 15%;
  background-color: #189cc4;
`;

const Category = styled.div`
  width: 50%;
  height: 40px;
  color: #fff;
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  background-color: #ff735d;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 30px;
`;

const CategoryOut = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  & img {
    width: 15px;
    height: 15px;
    object-fit: cover;
    transform: rotate(180deg);
    position: absolute;
    left: 45px;
    cursor: pointer;
  }
`;

const Category2 = styled.div`
  width: 50%;
  height: 40px;
  color: #fff;
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  background-color: #ffd700;
  border-radius: 20px;
  margin: 0 auto;
`;

const List = styled.div`
  width: 100%;
  height: 80%;
  overflow: auto;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const List2 = styled.div`
  width: 100%;
  height: 80%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    height: 20%;
    background-color: #189cc4;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const CategoryList = styled.div`
  width: 80%;
  height: 80px;
  border-radius: 20px;
  background-color: #eee;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  & div:nth-child(1) {
    width: 60px;
    height: 60px;
    &img {
      width: 60px;
      height: 50px;
      object-fit: cover;
    }
  }
  & div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 150px;
    height: 50px;
    & span:nth-child(1) {
      font-size: 1.4rem;
      font-weight: 700;
    }
    & span:nth-child(2) {
      font-size: 1rem;
      color: #6e6e73;
    }
  }
  & div:nth-child(3) {
    width: 15px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #189cc4;
  }
`;

const CategoryList2 = styled.div`
  cursor: pointer;
  margin: 0 auto;
  width: 80%;
  height: 80px;
  border-radius: 20px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin-bottom: 20px;
  & div:nth-child(1) {
    width: 80%;
    height: auto;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 5px;
    /* background-color: red; */
  }
  & div:nth-child(2) {
    /* background-color: red; */
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    & img {
      width: 20px;
      height: 20px;
      margin-right: 3px;
    }
    & span {
      font-size: 0.7rem;
      color: #6e6e73;
    }
  }
  & div:nth-child(3) {
    width: 15px;
    height: 50px;
    position: absolute;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NavHidden = styled.div`
  width: 20px;
  height: 200px;
  background-color: #189cc4;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0 5px 5px 0;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  z-index: 1000;
  display: none;
  & img {
    width: 15px;
    height: 15px;
  }
  @media screen and (max-width: 961px) {
    display: flex;
  }
`;

type MapProps = {
  handleModal: () => void;
  isModal: boolean;
  handleModalData: any;
};
function MapNav(props: any) {
  // console.log(props);
  const [isList, SetList] = useState(false);
  const [listDatas, setListDatas] = useState([]);

  const handleListDatas = (url: string) => {
     // 각 컴포넌트에서 props.handleListDatas(url)을 갖고 옴. 
     // 실제 콘솔로그 데이터 도출 확인
    console.log(url)

    // shop, life, organ
    // 여기서 각 데이터를 서버에서 axios한 다음, 해당 데이터를 상태에 저장하여 CateRenderLists 컴포넌트에 프롭스로 내려준다.
    axios.get(`http://ec2-52-79-247-245.ap-northeast-2.compute.amazonaws.com/shop/category/${url}`)
    .then(res => setListDatas(res.data))

    // 실제 데이터가 상태에 저장되었는지 확인
    console.log(listDatas)
  }

  const handelList = () => {
    SetList(!isList);
  };

  const handleHome = () => {
    // console.log(props.history);
    props.history.goBack();
  };

  const handleNav = () => {
    document.getElementById("nav")?.classList.toggle("nav");
    document.getElementById("hidden")?.classList.toggle("hidden");
  };

  return (
    <>
      <NavHidden onClick={handleNav} id="hidden">
        <img src="icon/arrow_left_white.svg" alt="arrow"></img>
      </NavHidden>
      <MapNav1 id="nav" className="nav">
        <NavTop>
          <img
            src="icon/arrow_left_white.svg"
            alt="home"
            onClick={handleHome}
          ></img>
          <img src="/icon/location_main.svg" alt="location"></img>LiteSeoul
        </NavTop>

        {isList ? (
          <NavMain2>
            <CategoryOut>
              <img
                src="icon/arrow_left_color.svg"
                alt="category"
                onClick={handelList}
              ></img>
              <Category2>List</Category2>
            </CategoryOut>
            <List2>
              <CategoryList2 onClick={props.handleModal}>
                <CateRenderLists listDatas={listDatas}/>
              </CategoryList2>
            </List2>
          </NavMain2>
        ) : (
          <NavMain>
            <Category>Category</Category>
            <List>
              <CategoryCafe
                {...props}
                handelList={handelList}
                isList={isList}
                handleListDatas={handleListDatas}
                handleModalData={props.handleModalData}
              ></CategoryCafe>
              <CategoryLife
                {...props}
                handelList={handelList}
                isList={isList}
                handleListDatas={handleListDatas}
                handleModalData={props.handleModalData}
              ></CategoryLife>
              <CategoryOrgan
                {...props}
                handelList={handelList}
                isList={isList}
                handleListDatas={handleListDatas}
                handleModalData={props.handleModalData}
              ></CategoryOrgan>
            </List>
          </NavMain>
        )}

        <NavAdd></NavAdd>
      </MapNav1>
    </>
  );
}

export default withRouter(MapNav);
