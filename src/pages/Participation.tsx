import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import LogoSvg from "../components/SVG/LogoSvg";

const InputTitle = styled.div`
  padding-top: 100px;
  color: #ff735d;
  font-size: 4.3rem;
  text-align: center;
  align-items: center;
  font-weight: bolder;
  @media screen and (max-width: 1501px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 751px) {
    font-size: 3.4rem;
  }
  @media screen and (max-width: 651px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 601px) {
    font-size: 2.5rem;
  }
`;

const InputDetail = styled.div`
  text-align: center;
  align-items: center;
  color: #189cc4;
  font-weight: 700;
  font-size: 2rem;
  @media screen and (max-width: 1501px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 751px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 651px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 601px) {
    font-size: 0.8rem;
  }
`;
const InputErr = styled.div`
margin-top: 20px;
font-size: 1rem;
color: #ff735d;
`

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* margin: 0 30%; */
  /* width: 40rem; */
`;
const InputName = styled.input`
  margin: 20px;
  width: 35rem;
  height: 50px;
  font-size: 15px;
  background-color: #c7dfe6;
  border-radius: 10px;
  border: 3px solid #189cc4;
  &::placeholder {
    color: #86868b;
  }
  &:focus {
    outline: none;
    border: 3px solid #ff735d;
  }
  @media screen and (max-width: 1501px) {
    width: 30rem;
  }
  @media screen and (max-width: 751px) {
    width: 25rem;
  }
  @media screen and (max-width: 651px) {
    width: 20rem;
  }
  @media screen and (max-width: 601px) {
    width: 15rem;
  }
`;
const InputMarketNum = styled.input`
  width: 35rem;
  height: 50px;
  font-size: 15px;
  background-color: #c7dfe6;
  border-radius: 10px;
  border: 3px solid #189cc4;
  &::placeholder {
    color: #86868b;
  }
  &:focus {
    outline: none;
    border: 3px solid #ff735d;
  }
  @media screen and (max-width: 1501px) {
    width: 30rem;
  }
  @media screen and (max-width: 751px) {
    width: 25rem;
  }
  @media screen and (max-width: 651px) {
    width: 20rem;
  }
  @media screen and (max-width: 601px) {
    width: 15rem;
  }
`;

const InputEmail = styled.input`
  margin: 20px 0;
  width: 35rem;
  height: 50px;
  font-size: 15px;
  background-color: #c7dfe6;
  border-radius: 10px;
  border: 3px solid #189cc4;
  &::placeholder {
    color: #86868b;
  }
  &:focus {
    outline: none;
    border: 3px solid #ff735d;
  }
  @media screen and (max-width: 1501px) {
    width: 30rem;
  }
  @media screen and (max-width: 751px) {
    width: 25rem;
  }
  @media screen and (max-width: 651px) {
    width: 20rem;
  }
  @media screen and (max-width: 601px) {
    width: 15rem;
  }
`;

const InputText = styled.textarea`
  margin: 20px;
  width: 35rem;
  height: 150px;
  font-size: 15px;
  background-color: #c7dfe6;
  border-radius: 10px;
  border: 3px solid #189cc4;
  &::placeholder {
    color: #86868b;
  }
  &:focus {
    outline: none;
    border: 3px solid #ff735d;
  }
  @media screen and (max-width: 1501px) {
    width: 30rem;
  }
  @media screen and (max-width: 751px) {
    width: 25rem;
  }
  @media screen and (max-width: 651px) {
    width: 20rem;
  }
  @media screen and (max-width: 601px) {
    width: 15rem;
  }
`;

const InputSelectTitle = styled.div`
  color: #189cc4;
  font-weight: 700;
  font-size: 1rem;
  @media screen and (max-width: 1501px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 751px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 651px) {
    font-size: 0.4rem;
  }
  @media screen and (max-width: 601px) {
    font-size: 0.2rem;
  }
`

const InputSelectBox = styled.div`
  display: flex;
  /* margin: 10px 0; */
  color: #ff735d;
  font-weight: 700;
  font-size: 1rem;
  @media screen and (max-width: 1501px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 751px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 651px) {
    font-size: 0.4rem;
  }
  @media screen and (max-width: 601px) {
    font-size: 0.2rem;
  }
`;

const SelectInner = styled.div`
  margin: 0 20px;
  display: flex;
`;

const InputFinal = styled.div`
  /* width: 100%; */
  height: 40px;
  /* border: 1px solid red; */
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: #189cc4;
`;

const SubmitBtn = styled.button`
  width: 20%;
  height: 40px;
  background-color: #ff735d;
  color: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.4s all;
  &:hover {
    background-color: #189cc4;
    letter-spacing: 0.2rem;
  }
  margin-bottom: 60px;
`;

function Participation() {
  const [storeName, setStoreName] = useState("");
  const [marketNum, setMarketNum] = useState("");
  const [storeEmail, setStoreEmail] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [infoOk, setInfoOk] = useState("");
  const [errMessage, setErrorMessage] = useState("# 내용을 채워주세요!");

  const handleName = (e: any) => {
    setStoreName(e.target.value);
  };

  const handleNum = (e: any) => {
    setMarketNum(e.target.value);
  };

  const handleEmail = (e: any) => {
    setStoreEmail(e.target.value);
  };

  const handleCategory = (e: any) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const handleText = (e: any) => {
    setText(e.target.value);
  };

  const handleInfoOk = (e: any) => {
    console.log(e);
    // if (e.target.value === "on") {
    //   setInfoOk(true);
    // } else {
    //   setInfoOk(false);
    // }
    setInfoOk(e.target.value)
  };

  const handleSubmit = () => {

    // 버튼누르면 바로 반응이 안온다.
    const formData = new FormData();
    formData.append("name", storeName)
    formData.append("num", marketNum)
    formData.append("email", storeEmail)
    formData.append("catagory", category)
    formData.append("text", text)
    formData.append("infoOk", infoOk)


    // 아마도 정보 보낼때 이렇게 보내야 할듯.
    // axios
    //   .post("url", {
    //     name: storeName,
    //     num: marketNum,
    //     email: storeEmail,
    //     category: category,
    //     text: text,
    //     infoOk: infoOk,
    //   })
    //   .then((res) => console.log(res));
    

  };

  return (
    <>
      <InputTitle>
        <LogoSvg></LogoSvg>
        <div>Participation</div>
      </InputTitle>
      <InputDetail>
        <div>Zero Waste를 실천하시는 사업자시라면</div>
        <div>LiteSeoul과 함께 하시는게 어떠세요?</div>
        <InputErr>{errMessage}</InputErr>
      </InputDetail>
      <InputForm onSubmit={(e) => e.preventDefault()}>
        <InputName
          type="text"
          placeholder=" # 신청하시려는 업체의 상호명을 입력하세요."
          onChange={handleName}
        ></InputName>
        <InputMarketNum
          type="text"
          placeholder=" # 사업자 번호를 입력해주세요. 대쉬(-)포함."
          onChange={handleNum}
        ></InputMarketNum>
        <InputEmail
          type="text"
          placeholder=" # 확인메일을 받으실 이메일을 입력해주세요."
          onChange={handleEmail}
        ></InputEmail>
        <InputSelectTitle>
          # 신청하시는 업체의 방향성을 선택해주세요.
        </InputSelectTitle>
        <InputSelectBox onChange={handleCategory}>
          <SelectInner>
            <input type="radio" name="contact" value="No Plastic" />
            <label className="contactChoice1">No Plastic</label>
          </SelectInner>
          <SelectInner>
            <input type="radio" name="contact" value="Recycle" />
            <label className="contactChoice2">Recycle</label>
          </SelectInner>
          <SelectInner>
            <input type="radio" name="contact" value="No Chemical" />
            <label className="contactChoice3">No Chemical</label>
          </SelectInner>
        </InputSelectBox>
        <InputText
          placeholder=" # LiteSeoul에 참여하시는 소감 한 마디 부탁드립니다 :)"
          onChange={handleText}
        ></InputText>
        <InputFinal>
          <input type="checkbox" onChange={handleInfoOk} />
          <label>LiteSeoul에서의 사업자 및 개인정보 활용에 동의합니다.</label>
        </InputFinal>
        <SubmitBtn type="submit" onClick={handleSubmit}>
          제출하기
        </SubmitBtn>
      </InputForm>
    </>
  );
}

export default Participation;
