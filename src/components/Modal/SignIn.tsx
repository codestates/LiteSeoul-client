import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import dotenv from "dotenv";
dotenv.config();

const SingInOut = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #000000b3;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const SignMain = styled.div`
  width: 900px;
  height: 600px;
  position: relative;

  @media screen and (max-width: 960px) {
    width: 400px;
    height: 600px;
    position: relative;
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
  flex-direction: column;
  & li {
    width: 300px;
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s all;
  }
  & li:nth-child(1) {
    width: 300px;
    height: 150px;
    flex-direction: column;
    color: #fff;
    & p:nth-child(1) {
      color: #189cc4;
      font-size: 3.8rem;
      font-weight: 700;
    }
    & p:nth-child(2) {
      color: #86868b;
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
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    cursor: pointer;
    position: relative;
    color: #374957;
    box-shadow: inset 0 0 0 2px #cfd9e0;
    & img {
      width: 38px;
      height: 38px;
      position: absolute;
      left: 5px;
    }
    &:hover {
      box-shadow: inset 0 0 0 2px #999;
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

function SignIn(props: any) {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");

  // ?????????????????? ?????? ?????????
  const kakaoLogin = () => {
    const url = new URL(window.location.href);
    const _hostName = "https://kauth.kakao.com";
    const _restApiKey = process.env.REACT_APP_KAKAO_CLIETN_ID;
    const _redirectUrl = "https://liteseoul.com/"


    window.location.assign(
      `${_hostName}/oauth/authorize?client_id=${_restApiKey}&redirect_uri=${_redirectUrl}&response_type=code`
    );
  };

  // ??????????????? ?????? ?????????
  const googleLogin = () => {
    const host_name = "https://accounts.google.com";
    const redirect_uri = process.env.REACT_APP_DOAMIN_URL;
    const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    window.location.assign(
      `${host_name}/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=${redirect_uri}%2Fgoogle%2Fauth%2Fgoogle%2Fcallback&scope=email%20profile&client_id=${client_id}&flowName=GeneralOAuthFlow`
    );
  };

  const handleAccount = () => {
    props.handleSignUp();
    props.handleLoginModal();
  };

  const handleId = (e: any) => {
    setId(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  // ??????????????? ????????? ??????????????? ??? ????????? ?????? ??????????????????
  const LoginBtn = () => {
    if (id === "") {
      setErrMessage("???????????? ??????????????????");
    } else if (password === "") {
      setErrMessage("??????????????? ??????????????????");
    } else {

      // ??????????????? ????????? ?????? ??????
      axios
        .post(
          process.env.REACT_APP_DOAMIN_URL + "/user/signin",
          {
            email: id,
            password: password,
          }
        )
        .then((res) => {
          sessionStorage.setItem("access_token", res.data.access_token);
          sessionStorage.setItem("id", res.data.payload.id)
          window.location.replace("https://liteseoul.com/");
        })
        .catch(() => {
          setErrMessage("???????????? ??????????????? ??????????????????");
        });
    }
  }

  return (
    <SingInOut>
      <form onSubmit={(e) => e.preventDefault()}>
        <SignMain>
          <CloseBtn onClick={props.handleLoginModal}></CloseBtn>
          <SignCenter>
            <SignInImg>
              <Img></Img>
              <Text>
                ??????, ?????? ????????? ????????? ?????? ????????? ????????? ???????????????.
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
              <li onClick={kakaoLogin}></li>
              <li onClick={googleLogin}>
                <img
                  src="/img/btn_google_light_normal_ios.svg"
                  alt="google"
                ></img>
                Sign in with Google
              </li>
              <li onClick={LoginBtn}>?????????</li>
              <li>
                <div onClick={handleAccount}>
                  <p>Create Account</p>
                </div>
              </li>
            </SignInInput>
          </SignCenter>
        </SignMain>
      </form>
    </SingInOut>
  );
}

export default SignIn;
