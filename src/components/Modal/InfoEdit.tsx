import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dotenv from 'dotenv';
dotenv.config();

const SinUpOut = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
`;

const SignUpMain = styled.div`
  width: 500px;
  height: 700px;
  position: relative;

  @media screen and (max-width: 600px) {
    width: 400px;
  }
`;

const CloseBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
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

const SignUpCenter = styled.div`
  width: 100%;
  height: 650px;
  position: absolute;
  bottom: 0;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SingUpTitle = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: #189cc4;
  font-weight: 700;
`;

const SingUpError = styled.div`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  color: #ff735d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

const SignUpButton = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #189cc4;
  margin-top: 20px;
  border: none;
  color: #fff;
  transition: 0.4s all;
  &:hover {
    background-color: #ff735d;
    letter-spacing: 0.2rem;
  }
`;

// 사진 프리뷰 타입지정
type ProfilePics = {
  file: string;
  previewURL: any | string;
};

const InfoEdit = ({ myinfo, handleModalClose }: any) => {
  const {
    id,
    name,
    email,
    nick,
    phone,
    level,
    currentExp,
    maxExp,
    profileImgPath,
    profileText,
  } = myinfo;

  const FileUpload = styled.label`
    display: block;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    position: relative;
    /* border: 1px solid red; */
    overflow: hidden;
    background-image: url("icon/profile-01.svg");
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    & input[type="file"] {
      display: none;
    }
  `;

  const PreviewImg = styled.img`
    object-fit: cover;
    height: 100%;
  `;

  const [userImg, setUserImg] = useState<string>("");
  const [userNick, setUserNick] = useState<string>(nick);
  const [userPhone, setUserPhone] = useState<string>(phone);
  const [myText, setMytext] = useState<string>(profileText);
  const [password, setPassword] = useState<string>("");
  const [errMessage, setErrMessage] =
    useState<string>("개인정보 수정 페이지입니다 :)");

  useEffect(() => {
    if (password.length < 4) {
      setErrMessage(
        "비밀번호를 다시 확인해주세요! 소셜로그인 하신 분은 0000 입니다 :)"
      );
    } else {
      setErrMessage("개인정보 수정 페이지입니다 :)");
    }
  }, [password]);

  // 프리뷰 상태
  const [uploadImg, setUploadImg] = useState<ProfilePics>();

  // 회원가입시 프로필사진 프리뷰
  const handlePreviewChange = (event: any) => {
    event.preventDefault();
    let reader = new FileReader();

    if (event.target.files[0] !== undefined) {
      setUserImg(event.target.files[0]);
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

  // 이미지 변경시 프리뷰 삭제 함수
  const deleteUploadImg = () => {
    setUploadImg(undefined);
    setUserImg(profileImgPath);
  };

  // 데이터 변화 감지
  const handleUserNick = (e: any) => {
    setUserNick(e.target.value);
  };
  const handleUserPhone = (e: any) => {
    setUserPhone(e.target.value);
  };
  const handleMyText = (e: any) => {
    setMytext(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  // 서버단에 데이터 전송
  const formData = new FormData();
  const token = sessionStorage.getItem("access_token");

  const handleSubmit = async () => {
    if (password === "") {
      setErrMessage(
        "비밀번호를 다시 확인해주세요! 소셜로그인 하신 분은 0000 입니다 :)"
      );
    } else {
      if (userImg === "") {
        // 이미지없이 변화 요청
        await axios
          .post(process.env.REACT_APP_DOAMIN_URL + "/user/changeinfo", {
            access_token: token,
            nick: userNick,
            phone: userPhone,
            profileText: myText,
            password: password,
          })
          .then((res) => {
            alert("정보수정이 되었습니다! 마이페이지로 이동합니다 :)");
            window.location.replace("https://liteseoul.com/mypage");
          })
          .catch((err) => {
            alert("비밀번호가 맞지않아요!");
          });
      }
      // 이미지포함 변화 요청
      if (userImg !== "" || userImg !== undefined) {
        formData.append("UserImg", userImg);
        if (token !== null) {
          formData.append("access_token", token);
        }
        formData.append("nick", userNick);
        formData.append("phone", userPhone);
        formData.append("profileText", myText);
        formData.append("password", password);

        await axios
          .post(process.env.REACT_APP_DOAMIN_URL + "/user/update", formData)
          .then((res) => {
            alert("정보수정이 되었습니다! 마이페이지로 이동합니다 :)");
            setUploadImg({
              file: "",
              previewURL: "",
            });
            setUserImg("");
            window.location.replace("https://liteseoul.com/mypage");
          })
          .catch((err) => {
            alert("비밀번호가 맞지않아요!");
          });
      }
    }
  };

  return (
    <SinUpOut>
      <SignUpMain>
        <CloseBtn onClick={handleModalClose}></CloseBtn>
        <SignUpCenter>
          <SingUpTitle>LiteSeoul</SingUpTitle>
          <SingUpError>{errMessage}</SingUpError>
          <form className="EditForm" onSubmit={(e) => e.preventDefault()}>
            <FileUpload htmlFor="file" onChange={handlePreviewChange}>
              {uploadImg !== undefined ? (
                <PreviewImg
                  src={uploadImg.previewURL}
                  alt="프사"
                  onClick={deleteUploadImg}
                ></PreviewImg>
              ) : (
                <input
                  id="file"
                  className="UserImg"
                  name="UserImg"
                  type="file"
                  accept=".jpg, .jpeg, .png, .gif"
                />
              )}
            </FileUpload>
            <div>{email}</div>
            <input
              className="EditNickName"
              type="text"
              placeholder={nick || "* NickName"}
              onChange={handleUserNick}
            ></input>
            <input
              className="EditPhone"
              type="tel"
              placeholder={phone || "* Mobile Phone"}
              onChange={handleUserPhone}
            ></input>
            <input
              className="EditText"
              type="text"
              placeholder={profileText || "* 상태메시지를 입력해주세요"}
              onChange={handleMyText}
            ></input>
            <input
              className="EditPassword"
              type="password"
              placeholder="기존 비밀번호로 확인해주세요"
              onChange={handlePassword}
            ></input>
            <SignUpButton type="submit" onClick={handleSubmit}>
              Edit
            </SignUpButton>
            {/* </SignUpForm> */}
          </form>
        </SignUpCenter>
      </SignUpMain>
    </SinUpOut>
  );
};

export default InfoEdit;
