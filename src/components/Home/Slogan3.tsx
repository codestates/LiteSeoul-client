import React from 'react';
import styled from 'styled-components';

const Slogan3Out = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  background: #fff;
`;

const SloganMain = styled.div`
  width: 90%;
  height: 100%;
  border: 1px solid red;
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
  position: relative;
  & img {
    width: 100%;
    position: absolute;
  }
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
  & img {
    width: 30%;
    object-fit: cover;
    opacity: 0.2;
    left: 5%;
    position: absolute;
    z-index: 10;
  }
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
  z-index: 20;
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
  z-index: 20;

  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
`;
function Slogan3() {
  return (
    <Slogan3Out>
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
          <img src="img/earth.png" alt="earth" className="earth"></img>
          <img src="img/cloud.png" alt="cloud" className="cloud"></img>
          <img src="img/earthout.png" alt="earthout" className="earthoud"></img>
          <img src="img/pan1.png" alt="pan1" className="pan1"></img>
          <img src="img/pan2.png" alt="pan2" className="pan2"></img>
          <img src="img/pan3.png" alt="pan3" className="pan3"></img>
          <img src="img/tree.png" alt="tree" className="tree"></img>
        </SloganImg>
      </SloganMain>
    </Slogan3Out>
  );
}

export default Slogan3;
