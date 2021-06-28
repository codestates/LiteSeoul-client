import React from 'react';
import styled from 'styled-components';

const MapOut = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 999;
  position: absolute;
  overflow: hidden;
`;

function Map() {
  return <MapOut>Map</MapOut>;
}

export default Map;
