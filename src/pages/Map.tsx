import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MapNav from '../components/Map/MapNav';
import KakaoMap from '../components/Map/KakaoMap';
import axios from 'axios';

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
  background-image: url('/icon/Current_location-01.svg');
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
  console.log(isModal);

  useEffect(() => {
    axios
      .get(
        `http://ec2-52-79-247-245.ap-northeast-2.compute.amazonaws.com/shop/getAll`,
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('total', JSON.stringify(res.data));
      });
  }, []);

  return (
    <MapOut>
      <MapNav
        handleModal={handleModal}
        isModal={isModal}
        handleModalData={handleModalData}
      ></MapNav>
      <KakaoMap
        handleModal={handleModal}
        isModal={isModal}
        // handleModalData={handleModalData}
      ></KakaoMap>
    </MapOut>
  );
}

export default Map;
