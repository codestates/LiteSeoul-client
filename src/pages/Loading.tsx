import React from "react";
import styled from "styled-components";
import LogoSvg from "../components/SVG/LogoSvg";
import Background from "../components/SVG/BackGround";

const Loadinging = styled.div`
  margin-top: 300px;
  color: #ff735d;
  font-size: 100px;
  text-align: center;
  align-items: center;
  font-weight: bolder;
`;

const LoadingImage = styled.img`
  width: 60px;
`;

function Loading() {
  return (
    <Loadinging>
        <Background></Background>
      <LogoSvg></LogoSvg>
      <div>
        Loading...
        <LoadingImage src="img/loading.gif" alt="loading"></LoadingImage>
      </div>
    </Loadinging>
  );
}

export default Loading;
