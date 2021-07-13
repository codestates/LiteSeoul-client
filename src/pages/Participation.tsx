import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
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

const InputDetailEnd = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  color: #ff735d;
  @media screen and (max-width: 1501px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 751px) {
    font-size: 0.4rem;
  }
  @media screen and (max-width: 651px) {
    font-size: 0.2rem;
  }
  @media screen and (max-width: 601px) {
    font-size: 0.1rem;
  }
`;

const InputErr = styled.div`
  /* margin-top: 10px; */
  font-size: 1rem;
  font-weight: 700;
  color: #ff735d;
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* margin: 0 30%; */
  /* width: 40rem; */
`;

const FileUpload = styled.label`
  display: block;
  height: 400px;
  width: 400px;
  text-align: center;
  align-items: center;
  position: relative;
  border: 3px solid #189cc4;
  border-radius: 10px;
  overflow: hidden;
  /* background-image: url('../components/image/danggeun'); */
  background-color: #c7dfe6;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  margin-top: 20px;

  & input[type="file"] {
    display: none;
  }
  &:focus {
    outline: none;
    border: 3px solid #ff735d;
  }
  @media screen and (max-width: 1501px) {
    height: 250px;
    width: 250px;
  }
  @media screen and (max-width: 751px) {
    height: 200px;
    width: 200px;
  }
  @media screen and (max-width: 651px) {
    height: 200px;
    width: 200px;
  }
  @media screen and (max-width: 601px) {
    height: 150px;
    width: 150px;
  }
`;

const PreviewImg = styled.img`
  object-fit: cover;
  height: 100%;
`;

const FileText = styled.div`
  color: #86868b;
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

const InputAddress = styled.input`
  margin-top: 20px;
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
margin-top: 20px;
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
`;

const InputSelectOut = styled.div`
text-align: left;
align-items: left;
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
  /* margin: 0 20px; */
  margin-right: 20px;
  display: flex;
  align-items: left;
  text-align: left;
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
  const [storeImg, setStoreImg] = useState("");
  // console.log(storeImg)
  const [storeName, setStoreName] = useState("");
  const [marketNum, setMarketNum] = useState("");
  const [address, setAddress] = useState("");
  const [storeEmail, setStoreEmail] = useState("");
  const [recommend, setRecommend] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [infoOk, setInfoOk] = useState(false);
  const [errMessage, setErrorMessage] = useState("# 내용을 채워주세요!");
  const [isCheck, setCheck] = useState(false);
  console.log(infoOk);

  const handleName = (e: any) => {
    setStoreName(e.target.value);
  };

  const handleNum = (e: any) => {
    setMarketNum(e.target.value);
  };

  const handleAddress = (e: any) => {
    setAddress(e.target.value);
  };

  const handleEmail = (e: any) => {
    setStoreEmail(e.target.value);
  };

  const handleRecommend = (e: any) => {
    console.log(e.target.value);
    setRecommend(e.target.value);
  };

  const handleCategory = (e: any) => {
    setCategory(e.target.value);
  };

  const handleText = (e: any) => {
    setText(e.target.value);
  };

  const handleCheck = () => {
    setCheck(!isCheck);
    handleInfoOk(!isCheck);
  };

  const handleInfoOk = (isCheck: boolean) => {
    if (isCheck === true) {
      setInfoOk(true);
    } else {
      setInfoOk(false);
    }
  };

  type ProfilePics = {
    file: string;
    previewURL: any | string;
  };
  const [uploadImg, setUploadImg] = useState<ProfilePics>();

  const handleFileOnChange = (event: any) => {
    event.preventDefault();
    let reader = new FileReader();

    if (event.target.files[0] !== undefined) {
      setStoreImg(event.target.files[0]);
      const file = event.target.files[0];
      reader.onloadend = () => {
        setUploadImg({
          file,
          previewURL: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const deleteUploadImg = () => {
    setUploadImg(undefined);
  };

  const isEmail = (storeEmail: string) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return emailRegex.test(storeEmail);
  };

  const isMarketNum = (marketNum: string) => {
    const marketNumRegex = /(\d{3})-?(\d{2})-?(\d{5})/;

    if (marketNum.length === 12) {
      return marketNumRegex.test(marketNum);
    }
  };

  useEffect(() => {
    if (infoOk === false) {
      setErrorMessage(
        "# 😵LiteSeoul에서의 사업자 및 개인정보 활용에 동의해주세요!"
      );
    } else {
      setErrorMessage("# 😎모두 작성하셨다면 제출하기 버튼을 눌러주세요!");
    }
  }, [infoOk]);

  const handleSubmit = () => {
    // 에러메시지 핸들링
    if (storeImg === "") {
      setErrorMessage("# 😵업체의 사진을 입력(확인)해주세요!");
    } else if (storeName === "") {
      setErrorMessage("# 😵상호명을 입력(확인)해주세요!");
    } else if (marketNum === "" || !isMarketNum(marketNum)) {
      setErrorMessage(
        "# 😵서버와의 연결을 위해 사업자 번호를 입력(확인)해주세요!"
      );
    } else if (address === "") {
      setErrorMessage(
        "# 😵위도경도를 받아 지도에 표시하기 위해 업체의 주소를 입력해주세요!"
      );
    } else if (storeEmail === "" || !isEmail(storeEmail)) {
      setErrorMessage(
        "# 😵확인메일을 받으실 이메일 주소를 입력(확인)해주세요!"
      );
    } else if (recommend === "") {
      setErrorMessage(
        "# 😵LiteSeoul의 분류 중 신청하시는 업체의 방향성을 선택해주세요!"
      );
    } else if(category === "") {
      setErrorMessage("# 😵신청하시는 업체의 업종을 선택해주세요!")
    } else if (text === "") {
      setErrorMessage("# 😵업체를 소개하는 문구를 작성해주세요!");
    } else if (infoOk === false) {
      setErrorMessage(
        "# 😵LiteSeoul에서의 사업자 및 개인정보 활용에 동의해주세요!"
      );
    } else {
      // 최종 확인 메시지
      setErrorMessage("# 😎모두 작성하셨다면 제출하기 버튼을 눌러주세요!");
      console.log("hello");

      // 엑시오스 전송 구역

      const formData = new FormData();
      formData.append("storeImg", storeImg);
      formData.append("storeName", storeName);
      formData.append("marketNum", marketNum);
      formData.append("address", address);
      formData.append("storeEmail", storeEmail);
      formData.append("category", category);
      formData.append("recommend", recommend);
      formData.append("text", text);

      axios
        .post("https://www.api.liteseoul.com/shop/register", formData)
        .then((res) => {
          console.log(res);
          alert(
            "LiteSeoul에 업체 참여신청이 완료되었습니다! 운영진이 해당 신청서를 확인하고 등록을 시켜드릴게요. 신청서에 대한 확인용 메일을 전송하였으니 메일에서 '확인' 버튼을 눌러주세요! 홈 페이지로 이동합니다 :)"
          );
          window.location.replace("http://localhost:3000/");
        })
        .catch((err) => {
          alert("서버쪽 에러~");
        });
    }
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
        <InputDetailEnd>
          🥳 소비자들에게 건강한 기업으로 다가갈 수 있는 기회입니다 :)
        </InputDetailEnd>
      </InputDetail>
      <InputForm onSubmit={(e) => e.preventDefault()}>
        <FileUpload htmlFor="file" onChange={handleFileOnChange}>
          {uploadImg !== undefined ? (
            <PreviewImg
              src={uploadImg.previewURL}
              alt="프사"
              onClick={deleteUploadImg}
            ></PreviewImg>
          ) : (
            <>
              <FileText>
                <div># 등록하시려는 업체의</div>
                <div>사진을 업로드해주세요 :)</div>
              </FileText>
              <input id="file" type="file" accept=".jpg, .jpeg, .png, .gif" />
            </>
          )}
        </FileUpload>
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
        <InputAddress
          type="address"
          placeholder=" # 업체 주소를 작성해주세요(예: 서울특별시 마포구 와우산로3길 00)"
          onChange={handleAddress}
        ></InputAddress>
        <InputEmail
          type="email"
          placeholder=" # 확인메일을 받으실 이메일을 입력해주세요."
          onChange={handleEmail}
        ></InputEmail>
        <InputSelectOut>
          <InputSelectTitle>
            # 신청하시는 업체의 방향성을 선택해주세요.
          </InputSelectTitle>
          <InputSelectBox onChange={handleRecommend}>
            <SelectInner>
              <input type="radio" name="contact" value="antiPlastic" />
              <label className="contactChoice1">No Plastic</label>
            </SelectInner>
            <SelectInner>
              <input type="radio" name="contact" value="recycle" />
              <label className="contactChoice2">Recycle</label>
            </SelectInner>
            <SelectInner>
              <input type="radio" name="contact" value="antiChemical" />
              <label className="contactChoice3">No Chemical</label>
            </SelectInner>
          </InputSelectBox>
          <InputSelectTitle>
            # 신청하시는 업체의 업종을 선택해주세요.
          </InputSelectTitle>
          <InputSelectBox onChange={handleCategory}>
            <SelectInner>
              <input type="radio" name="contact2" value="cafe" />
              <label className="contactChoice11">Cafe(카페, 식당)</label>
            </SelectInner>
            <SelectInner>
              <input type="radio" name="contact2" value="life" />
              <label className="contactChoice22">Life(생활용품)</label>
            </SelectInner>
            <SelectInner>
              <input type="radio" name="contact2" value="organ" />
              <label className="contactChoice33">Organ(친환경)</label>
            </SelectInner>
          </InputSelectBox>
        </InputSelectOut>
        <InputText
          placeholder=" # LiteSeoul에 참여하시는 상호의 소개문구를 작성해주세요 :)"
          onChange={handleText}
        ></InputText>
        <InputFinal>
          <input
            id="checkbox"
            type="Checkbox"
            onChange={handleCheck}
            checked={isCheck}
          />
          <label htmlFor="checkbox">
            LiteSeoul에서의 사업자 및 개인정보 활용에 동의합니다.
          </label>
        </InputFinal>
        <InputErr>{errMessage}</InputErr>
        <SubmitBtn type="submit" onClick={handleSubmit}>
          제출하기
        </SubmitBtn>
      </InputForm>
    </>
  );
}

export default Participation;
