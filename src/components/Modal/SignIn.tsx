import { defaultMaxListeners } from "events";
import React, { useState } from "react";
import styled from "styled-components";
import SignUp from "./SignUp";

const SingInOut = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #000000b3;
  /* opacity: 0.6; */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const SignMain = styled.div`
  width: 900px;
  height: 600px;
  /* border: 1px solid #fff; */
  position: relative;
  @media screen and (max-width: 960px) {
    width: 400px;
    height: 600px;
    position: relative;
    /* border: 1px solid red; */
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

const SignCenter = styled.div`
  position: absolute;
  width: 900px;
  height: 550px;
  background: #fff;
  bottom: 0;
  border-radius: 20px;
  display: flex;
  @media screen and (max-width: 960px) {
    width: 400px;
    height: 550px;
    background: #fff;
    bottom: 0;
    border-radius: 20px;
    display: flex;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  }
`;
const SignInImg = styled.div`
  width: 55%;
  height: 100%;
  background-color: #189cc4;
  border-radius: 20px 0px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Img = styled.div`
  width: 350px;
  height: 350px;
  background-color: #fff;
  border-radius: 50%;
  margin-bottom: 20px;
  background-image: url("/img/login_imge.svg");
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Text = styled.p`
  width: max-content;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Logo = styled.div`
  width: 150px;
  height: 40px;
  /* border: 1px solid #fff; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
`;

const SignInInput = styled.ul`
  width: 45%;
  height: 100%;
  border-radius: 0px 20px 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: red; */
  flex-direction: column;
  & li {
    width: 300px;
    height: 40px;
    /* border: 1px solid #fff; */
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s all;
  }
  & li:nth-child(1) {
    width: 300px;
    height: 150px;
    /* border: 1px solid #fff; */
    flex-direction: column;
    color: #fff;
    & p:nth-child(1) {
      color: #189cc4;
      font-size: 3.8rem;
      font-weight: 700;
    }
    & p:nth-child(2) {
      color: #86868b;
      /* color: #1d1d1f; */
      font-size: 1.2rem;
      font-weight: 700;
    }
  }
  & li:nth-child(4) {
    background-image: url("img/kakao_login.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #000000;
    cursor: pointer;
    &:hover {
      letter-spacing: 0.2rem;
    }
  }
  & li:nth-child(5) {
    color: #000000;
    border: 1px solid #86868b;
    cursor: pointer;
    &:hover {
      letter-spacing: 0.2rem;
    }
  }
  & li:nth-child(6) {
    background: #189cc4;
    color: #fff;
    cursor: pointer;
    &:hover {
      letter-spacing: 0.2rem;
    }
  }
  & li:nth-child(7) {
    margin-top: 30px;
    width: 150px;
    height: auto;
    & p {
      color: #189cc4;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      text-decoration: underline 2px solid #189cc4;
    }
  }
  @media screen and (max-width: 960px) {
    width: 400px;
    height: 550px;
  }
`;

const InputId = styled.input.attrs({
  type: "text",
  placeholder: "Email",
})`
  width: 100%;
  height: 100%;
  text-indent: 20px;
  border: 3px solid #189cc4;
  &::placeholder {
    color: #86868b;
  }
  &:focus {
    outline: none;
    border: 3px solid #ff735d;
  }
`;

const InputPassword = styled.input.attrs({
  type: "password",
  placeholder: "Password",
})`
  width: 100%;
  height: 100%;
  border: 3px solid #189cc4;
  text-indent: 20px;
  &::placeholder {
    color: #86868b;
  }
  &:focus {
    outline: none;
    border: 3px solid #ff735d;
  }
`;

// type SigninProps = {
//   handleModal: () => void;
//   isModal: boolean;
// };

function SignIn(props: any) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const [show, setShow] = useState(false);

  const handleModalClose = (e: any) => {
    const currentClass = e.target.className;
    if (
      currentClass === "ModalCloseBtn" ||
      currentClass === "modal-background"
    ) {
      setShow(false);
    }
    return;
  };

  const handleModalOpen = () => {
    setShow(true);
  };

  const handleId = (e: any) => {
    setId(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const LoginBtn = () => {
    if (id !== "" && password !== "") {
      console.log(id, password);
      console.log("로그인완료");
      setErrMessage("");
    } else {
      setErrMessage("아이디와 패스워드를 확인하세요");
    }
  };

  return (
    <SingInOut>
      {/* {errMessage === '' ? <></> : <ErrorMessage>{errMessage}</ErrorMessage>} */}

     { show === false ? (<form onSubmit={(e) => e.preventDefault()}>
        <SignMain>
          <CloseBtn onClick={props.handleLoginModal}></CloseBtn>
          <SignCenter>
            <SignInImg>
              <Img></Img>
              <Text>
                지금, 아픈 지구를 살리기 위해 당신의 손길이 필요합니다.
              </Text>
              <Logo>LiteSeoul</Logo>
            </SignInImg>
            <SignInInput>
              <li>
                {errMessage === "" ? (
                  <p>LiteSeoul</p>
                ) : (
                  <p
                    style={{
                      color: "red",
                      fontSize: "1.2rem",
                    }}
                  >
                    {errMessage}
                  </p>
                )}

                <p>User Login</p>
              </li>
              <li>
                <InputId autoFocus value={id} onChange={handleId} />
              </li>
              <li>
                <InputPassword value={password} onChange={handlePassword} />
              </li>
              <li></li>
              <li>Google Login</li>
              <li onClick={LoginBtn}>로그인</li>
              <li>
                <div onClick={handleModalOpen}>
                  <p>Create Account</p>
                </div>
              </li>
            </SignInInput>
          </SignCenter>
          xw
        </SignMain>
      </form>) : (
      <div hidden={!show}>
        <div className="modal-background" onClick={handleModalClose}>
          <div className="modal-card">
            <SignUp handleModalClose={handleModalClose} />
          </div>
        </div>
      </div>)}
    </SingInOut>
  );
}

export default SignIn;
