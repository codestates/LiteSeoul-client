import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import styled from "styled-components";
import "../../App.css";

// styled-components로 모달창 css 관리
const SinUpOut = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000b3;
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
  /* background-color: yellow; */
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
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
`;
const SignUpForm = styled.form`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

// 이 스타일드 컴포넌트 엘리먼트를 함수 안으로 끌고와서, 백그라운드 이미지 쪽을 if문으로 분기 나눈 다음 업로드 된 이미지를 렌더링 하면 될거 같음.
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

const SignUpName = styled.input.attrs({
  type: "text",
  placeholder: "* Name",
})`
  width: 100%;
  border: none;
  height: 50px;
  border-bottom: 2px solid #189cc4;
  outline: none;
  text-indent: 10px;
  &:focus {
    border-bottom: 2px solid #ff735d;
  }
`;

const SignUpEmail = styled.input.attrs({
  type: "email",
  placeholder: "* Email",
})`
  width: 100%;
  border: none;
  height: 50px;
  border-bottom: 2px solid #189cc4;
  outline: none;
  text-indent: 10px;
  &:focus {
    border-bottom: 2px solid #ff735d;
  }
`;

const SignUpNickName = styled.input.attrs({
  type: "text",
  placeholder: "* NickName",
})`
  width: 100%;
  border: none;
  height: 50px;
  border-bottom: 2px solid #189cc4;
  outline: none;
  text-indent: 10px;
  &:focus {
    border-bottom: 2px solid #ff735d;
  }
`;

const SignUpPhone = styled.input.attrs({
  type: "tel",
  placeholder: "* Phone",
})`
  width: 100%;
  border: none;
  height: 50px;
  border-bottom: 2px solid #189cc4;
  outline: none;
  text-indent: 10px;
  &:focus {
    border-bottom: 2px solid #ff735d;
  }
`;

const SignUpPassword = styled.input.attrs({
  type: "password",
  placeholder: "* Password",
})`
  width: 100%;
  border: none;
  height: 50px;
  border-bottom: 2px solid #189cc4;
  outline: none;
  text-indent: 10px;
  &:focus {
    border-bottom: 2px solid #ff735d;
  }
`;

const SignUpCheckBox = styled.div`
  width: 100%;
  height: 40px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;

const SignUpButton = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #189cc4;
  border: none;
  color: #fff;
  transition: 0.4s all;
  &:hover {
    background-color: #ff735d;
    letter-spacing: 0.2rem;
  }
`;

// 타입스크립트 관련 타입지정
type IFormInput = {
  UserImg: any;
  UserName: string;
  UserEmail: string;
  UserNickname: string;
  UserMobile: string;
  Password: string;
  Password2: string;
  Checkbox: boolean;
};

// 사인업 함수 본문
const SignUp = (props: any) => {
  // react-hook-from 메소드 useForm
  console.log(props);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  // 제출과 에러 핸들링
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const formData = new FormData();
    // formData.append("charset", "UTF-8")
    formData.append("UserImg", data.UserImg[0]);
    formData.append("name", data.UserName);
    formData.append("phone", data.UserMobile);
    formData.append("email", data.UserEmail);
    formData.append("nick", data.UserNickname);
    formData.append("password", data.Password);

    axios
      .post(
        "http://ec2-3-142-145-100.us-east-2.compute.amazonaws.com/user/signup",
        formData,
        {
          headers: {
            "Content-type": "charset=UTF-8",
          },
        }
      )
      .then((res) => {
        window.location.replace("http://localhost:3000/");
      });
  };
  const onError: SubmitErrorHandler<IFormInput> = (data) => console.log(data);

  // 회원가입버튼 작동여부 확인 함수
  const createHandle = (e: any) => console.log("hello");

  const handleCLose = () => {
    props.handleSignUp();
  };

  // 회원가입시 프로필사진 프리뷰
  type ProfilePics = {
    file: string;
    previewURL: any | string;
  };

  const [uploadImg, setUploadImg] = useState<ProfilePics>();

  const handleFileOnChange = (event: any) => {
    event.preventDefault();
    let reader = new FileReader();

    if (event.target.files[0] !== undefined) {
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

  // 리턴 내부에서 모달창 생성 및 유효성검사와 인풋창 한번에 관리
  return (
    <SinUpOut id="Signup">
      <SignUpMain>
        <CloseBtn onClick={handleCLose}></CloseBtn>
        <SignUpCenter>
          <SingUpTitle>LiteSeoul</SingUpTitle>
          <SingUpError>
            {errors.UserImg
              ? "프로필 사진을 지정해주세요 :)"
              : errors.UserName
              ? "이름을 입력해주세요 :)"
              : errors.UserEmail
              ? "이메일을 입력해주세요 :)"
              : errors.UserNickname
              ? "닉네임은 4글자 이상 8글자 이하 영문이나 숫자로 입력해주세요 :)"
              : errors.UserMobile
              ? "휴대폰 번호를 입력해주세요 :) 대쉬('-')는 안쓰셔도 돼요!"
              : errors.Password
              ? "비밀번호는 영어와 숫자를 조합해주세요 :)"
              : errors.Checkbox
              ? "이용약관에 동의해주세요 :)"
              : "깨끗한 서울을 위해 LiteSeoul에 동참해주세요!"}
          </SingUpError>
          <SignUpForm
            onSubmit={handleSubmit(onSubmit)}
            onError={handleSubmit(onError)}
          >
            {/* 이미지업로드 */}
            <FileUpload htmlFor="file" onChange={handleFileOnChange}>
              {uploadImg !== undefined ? (
                <PreviewImg
                  src={uploadImg.previewURL}
                  alt="프사"
                  onClick={deleteUploadImg}
                ></PreviewImg>
              ) : (
                <input
                  id="file"
                  type="file"
                  accept=".jpg, .jpeg, .png, .gif"
                  {...register("UserImg", {
                    required: true,
                  })}
                />
              )}
            </FileUpload>
            <SignUpName
              {...register("UserName", {
                required: true,
                maxLength: 20,
                pattern: {
                  value: /^[a-zA-Z0-9]{4,8}$/,
                  message: "이름을 입력해주세요 :)",
                },
              })}
            ></SignUpName>
            <SignUpEmail
              {...register("UserEmail", {
                required: true,
                pattern:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              })}
            ></SignUpEmail>
            <SignUpNickName
              {...register("UserNickname", {
                required: true,
                pattern: /^[a-zA-Z0-9]{4,8}$/,
              })}
            ></SignUpNickName>
            <SignUpPhone
              {...register("UserMobile", {
                required: true,
                pattern: /^\d{3}\d{3,4}\d{4}$/,
              })}
            ></SignUpPhone>
            <SignUpPassword
              {...register("Password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "8자 이상으로 영문+숫자로 조합하셔야 해요!",
                },
                maxLength: {
                  value: 15,
                  message: "15자 이내로 입력하셔야 해요!",
                },
                pattern: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/,
              })}
            ></SignUpPassword>
            <SignUpCheckBox>
              <input
                type="Checkbox"
                id="signupCk"
                // onChange={(e) => {
                //   console.log(e.target.checked);
                // }}
                {...register("Checkbox", {
                  required: true,
                })}
              />
              <label htmlFor="signupCk">{" LiteSeoul에서의 개인정보 활용에 동의합니다."}</label>
            </SignUpCheckBox>
            <SignUpButton type="submit">CREATE ACCOUNT</SignUpButton>
          </SignUpForm>
        </SignUpCenter>
      </SignUpMain>
    </SinUpOut>
  );
};

export default SignUp;
