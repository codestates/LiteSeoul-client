import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import CategoryTotal from './CategoryTotal';
import CategoryCafe from './CategoryCafe';
import CategoryLife from './CategoryLife';
import CategoryOrgan from './CategoryOrgan';

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
  /* border: 1px solid red; */
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
  /* border: 1px solid blue; */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #189cc4;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
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
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin-bottom: 20px;
  &:hover {
    /* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px; */
    background-color: #ffd700;
  }
  &:last-child {
    margin-bottom: 0px;
  }
  & div:nth-child(1) {
    width: 80%;
    height: 30px;
    font-weight: 700;
    font-size: 1.2rem;
    /* margin-bottom: 5px; */
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  & div:nth-child(2) {
    /* background-color: red; */
    width: 80%;
    height: 30px;
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  & div:nth-child(3) {
    width: 15px;
    height: 50px;
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -25px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid blue; */
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

type shopData = {
  id: number;
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  category: string;
  recommend: string;
  phone: string;
  created_at: string;
  updated_at: string;
};

function MapNav(props: any) {
  const data = JSON.parse(localStorage.getItem('total') || '{}');

  const axiosOrgan = data.filter((el: any) => {
    return el['category'] === 'organ';
  });

  const axiosCafe = data.filter((el: any) => {
    return el['category'] === 'cafe';
  });

  const axiosLife = data.filter((el: any) => {
    return el['category'] === 'life';
  });

  const [isList, SetList] = useState(false);
  const [isCategory, setCategory] = useState('');

  const handelCategoy = (e: any) => {
    setCategory(e);
  };

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

  const handlemaker = (e: any) => {
    if (document.getElementById(e)) {
      document.getElementById(e)!.style.backgroundColor = '#ffd700';
    }
  };
  const handlemaker2 = (e: any) => {
    if (document.getElementById(e)) {
      document.getElementById(e)!.style.backgroundColor = '#189cc4';
    }
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
          <NavMain2 id="NavMain2">
            <CategoryOut>
              <img
                src="icon/arrow_left_color.svg"
                alt="category"
                onClick={handelList}
              ></img>
              <Category2>List</Category2>
            </CategoryOut>
            {isCategory === 'all' ? (
              <List2>
                {data.map((listData: shopData) => (
                  <CategoryList2
                    key={listData.id}
                    id={'CategoryList' + listData.id}
                    onClick={props.handleModal}
                    onMouseEnter={() => handlemaker(listData.id)}
                    onMouseLeave={() => handlemaker2(listData.id)}
                  >
                    <div
                      onClick={() => props.handleModalData(listData)}
                      style={{
                        width: '80%',
                        height: 'auto',
                      }}
                    >
                      <div
                        style={{
                          marginTop: '10px',
                        }}
                      >
                        {listData.name}
                      </div>
                      <div>
                        <img src="icon/location_main.svg" alt="maker"></img>
                        <span title={listData.address}>{listData.address}</span>
                      </div>
                      <div>
                        <img src="icon/arrow_left_color.svg" alt="arrow"></img>
                      </div>
                    </div>
                  </CategoryList2>
                ))}
              </List2>
            ) : (
              <></>
            )}
            {isCategory === 'cafe' ? (
              <List2>
                {axiosCafe.map((listData: shopData) => (
                  <CategoryList2
                    key={listData.id}
                    id={'CategoryList' + listData.id}
                    onClick={props.handleModal}
                    onMouseEnter={() => handlemaker(listData.id)}
                    onMouseLeave={() => handlemaker2(listData.id)}
                  >
                    <div
                      onClick={() => props.handleModalData(listData)}
                      style={{
                        width: '80%',
                        height: 'auto',
                      }}
                    >
                      <div
                        style={{
                          marginTop: '10px',
                        }}
                      >
                        {listData.name}
                      </div>
                      <div>
                        <img src="icon/location_main.svg" alt="maker"></img>
                        <span title={listData.address}>{listData.address}</span>
                      </div>
                      <div>
                        <img src="icon/arrow_left_color.svg" alt="arrow"></img>
                      </div>
                    </div>
                  </CategoryList2>
                ))}
              </List2>
            ) : (
              <></>
            )}
            {isCategory === 'life' ? (
              <List2>
                {axiosLife.map((listData: shopData) => (
                  <CategoryList2
                    key={listData.id}
                    id={'CategoryList' + listData.id}
                    onClick={props.handleModal}
                    onMouseEnter={() => handlemaker(listData.id)}
                    onMouseLeave={() => handlemaker2(listData.id)}
                  >
                    <div
                      onClick={() => props.handleModalData(listData)}
                      style={{
                        width: '80%',
                        height: 'auto',
                      }}
                    >
                      <div
                        style={{
                          marginTop: '10px',
                        }}
                      >
                        {listData.name}
                      </div>
                      <div>
                        <img src="icon/location_main.svg" alt="maker"></img>
                        <span title={listData.address}>{listData.address}</span>
                      </div>
                      <div>
                        <img src="icon/arrow_left_color.svg" alt="arrow"></img>
                      </div>
                    </div>
                  </CategoryList2>
                ))}
              </List2>
            ) : (
              <></>
            )}
            {isCategory === 'organ' ? (
              <List2>
                {axiosOrgan.map((listData: shopData) => (
                  <CategoryList2
                    key={listData.id}
                    id={'CategoryList' + listData.id}
                    onClick={props.handleModal}
                    onMouseEnter={() => handlemaker(listData.id)}
                    onMouseLeave={() => handlemaker2(listData.id)}
                  >
                    <div
                      onClick={() => props.handleModalData(listData)}
                      style={{
                        width: '80%',
                        height: 'auto',
                      }}
                    >
                      <div
                        style={{
                          marginTop: '10px',
                        }}
                      >
                        {listData.name}
                      </div>
                      <div>
                        <img src="icon/location_main.svg" alt="maker"></img>
                        <span title={listData.address}>{listData.address}</span>
                      </div>
                      <div>
                        <img src="icon/arrow_left_color.svg" alt="arrow"></img>
                      </div>
                    </div>
                  </CategoryList2>
                ))}
              </List2>
            ) : (
              <></>
            )}
          </NavMain2>
        ) : (
          <NavMain>
            <Category>Category</Category>
            <List>
              <CategoryTotal
                {...props}
                handelList={handelList}
                isList={isList}
                // handleListDatas={handleListDatas}
                handleModalData={props.handleModalData}
                handelCategoy={handelCategoy}
              ></CategoryTotal>
              <CategoryCafe
                {...props}
                handelList={handelList}
                isList={isList}
                // handleListDatas={handleListDatas}
                handleModalData={props.handleModalData}
                handelCategoy={handelCategoy}
              ></CategoryCafe>
              <CategoryLife
                {...props}
                handelList={handelList}
                isList={isList}
                // handleListDatas={handleListDatas}
                handleModalData={props.handleModalData}
                handelCategoy={handelCategoy}
              ></CategoryLife>
              <CategoryOrgan
                {...props}
                handelList={handelList}
                isList={isList}
                // handleListDatas={handleListDatas}
                handleModalData={props.handleModalData}
                handelCategoy={handelCategoy}
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
