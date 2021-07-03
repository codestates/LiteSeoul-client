import React from "react";
import { useState } from "react";
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
  width: 80%;
  height: 90%;
  margin: auto;
  padding: 50px 50px 50px 50px;
  position: relative;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  cursor: pointer;
`;

function AddBills({ handleModalClose }: any) {
  const [billsImg, setBillsImg] = useState("");

  const fileUpload = (e: any): void => {
    console.log(e.target.value);
    setBillsImg(e.target.value);
  };

  const RenderImg = styled.div`
    background-image: ${billsImg};
  `;

  return (
    <PlayModal>
      <div
        className="ModalCloseBtn"
        onClick={() =>
          // window.history.back()
          handleModalClose
        }
      >
        X
      </div>
      <PlayModalInside>
        <RenderImg></RenderImg>
        <input
          className="UploadBillsImg"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={fileUpload}
        />
        <div className="UploadBillsBackground">
          {billsImg ? (
            <div>
              <img src={billsImg} alt="업로드"></img>
              <div className="UploadBillBackMents">인증을 업로드 할게요!</div>
            </div>
          ) : (
            <div className="UploadBillBackMents">
              <div>인증을 업로드 하시려면</div>
              <div>여기를 클릭하세요!</div>
            </div>
          )}
        </div>
      </PlayModalInside>
    </PlayModal>
  );
}

export default AddBills;
