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
