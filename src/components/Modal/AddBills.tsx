import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import dotenv from 'dotenv';
dotenv.config();

const AddBillsOut = styled.div`
  width: 500px;
  height: 800px;
  z-index: 990;
  overflow: auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
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
  background-image: url("/icon/close.svg");
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1);
    background-image: url("/icon/close2.svg");
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

const SubmitBtn = styled.div`
  z-index: 9999;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 10px;
  padding: 10px 40px;
  background-color: #189cc4;
  color: white;
  &:hover {
    transform: scale(1.1);
    background-color: #ff735d;
    color: white;
  }
`;

const BillsImgOut = styled.div`
  height: 100%;
`;

const BillsImg = styled.img`
  padding: 50px;
`;

const BillMentsRef = styled.div`
  color: #ff735d;
  font-size: 10px;
`;

function AddBills({ handleModalClose, handleMypageNow, setLoading }: any) {
  type Bills = {
    file: string;
    previewURL: any | string;
  };

  const [billsImg, setBillsImg] = useState<Bills>();
  const [uploadImg, setUploadImg] = useState<string>("");

  // 영수증 업로드 시 이미지 프리뷰 함수
  const handleFileOnChange = (event: any) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setBillsImg({
        file,
        previewURL: reader.result,
      });
      setUploadImg(file);
    };
    reader.readAsDataURL(file);
  };

  // 영수증 업로드 후 제출 버튼 함수
  const handleImgSubmit = () => {
    if (billsImg === undefined) {
      alert("이미지를 업로드 해주세요!");
    } else {
      const formData = new FormData();
      const token = sessionStorage.getItem("access_token");
      if (token !== null) {
        formData.append("access_token", token);
      }
      formData.append("receipt", uploadImg);
      setLoading(true);
      axios
        .post(process.env.REACT_APP_DOAMIN_URL + "receipt/add", formData)
        .then((res) => {
          handleMypageNow("billslog");
          setLoading(false);
          window.location.reload();
        });
    }
  };

  return (
    <AddBillsOut>
      <CloseBtn onClick={handleModalClose}></CloseBtn>
      <PlayModalInside>
        <SubmitBtn onClick={handleImgSubmit}>제출하기</SubmitBtn>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="UploadBillsImg"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleFileOnChange}
          />
        </form>
        <BillsAddLine>
          {billsImg ? (
            <BillsImgOut>
              <BillsImg src={billsImg.previewURL} alt="업로드"></BillsImg>
            </BillsImgOut>
          ) : (
            <div className="UploadBillBackMents">
              <div>인증을 업로드 하시려면</div>
              <div>여기를 클릭하세요!</div>
              <BillMentsRef>
                참고: 영수증 상단부의 사업자번호와 업체(매장)명만 찍어주시면
                돼요!
              </BillMentsRef>
            </div>
          )}
        </BillsAddLine>
      </PlayModalInside>
    </AddBillsOut>
  );
}

export default AddBills;
