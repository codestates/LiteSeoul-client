import React from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import dummyMyInfo from '../documents/dummyMyInfo';
import mememe from '../image/mememe.png';

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
  background-image: url('/icon/close.svg');
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1);
    background-image: url('/icon/close2.svg');
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

const FileUpload = styled.label`
  display: block;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  position: relative;
  /* border: 1px solid red; */
  overflow: hidden;
  background-image: url('icon/profile-01.svg');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  & input[type='file'] {
    display: none;
  }
`;

const SignUpNickName = styled.input.attrs({
  type: 'text',
  placeholder: '* NicName',
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
  type: 'tel',
  placeholder: '* Phone',
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
  type: 'password',
  placeholder: '* Password',
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

// 타입스크립트 관련 타입지정
type EditFormInput = {
  UserImg?: File;
  UserName: string;
  UserEmail: string;
  UserNickname: string;
  UserMobile: string;
  Password: string;
};

const InfoEdit = ({ MyInfo, handleModalClose }: any) => {
  console.log(MyInfo);
  const { id, name, email, nickname, phone, level, expnow, expall } = MyInfo;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EditFormInput>();

  const onSubmit: SubmitHandler<EditFormInput> = (data) => console.log(data);
  const onError: SubmitErrorHandler<EditFormInput> = (data) =>
    console.log(data);

  return (
    <SinUpOut>
      <SignUpMain>
        <CloseBtn onClick={handleModalClose}></CloseBtn>
        <SignUpCenter>
          <SingUpTitle>LiteSeoul</SingUpTitle>
          <SingUpError>
            {errors.Password
              ? '확인을 위해 기존 비밀번호를 입력해주세요 :)'
              : '개인정보 수정화면입니다.'}
          </SingUpError>
          <SignUpForm
            onSubmit={handleSubmit(onSubmit)}
            onError={handleSubmit(onError)}
          >
            <FileUpload htmlFor="file">
              <input
                className="UserImg"
                type="file"
                accept=".jpg, .jpeg, .png"
                {...register('UserImg', {
                  required: false,
                })}
              />
            </FileUpload>

            <div>{email}</div>

            <SignUpNickName
              {...register('UserNickname', {
                required: true,
                pattern: /^[a-zA-Z0-9]{4,8}$/,
              })}
            ></SignUpNickName>
            <SignUpPhone
              {...register('UserMobile', {
                required: true,
                pattern: /^\d{3}\d{3,4}\d{4}$/,
              })}
            ></SignUpPhone>
            <SignUpPassword
              {...register('Password', {
                required: true,
                minLength: {
                  value: 8,
                  message: '8자 이상으로 영문+숫자+특수문자 조합하셔야 해요!',
                },
                maxLength: {
                  value: 15,
                  message: '15자 이내로 입력하셔야 해요!',
                },
                pattern: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/,
              })}
            ></SignUpPassword>

            <SignUpButton type="submit">Edit</SignUpButton>
          </SignUpForm>
        </SignUpCenter>
      </SignUpMain>
    </SinUpOut>
  );
};

export default InfoEdit;
