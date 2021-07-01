import React from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import dummyMyInfo from "../documents/dummyMyInfo";
import mememe from "../image/mememe.png";

const PlayModal = styled.div`
  width: 100%;
  height: 210%;
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
  height: 400px;
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
  /* background-image: linear-gradient(to bottom, #2590eb 50%, #ffffff 50%); */
  background-image: url(${mememe});
  background-size: 100%;
  background-position: center;
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
  console.log(MyInfo)
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
    <PlayModal>
      <div
        className="ModalCloseBtn"
        onClick={() =>
          // window.history.back()
          handleModalClose
        }
      >
        X
      </div>
      <PlayModalInside>
        <div className="SignUpTitle">LiteSeoul</div>
        <div className="errorMessages">
          {errors.Password
            ? "확인을 위해 기존 비밀번호를 입력해주세요 :)"
            : "개인정보 수정화면입니다."}
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
                  required: false,
                })}
              />
            </FileUpload>
          </div>
          <div className="ErrorMessage"></div>
          <div>{email}</div>
          <input
            className="UserName"
            type="text"
            placeholder={`${name}`}
            {...register("UserName", {
              required: false,
              maxLength: 20,
              pattern: {
                value: /^[a-zA-Z0-9]{4,8}$/,
                message: "이름을 입력해주세요 :)",
              },
            })}
          />
          <input
            className="UserNickname"
            type="text"
            placeholder={`${nickname}`}
            {...register("UserNickname", {
              required: false,
              pattern: /^[a-zA-Z0-9]{4,8}$/,
            })}
          />
          <input
            className="UserMobile"
            type="tel"
            placeholder={`${phone}`}
            {...register("UserMobile", {
              required: false,
              pattern: /^\d{3}\d{3,4}\d{4}$/,
            })}
          />
          <input
            className="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
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
          <input
            className="SignUpButton"
            type="submit"
            value={"개인정보를 수정합니다."}
          />
        </form>
      </PlayModalInside>
    </PlayModal>
  );
};

export default InfoEdit;
