import React, { useState } from "react";
import styled from "styled-components";
import MapNav from "../components/Map/MapNav";
import KakaoMap from "../components/Map/KakaoMap";
import { stringify } from "querystring";

const MapOut = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 999;
  position: absolute;
  display: flex;
  overflow: hidden;
`;

const CurrentLocation = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  background-image: url("/icon/Current_location-01.svg");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  z-index: 991;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.2rem;
  bottom: 3%;
  right: 3%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.4s all;
  &:hover {
    transform: scale(1.1);
  }
`;

type MapProps = {
  handleModal: () => void;
  isModal: boolean;
  handleModalData: any;
};

function Map({ handleModal, isModal, handleModalData }: MapProps) {
  // 위도경도 데이터를 따로 모으는 상태와 함수가 필요함.
  // KakaoMap.tsx에서 isMap 상태가 위도경도에 관여함
  // MapNav.tsx에 있는 listDatas랑 내용은 같으나 용도가 다르다.
  const [groundDatas, setGroundDatas] = useState([]);
  console.log(groundDatas);

  const handleGroundDatas = (data: any): void => setGroundDatas(data);


  // const [markerRender, setMarkerRender] = useState()


  return (
    <MapOut>
      <MapNav
        handleModal={handleModal}
        isModal={isModal}
        handleModalData={handleModalData}
        handleGroundDatas={handleGroundDatas}
      ></MapNav>
      <KakaoMap
        handleModal={handleModal}
        isModal={isModal}
        groundDatas={groundDatas}
      ></KakaoMap>
    </MapOut>
  );
}

export default Map;

