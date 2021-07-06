import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const AddBillsOut = styled.div`
  width: 500px;
  height: 800px;
  z-index: 990;
  overflow: auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
`;

const CloseBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: 0.2s all;
  background-image: url('/icon/close.svg');
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1);
    background-image: url('/icon/close2.svg');
  }
`;
const PlayModalInside = styled.div`
  width: 100%;
  height: 750px;
  position: relative;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  padding: 5%;
`;

const BillsAddLine = styled.div`
  width: 100%;
  height: 100%;
  border: 4px dashed #189cc4;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function AddBills({ handleModalClose }: any) {
  // console.log(handleModalClose);
  const [billsImg, setBillsImg] = useState('');

  const fileUpload = (e: any): void => {
    console.log(e);
    setBillsImg(e.target.value);
  };

  const RenderImg = styled.div`
    background-image: ${billsImg};
  `;

  return (
    <AddBillsOut>
      <CloseBtn onClick={handleModalClose}></CloseBtn>
      <RenderImg></RenderImg>
      <PlayModalInside>
        <input
          className="UploadBillsImg"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={fileUpload}
          // onClick={fileUpload}
        />
        <BillsAddLine>
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
        </BillsAddLine>
      </PlayModalInside>
    </AddBillsOut>
  );
}

export default AddBills;
