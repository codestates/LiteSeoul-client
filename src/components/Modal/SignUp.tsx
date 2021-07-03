import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import styled from "styled-components";
import "../../App.css";

// styled-components로 모달창 css 관리
const PlayModal = styled.div`
  width: 100%;
  height: 250%;
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
  height: 500px;
  margin: auto;
  padding: 50px 50px 100px 50px;
  position: relative;
  background-color: white;
  border-radius: 10px;
`;

const FileUpload = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100px;
  position: relative;
  border: 4px solid #ffffff;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #2590eb 50%, #ffffff 50%);
  background-size: 100% 200%;
  transition: all 1s;
  color: #ffffff;
  font-size: 100px;

  input[type="file"] {
    height: 200px;
    width: 200px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }

  &:hover {
    background-position: 0 -100%;
    color: #2590eb;
  }
`;

// 타입스크립트 관련 타입지정
type IFormInput = {
  UserImg?: File;
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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  // 제출과 에러 핸들링
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const onError: SubmitErrorHandler<IFormInput> = (data) => console.log(data);

  // 이미지를 업로드 후 실시간 렌더링 가능하지 않을까?
  const [image, setImage] = useState<File>();

  // 리턴 내부에서 모달창 생성 및 유효성검사와 인풋창 한번에 관리
  return (
    <PlayModal>
      <div
        className="ModalCloseBtn"
        onClick={() =>
          // window.history.back()
          props.handleModalClose
        }
      >
        X
      </div>
      <PlayModalInside>
        <div className="SignUpTitle">LiteSeoul</div>
        <div className="errorMessages">
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
        </div>
        <form
          className="inputs"
          onSubmit={handleSubmit(onSubmit)}
          onError={handleSubmit(onError)}
        >
          <div className="ImgFlex">
            <FileUpload>
              <input
                className="UserImg"
                type="file"
                accept=".jpg, .jpeg, .png"
                {...register("UserImg", {
                  required: true,
                })}
              />
            </FileUpload>
          </div>
          <div className="ErrorMessage"></div>
          <input
            className="UserName"
            type="text"
            placeholder="* Name"
            {...register("UserName", {
              required: true,
              maxLength: 20,
              pattern: {
                value: /^[a-zA-Z0-9]{4,8}$/,
                message: "이름을 입력해주세요 :)",
              },
            })}
          />
          <input
            className="UserEmail"
            type="email"
            placeholder="* Email"
            {...register("UserEmail", {
              required: true,
              pattern:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            })}
          />
          <input
            className="UserNickname"
            type="text"
            placeholder="* Nickname"
            {...register("UserNickname", {
              required: true,
              pattern: /^[a-zA-Z0-9]{4,8}$/,
            })}
          />
          <input
            className="UserMobile"
            type="tel"
            placeholder="* Phone"
            {...register("UserMobile", {
              required: true,
              pattern: /^\d{3}\d{3,4}\d{4}$/,
            })}
          />
          <input
            className="password"
            type="password"
            placeholder="* Password"
            {...register("Password", {
              required: true,
              minLength: {
                value: 8,
                message: "8자 이상으로 영문+숫자+특수문자 조합하셔야 해요!",
              },
              maxLength: {
                value: 15,
                message: "15자 이내로 입력하셔야 해요!",
              },
              pattern: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/,
            })}
          />
          <div className="SignUpCheckbox">
            <input
              type="Checkbox"
              // onChange={(e) => {
              //   console.log(e.target.checked);
              // }}
              {...register("Checkbox", {
                required: true,
              })}
            />
            이용약관에 동의합니다
          </div>
          <input
            className="SignUpButton"
            type="submit"
            value={"CREATE ACCOUNT"}
          />
        </form>
      </PlayModalInside>
    </PlayModal>
  );
};

export default SignUp;
