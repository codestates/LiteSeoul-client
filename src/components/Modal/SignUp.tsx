import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import styled from "styled-components";
import "../../App.css";
import dotenv from 'dotenv';
dotenv.config();

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

const FileUpload = styled.label`
  display: block;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  position: relative;
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

// ?????????????????? ?????? ????????????
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


const SignUp = (props: any) => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  // ????????? ?????? ?????????
  const onSubmit: SubmitHandler<IFormInput> = (data) => {

    // ????????? ????????? ??? ????????? ??????
    const formData = new FormData();
    formData.append("UserImg", data.UserImg[0]);
    formData.append("name", data.UserName);
    formData.append("phone", data.UserMobile);
    formData.append("email", data.UserEmail);
    formData.append("nick", data.UserNickname);
    formData.append("password", data.Password);
    props.setLoading(true);

    // ???????????? ????????????
    axios
      .post(process.env.REACT_APP_DOAMIN_URL + "/user/signup", formData, {
        headers: {
          "Content-type": "charset=UTF-8",
        },
      })
      .then((res) => {
        props.setLoading(false);
        alert("??????????????? ?????????????????????????");
        window.location.replace("https://liteseoul.com/");
      });
  };
  const onError: SubmitErrorHandler<IFormInput> = (data) => console.log(data);

  const handleCLose = () => {
    props.handleSignUp();
  };

  // ??????????????? ????????? ??????
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

  // ?????? ???????????? ????????? ?????? ??? ?????????????????? ????????? ????????? ??????
  return (
    <SinUpOut id="Signup">
      <SignUpMain>
        <CloseBtn onClick={handleCLose}></CloseBtn>
        <SignUpCenter>
          <SingUpTitle>LiteSeoul</SingUpTitle>
          <SingUpError>
            {errors.UserImg
              ? "????????? ????????? ?????????????????? :)"
              : errors.UserName
              ? "????????? 4?????? ?????? 12?????? ?????? ???????????? ????????? ?????????????????? :)"
              : errors.UserEmail
              ? "???????????? ?????????????????? :)"
              : errors.UserNickname
              ? "???????????? 4?????? ?????? 12?????? ?????? ???????????? ????????? ?????????????????? :)"
              : errors.UserMobile
              ? "????????? ????????? ?????????????????? :) ??????('-')??? ???????????? ??????!"
              : errors.Password
              ? "??????????????? 8?????? ?????? 15?????? ?????? ????????? ????????? ?????????????????? :)"
              : errors.Checkbox
              ? "??????????????? ?????????????????? :)"
              : "????????? ????????? ?????? LiteSeoul??? ??????????????????!"}
          </SingUpError>
          <SignUpForm
            onSubmit={handleSubmit(onSubmit)}
            onError={handleSubmit(onError)}
          >
            {/* ?????????????????? */}
            <FileUpload htmlFor="file" onChange={handleFileOnChange}>
              {uploadImg !== undefined ? (
                <PreviewImg
                  src={uploadImg.previewURL}
                  alt="??????"
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
                pattern: /^[a-zA-Z0-9]{4,12}$/,
              
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
                pattern: /^[a-zA-Z0-9]{4,12}$/,
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
                  message: "8??? ???????????? ??????+????????? ??????????????? ??????!",
                },
                maxLength: {
                  value: 15,
                  message: "15??? ????????? ??????????????? ??????!",
                },
                pattern: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/,
              })}
            ></SignUpPassword>
            <SignUpCheckBox>
              <input
                type="Checkbox"
                id="signupCk"
                {...register("Checkbox", {
                  required: true,
                })}
              />
              <label htmlFor="signupCk">
                {" LiteSeoul????????? ???????????? ????????? ???????????????."}
              </label>
            </SignUpCheckBox>
            <SignUpButton type="submit">CREATE ACCOUNT</SignUpButton>
          </SignUpForm>
        </SignUpCenter>
      </SignUpMain>
    </SinUpOut>
  );
};

export default SignUp;
