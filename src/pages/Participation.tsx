import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const ParticipationOut = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`;
const ParticipationMain = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  min-width: 1000px;

  @media screen and (max-width: 1000px) {
    min-width: 470px;
  }
`;
const Part1 = styled.div`
  width: 50%;
  height: 100%;
  min-width: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5%;
  & span:nth-child(1) {
    color: #189cc4;
    font-size: 5rem;
    font-weight: 700;
  }
  & span:nth-child(2) {
    color: #189cc4;
    font-size: 2rem;
    font-weight: 700;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const Img = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 400px;
  & img {
    object-fit: cover;
    width: 100%;
  }
`;

const Part2 = styled.div`
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const InputErr = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #ff735d;
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const FileUpload = styled.label`
  height: 150px;
  width: 100%;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #189cc4;
  border-radius: 10px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  & input[type='file'] {
    display: none;
  }
  &:focus {
    outline: none;
    border: 3px solid #ff735d;
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
  width: 100%;
  height: 40px;
  margin-top: 20px;
  font-size: 15px;
  border-radius: 10px;
  border: 3px solid #189cc4;
  text-indent: 5px;
  &::placeholder {
    color: #86868b;
  }
  &:focus {
    outline: none;
    border: 3px solid #ff735d;
  }
`;
const InputMarketNum = styled.input`
  width: 100%;
  height: 40px;
  font-size: 15px;
  margin-top: 20px;
  text-indent: 5px;
  border-radius: 10px;
  border: 3px solid #189cc4;
  &::placeholder {
    color: #86868b;
  }
  &:focus {
    outline: none;
    border: 3px solid #ff735d;
  }
`;

const InputAddress = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  font-size: 15px;
  border-radius: 10px;
  border: 3px solid #189cc4;
  text-indent: 5px;
  &::placeholder {
    color: #86868b;
  }
  &:focus {
    outline: none;
    border: 3px solid #ff735d;
  }
`;

const InputEmail = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  font-size: 15px;
  border-radius: 10px;
  border: 3px solid #189cc4;
  text-indent: 5px;

  &::placeholder {
    color: #86868b;
  }
  &:focus {
    outline: none;
    border: 3px solid #ff735d;
  }
`;

const InputText = styled.textarea`
  width: 100%;
  height: 80px;
  margin-top: 20px;
  font-size: 15px;
  border-radius: 10px;
  resize: none;
  border: 3px solid #189cc4;
  text-indent: 5px;

  &::placeholder {
    color: #86868b;
  }
  &:focus {
    outline: none;
    border: 3px solid #ff735d;
  }
`;

const InputSelectTitle = styled.div`
  color: #189cc4;
  font-weight: 700;
  font-size: 1rem;
`;

const InputSelectOut = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid #189cc4;
  border-radius: 10px;
`;

const InputSelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #ff735d;
  font-weight: 700;
  font-size: 0.8rem;
  width: 100%;
  margin: 10px 0px;
`;

const SelectInner = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputFinal = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: #189cc4;
`;

const SubmitBtn = styled.button`
  width: 40%;
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
  border: none;
  &:hover {
    background-color: #189cc4;
    letter-spacing: 0.2rem;
  }
`;

function Participation() {
  // Participation(기업참여) 상태관리 파트
  const [storeImg, setStoreImg] = useState<string>('');
  const [storeName, setStoreName] = useState<string>('');
  const [marketNum, setMarketNum] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [storeEmail, setStoreEmail] = useState<string>('');
  const [recommend, setRecommend] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [infoOk, setInfoOk] = useState<boolean>(false);
  const [errMessage, setErrorMessage] = useState<string>('# 내용을 채워주세요!');
  const [isCheck, setCheck] = useState<boolean>(false);

  // 상태변환 함수관리 파트
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

  // 프리뷰 관리 파트
  type ProfilePics = {
    file: string;
    previewURL: any | string;
  };

  const [uploadImg, setUploadImg] = useState<ProfilePics>();

  const handleFileOnChange = (e: any) => {
    e.preventDefault();
    let reader = new FileReader();

    if (e.target.files[0] !== undefined) {
      setStoreImg(e.target.files[0]);
      const file = e.target.files[0];
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

  // 이메일, 사업자번호 유효성검사 파트
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

  // 전체 작성 여부에 대한 에러메시지 이펙트 훅
  useEffect(() => {
    if (infoOk === false) {
      setErrorMessage(
        '# 😵LiteSeoul에서의 사업자 및 개인정보 활용에 동의해주세요!',
      );
    } else {
      setErrorMessage('# 😎모두 작성하셨다면 제출하기 버튼을 눌러주세요!');
    }
  }, [infoOk]);

  // 제출에 대한 에러메시지 렌더링 & 최종 제출 관리 함수
  const handleSubmit = () => {
    // 에러메시지 핸들링
    if (storeImg === '') {
      setErrorMessage('# 😵업체의 사진을 입력(확인)해주세요!');
    } else if (storeName === '') {
      setErrorMessage('# 😵상호명을 입력(확인)해주세요!');
    } else if (marketNum === '' || !isMarketNum(marketNum)) {
      setErrorMessage(
        '# 😵서버와의 연결을 위해 사업자 번호 숫자 10자리(대시포함 12자리)를 입력(확인)해주세요!',
      );
    } else if (address === '') {
      setErrorMessage(
        '# 😵위도경도를 받아 지도에 표시하기 위해 업체의 주소를 입력해주세요!',
      );
    } else if (storeEmail === '' || !isEmail(storeEmail)) {
      setErrorMessage(
        '# 😵확인메일을 받으실 이메일 주소를 입력(확인)해주세요!',
      );
    } else if (recommend === '') {
      setErrorMessage(
        '# 😵LiteSeoul의 분류 중 신청하시는 업체의 방향성을 선택해주세요!',
      );
    } else if (category === '') {
      setErrorMessage('# 😵신청하시는 업체의 업종을 선택해주세요!');
    } else if (text === '') {
      setErrorMessage('# 😵업체를 소개하는 문구를 작성해주세요!');
    } else if (infoOk === false) {
      setErrorMessage(
        '# 😵LiteSeoul에서의 사업자 및 개인정보 활용에 동의해주세요!',
      );
    } else {
      // 최종 확인 메시지
      setErrorMessage('# 😎모두 작성하셨다면 제출하기 버튼을 눌러주세요!');
      
      // 이미지  때문에 폼데이터로 변환
      const formData = new FormData();
      formData.append('storeImg', storeImg);
      formData.append('storeName', storeName);
      formData.append('marketNum', marketNum);
      formData.append('address', address);
      formData.append('storeEmail', storeEmail);
      formData.append('category', category);
      formData.append('recommend', recommend);
      formData.append('text', text);

      // 엑시오스 전송 구역
      axios
        .post('https://www.api.liteseoul.com/shop/register', formData)
        .then((res) => {
          console.log(res);
          alert(
            "LiteSeoul에 업체 참여신청이 완료되었습니다! 운영진이 해당 신청서를 확인하고 등록을 시켜드릴게요. 작성하신 메일주소로 감사의 메일을 전송해 드렸어요! 이제 홈 페이지로 이동합니다 :)",
          );
          window.location.replace('http://localhost:3000/');
        })
        .catch((err) => {
          alert('서버쪽 에러~');
        });
    }
  };

  return (
    <ParticipationOut>
      <ParticipationMain>
        <Part1>
          <div>
            <span>LiteSeoul</span>
            <span>Participation</span>
            <Img>
              <img src="./img/part-01.png" alt="Participation"></img>
            </Img>
          </div>
        </Part1>
        <Part2>
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
                  <input
                    id="file"
                    type="file"
                    accept=".jpg, .jpeg, .png, .gif"
                  />
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
            <InputText
              placeholder=" # LiteSeoul에 참여하시는 상호의 소개문구를 작성해주세요 :)"
              onChange={handleText}
            ></InputText>
            <InputSelectOut>
              <InputSelectTitle>
                # 신청하시는 업체의 방향성을 선택해주세요.
              </InputSelectTitle>
              <InputSelectBox onChange={handleRecommend}>
                <SelectInner>
                  <input
                    type="radio"
                    name="contact"
                    value="antiPlastic"
                    id="antiPlastic"
                  />
                  <label className="contactChoice1" htmlFor="antiPlastic">
                    No Plastic
                  </label>
                </SelectInner>
                <SelectInner>
                  <input
                    type="radio"
                    name="contact"
                    value="recycle"
                    id="recycle2"
                  />
                  <label className="contactChoice2" htmlFor="recycle2">
                    Recycle
                  </label>
                </SelectInner>
                <SelectInner>
                  <input
                    type="radio"
                    name="contact"
                    value="antiChemical"
                    id="antiChemical"
                  />
                  <label className="contactChoice3" htmlFor="antiChemical">
                    No Chemical
                  </label>
                </SelectInner>
              </InputSelectBox>
              <InputSelectTitle>
                # 신청하시는 업체의 업종을 선택해주세요.
              </InputSelectTitle>
              <InputSelectBox onChange={handleCategory}>
                <SelectInner>
                  <input type="radio" name="contact2" value="cafe" id="cafe" />
                  <label className="contactChoice11" htmlFor="cafe">
                    Cafe
                  </label>
                </SelectInner>
                <SelectInner>
                  <input type="radio" name="contact2" value="life" id="life" />
                  <label className="contactChoice22" htmlFor="life">
                    Life
                  </label>
                </SelectInner>
                <SelectInner>
                  <input
                    type="radio"
                    name="contact2"
                    value="organ"
                    id="organ"
                  />
                  <label className="contactChoice33" htmlFor="organ">
                    Organic
                  </label>
                </SelectInner>
              </InputSelectBox>
            </InputSelectOut>

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
        </Part2>
      </ParticipationMain>
    </ParticipationOut>
  );
}

export default Participation;
