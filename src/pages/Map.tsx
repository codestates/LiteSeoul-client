import React from 'react';
import styled from 'styled-components';
import MapNav from '../components/Map/MapNav';
import KakaoMap from '../components/Map/KakaoMap';

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
};

function Map({ handleModal, isModal }: MapProps) {
  return (
    <MapOut>
      <MapNav handleModal={handleModal} isModal={isModal}></MapNav>
      <KakaoMap handleModal={handleModal} isModal={isModal}></KakaoMap>
    </MapOut>
  );
}

export default Map;
