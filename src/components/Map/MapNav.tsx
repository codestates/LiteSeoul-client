import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import CategoryCafe from './CategoryCafe';

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
};
function MapNav(props: any) {
  // console.log(props);
  const [isList, SetList] = useState(false);

  const handelList = () => {
    SetList(!isList);
  };

  const handleHome = () => {
    // console.log(props.history);
    props.history.goBack();
  };

  const handleNav = () => {
    document.getElementById('nav')?.classList.toggle('nav');
    document.getElementById('hidden')?.classList.toggle('hidden');
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
                <div>The Peaker</div>
                <div>
                  <img src="icon/location_main.svg" alt="maker"></img>
                  <span>성동구 왕십리로 115 헤어그라운드</span>
                </div>
                <div>
                  <img src="icon/arrow_left_color.svg" alt="maker"></img>
                </div>
              </CategoryList2>
            </List2>
          </NavMain2>
        ) : (
          <NavMain>
            <Category>Category</Category>
            <List>
              {/* <CategoryList onClick={handelList}>
                <div>
                  <img src="icon/certification_mypage.svg" alt="category"></img>
                </div>
                <div>
                  <span>Cafe</span>
                  <span>zero waste cafe</span>
                </div>
                <div></div>
              </CategoryList>

              <CategoryList onClick={handelList}>
                <div>
                  <img src="icon/certification_mypage.svg" alt="category"></img>
                </div>
                <div>
                  <span>Restaurant</span>
                  <span>zero waste cafe</span>
                </div>
                <div></div>
              </CategoryList>

              <CategoryList onClick={handelList}>
                <div>
                  <img src="icon/certification_mypage.svg" alt="category"></img>
                </div>
                <div>
                  <span>Store</span>
                  <span>zero waste cafe</span>
                </div>
                <div></div>
              </CategoryList>

              <CategoryList onClick={handelList}>
                <div>
                  <img src="icon/certification_mypage.svg" alt="category"></img>
                </div>
                <div>
                  <span>Etc</span>
                  <span>zero waste cafe</span>
                </div>
                <div></div>
              </CategoryList> */}
              <CategoryCafe
                {...props}
                handelList={handelList}
                isList={isList}
              ></CategoryCafe>
            </List>
          </NavMain>
        )}
        {/* 아래는 category */}

        {/* 아래는 리스트항목 */}

        <NavAdd></NavAdd>
      </MapNav1>
    </>
  );
}

export default withRouter(MapNav);
