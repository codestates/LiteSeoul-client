import React from 'react';
import styled from 'styled-components';
import Wood from '../SVG/Wood';

const Slogan2Out = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  background: #fff;
`;

const SloganMain = styled.div`
  width: 90%;
  height: 100%;
  /* border: 1px solid red; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const SloganImg = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  @media screen and (max-width: 801px) {
    width: 60%;
    height: 50%;
  }
`;

const SloganText = styled.div`
  width: 60%;
  height: 70%;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 3%;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

const SloganTextTitle = styled.div`
  width: 100%;
  height: 10%;
  /* background-color: red; */
  margin-bottom: 15px;
  text-align: left;
  font-size: 3.5rem;
  font-weight: 700;
  @media screen and (max-width: 1000px) {
    height: auto;
    font-size: 3rem;
  }
`;

const SloganTextContent = styled.div`
  width: 90%;
  height: 20%;
  /* background-color: red; */
  font-size: 1.2rem;
  text-align: left;
  color: #6e6e73;
  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
`;
function Slogan2() {
  return (
    <Slogan2Out>
      <SloganMain>
        <SloganText>
          <SloganTextTitle>Zero Waste Life</SloganTextTitle>
          <SloganTextContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </SloganTextContent>
        </SloganText>

        <SloganImg>
          <Wood></Wood>
        </SloganImg>
      </SloganMain>
    </Slogan2Out>
  );
}

export default Slogan2;
