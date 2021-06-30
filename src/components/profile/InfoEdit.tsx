import React from "react";
import styled from "styled-components";

const PlayModal = styled.div`
  width: 100%;
  height: 210%;
  margin-top: 30%;
  min-width: 500px;
  background-color: #bcb6b6;
  z-index: 990;
  overflow: auto;
  opacity: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 1.5rem;
`;
const PlayModalInside = styled.div`
  width: 60%;
  height: 400px;
  margin: auto;
  padding: 50px 50px 100px 50px;
  position: relative;
  background-color: white;
  border-radius: 10px;
`;
const ModalCloseBtn = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #ccc;
  border-radius: 50%;
  position: absolute;
  top: 40px;
  right: 40px;
  color: #ccc;
  font-size: 2rem;
  font-weight: 1000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  background-color: #188cc3;
  z-index: 999;
  &:hover {
    border: none;
    /* background: #white; */
    opacity: 1;
    overflow: auto;
  }
`;

//잠깐보류!!!
const InfoEdit = (props: any) => {
  return (
    <PlayModal>
      <div
      className="ModalCloseBtn"
        onClick={() =>
          // window.history.back();
          props.handleModalClose
        }
      >X</div>
      <PlayModalInside></PlayModalInside>
    </PlayModal>
  );
};

export default InfoEdit;
