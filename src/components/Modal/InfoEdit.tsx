// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
// import styled from "styled-components";
// import dummyMyInfo from "../documents/dummyMyInfo";
// import mememe from "../image/mememe.png";

// const SinUpOut = styled.div`
//   width: 100%;
//   height: 100%;
//   z-index: 999;
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   inset: 0;
// `;

// const SignUpMain = styled.div`
//   width: 500px;
//   height: 700px;
//   /* background-color: yellow; */
//   position: relative;
//   @media screen and (max-width: 600px) {
//     width: 400px;
//   }
// `;
// const CloseBtn = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   position: absolute;
//   right: 0;
//   cursor: pointer;
//   transition: 0.2s all;
//   background-image: url("/icon/close.svg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   &:hover {
//     transform: scale(1.1);
//     background-image: url("/icon/close2.svg");
//   }
// `;

// const SignUpCenter = styled.div`
//   width: 100%;
//   height: 650px;
//   position: absolute;
//   bottom: 0;
//   background-color: white;
//   border-radius: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const SingUpTitle = styled.div`
//   width: 100%;
//   height: 60px;
//   /* border: 1px solid red; */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 3.5rem;
//   color: #189cc4;
//   font-weight: 700;
// `;
// const SingUpError = styled.div`
//   width: 100%;
//   height: 40px;
//   font-size: 1rem;
//   color: #ff735d;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: 700;
//   /* border: 1px solid red; */
// `;

// const SignUpForm = styled.form`
//   display: flex;
//   width: 70%;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   @media screen and (max-width: 600px) {
//     width: 80%;
//   }
// `;

// const SignUpButton = styled.button`
//   width: 100%;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #189cc4;
//   margin-top: 20px;
//   border: none;
//   color: #fff;
//   transition: 0.4s all;
//   &:hover {
//     background-color: #ff735d;
//     letter-spacing: 0.2rem;
//   }
// `;

// // 타입스크립트 관련 타입지정
// type EditFormInput = {
//   UserImg: any;
//   UserName: string;
//   UserNickname: string;
//   UserMobile: string;
//   profileText: string;
//   Password: string;
// };

// type ProfilePics = {
//   file: string;
//   previewURL: any | string;
// };

// const InfoEdit = ({ myinfo, handleModalClose }: any) => {
//   console.log(myinfo);
//   const {
//     id,
//     name,
//     email,
//     nick,
//     phone,
//     level,
//     currentExp,
//     maxExp,
//     profileImgPath,
//     profileText,
//   } = myinfo;

//   const FileUpload = styled.label`
//     display: block;
//     height: 150px;
//     width: 150px;
//     border-radius: 50%;
//     position: relative;
//     /* border: 1px solid red; */
//     overflow: hidden;
//     background-image: url("icon/profile-01.svg");
//     background-repeat: no-repeat;
//     background-size: cover;
//     cursor: pointer;

//     & input[type="file"] {
//       display: none;
//     }
//   `;

//   const EditNickName = styled.input.attrs({
//     type: "text",
//     placeholder: nick || "* NickName",
//   })`
//     width: 100%;
//     border: none;
//     height: 50px;
//     border-bottom: 2px solid #189cc4;
//     outline: none;
//     text-indent: 10px;
//     &:focus {
//       border-bottom: 2px solid #ff735d;
//     }
//   `;

//   const EditPhone = styled.input.attrs({
//     type: "tel",
//     placeholder: phone || "* Mobile Phone",
//   })`
//     width: 100%;
//     border: none;
//     height: 50px;
//     border-bottom: 2px solid #189cc4;
//     outline: none;
//     text-indent: 10px;
//     &:focus {
//       border-bottom: 2px solid #ff735d;
//     }
//   `;

//   const EditText = styled.input.attrs({
//     type: "text",
//     placeholder: profileText || "* 상태메시지를 입력해주세요",
//   })`
//     width: 100%;
//     border: none;
//     height: 50px;
//     border-bottom: 2px solid #189cc4;
//     outline: none;
//     text-indent: 10px;
//     &:focus {
//       border-bottom: 2px solid #ff735d;
//     }
//   `;

//   const SignUpPassword = styled.input.attrs({
//     type: "password",
//     placeholder: "기존 비밀번호로 확인해주세요",
//   })`
//     width: 100%;
//     border: none;
//     height: 50px;
//     border-bottom: 2px solid #189cc4;
//     outline: none;
//     text-indent: 10px;
//     &:focus {
//       border-bottom: 2px solid #ff735d;
//     }
//   `;

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm<EditFormInput>();

//   const [userImg, setUserImg] = useState("");
//   const [userNick, setUserNick] = useState(nick);
//   const [userPhone, setUserPhone] = useState(phone);
//   const [uploadImg, setUploadImg] = useState<ProfilePics>();
//   const [myText, setMytext] = useState(profileText);

//   const onSubmit: SubmitHandler<EditFormInput> = (data) => {
//     // 실제 데이터 입력값 나오는지 확인
//     console.log(data);

//     const formData = new FormData();
//     const token = sessionStorage.getItem("access_token");
//     // setUserImg(data.UserImg[0]);
//     // setMytext(data.profileText);
//     // setUserPhone(data.UserMobile);
//     // setUserNick(data.UserNickname);

//     // formData.append("UserImg", userImg);
//     // if (token !== null) {
//     //   formData.append("access_token", token);
//     // }
//     // formData.append("nick", userNick);
//     // formData.append("phone", userPhone);
//     // formData.append('profileText', myText)
//     // formData.append("password", data.Password);

//     // axios
//     //   .post(
//     //     "http://ec2-3-142-145-100.us-east-2.compute.amazonaws.com/user/update",
//     //     formData
//     //   )
//     //   .then((res) => {
//     //     console.log(res);
//     //     // window.location.replace("http://localhost:3000/mypage/");
//     //     // handleModalClose()
//     //   })
//     //   .catch((err) => {
//     //     alert("비밀번호가 맞지않아요!");
//     //   });

//     // 데이터 스테이트 수정
//     // 이미지 변화가 있으면~
//     if (data.UserImg[0]) {
//       setUserImg(data.UserImg[0]);
//       setMytext(data.profileText);
//       setUserPhone(data.UserMobile);
//       setUserNick(data.UserNickname);

//       formData.append("UserImg", userImg);
//       if (token !== null) {
//         formData.append("access_token", token);
//       }
//       formData.append("nick", userNick);
//       formData.append("phone", userPhone);
//       formData.append('profileText', myText)
//       formData.append("password", data.Password);

//       axios
//         .post(
//           "http://ec2-3-142-145-100.us-east-2.compute.amazonaws.com/user/update",
//           formData
//         )
//         .then((res) => {
//           console.log(res);
//           // window.location.replace("http://localhost:3000/mypage/");
//           // handleModalClose()
//         })
//         // .catch((err) => {
//         //   alert("비밀번호가 맞지않아요!");
//         // });
//     }
//     //  else {
//     //   //이미지 변화가 없으면~
//   //   axios
//   //     .post(
//   //       "http://ec2-3-142-145-100.us-east-2.compute.amazonaws.com/user/changeinfo",
//   //       {
//   //         access_token: token,
//   //         nick: userNick,
//   //         phone: userPhone,
//   //         profileText: myText,
//   //         password: data.Password,
//   //       }
//   //     )
//   //     .then((res) => {
//   //       console.log(res);
//   //       // window.location.replace("http://localhost:3000/mypage/");
//   //       // handleModalClose()
//   //     })
//   //     .catch((err) => {
//   //       alert("비밀번호가 맞지않아요!");
//   //     });
//   // }
// };
//   const onError: SubmitErrorHandler<EditFormInput> = (data) =>
//     console.log(data);

//   // 회원가입시 프로필사진 프리뷰
//   const handleFileOnChange = (event: any) => {
//     event.preventDefault();
//     let reader = new FileReader();

//     if (event.target.files[0] !== undefined) {
//       const file = event.target.files[0];
//       reader.onloadend = () => {
//         setUploadImg({
//           file,
//           previewURL: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const deleteUploadImg = () => {
//     setUploadImg(undefined);
//     setUserImg(profileImgPath);
//   };

//   return (
//     <SinUpOut>
//       <SignUpMain>
//         <CloseBtn onClick={handleModalClose}></CloseBtn>
//         <SignUpCenter>
//           <SingUpTitle>LiteSeoul</SingUpTitle>
//           <SingUpError>
//             {errors.Password
//               ? "확인을 위해 기존 비밀번호를 입력해주세요 :)"
//               : "개인정보 수정화면입니다."}
//           </SingUpError>
//           <SignUpForm
//             onSubmit={handleSubmit(onSubmit)}
//             onError={handleSubmit(onError)}
//           >
//             <FileUpload htmlFor="file" onChange={handleFileOnChange}>
//               {uploadImg !== undefined ? (
//                 <img
//                   src={uploadImg.previewURL}
//                   alt="프사"
//                   onClick={deleteUploadImg}
//                 ></img>
//               ) : (
//                 <input
//                   id="file"
//                   className="UserImg"
//                   type="file"
//                   accept=".jpg, .jpeg, .png, .gif"
//                   {...register("UserImg", {
//                     required: false,
//                   })}
//                 />
//               )}
//             </FileUpload>

//             <div>{email}</div>

//             <EditNickName
//               {...register("UserNickname", {
//                 required: false,
//                 pattern: /^[a-zA-Z0-9]{4,8}$/,
//               })}
//             ></EditNickName>
//             <EditPhone
//               {...register("UserMobile", {
//                 required: false,
//                 pattern: /^\d{3}\d{3,4}\d{4}$/,
//               })}
//             ></EditPhone>
//             <EditText
//               {...register("profileText", {
//                 required: false,
//                 pattern: /^.{0,255}$/,
//               })}
//             ></EditText>
//             <SignUpPassword
//               {...register("Password", {
//                 required: true,
//                 minLength: {
//                   value: 8,
//                   message: "8자 이상으로 영문+숫자+특수문자 조합하셔야 해요!",
//                 },
//                 maxLength: {
//                   value: 15,
//                   message: "15자 이내로 입력하셔야 해요!",
//                 },
//                 pattern: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/,
//               })}
//             ></SignUpPassword>

//             <SignUpButton type="submit">Edit</SignUpButton>
//           </SignUpForm>
//         </SignUpCenter>
//       </SignUpMain>
//     </SinUpOut>
//   );
// };

// export default InfoEdit;

// 갈아엎는 버전

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import dummyMyInfo from "../documents/dummyMyInfo";
import mememe from "../image/mememe.png";

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
  UserImg: any;
  UserName: string;
  UserNickname: string;
  UserMobile: string;
  profileText: string;
  Password: string;
};

type ProfilePics = {
  file: string;
  previewURL: any | string;
};

const InfoEdit = ({ myinfo, handleModalClose }: any) => {
  // console.log(myinfo);
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

  const [userImg, setUserImg] = useState("");
  // console.log(userImg);
  const [userNick, setUserNick] = useState(nick);
  const [userPhone, setUserPhone] = useState(phone);
  const [myText, setMytext] = useState(profileText);
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("개인정보 수정 페이지입니다 :)");

  useEffect(() => {
    if (password.length >= 1 && !isPassword(password)) {
      setErrMessage("비밀번호를 다시 확인해주세요");
    } else {
      setErrMessage("개인정보 수정 페이지입니다 :)");
    }
  }, [password]);

  const isPassword = (password: any) => {
    const PasswordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;
    return PasswordRegex.test(password);
  };

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
    if (!isPassword) {
      setErrMessage("비밀번호를 다시 확인해주세요");
    } else {
      if (userImg === "" || userImg === undefined) {
        formData.append("UserImg", userImg);
        if (token !== null) {
          formData.append("access_token", token);
        }
        formData.append("nick", userNick);
        formData.append("phone", userPhone);
        formData.append("profileText", myText);
        formData.append("password", password);

        // 이미지 변화가 있다면~
        await axios
          .post(
            "http://ec2-3-142-145-100.us-east-2.compute.amazonaws.com/user/update",
            formData
          )
          .then((res) => {
            console.log(res);
            window.location.replace("http://localhost:3000/mypage/");
          })
          .catch((err) => {
            alert("비밀번호가 맞지않아요!");
          });
        // 이미지 변화가 없다면~
      } else {
        await axios
          .post(
            "http://ec2-3-142-145-100.us-east-2.compute.amazonaws.com/user/changeinfo",
            {
              access_token: token,
              nick: userNick,
              phone: userPhone,
              profileText: myText,
              password: password,
            }
          )
          .then((res) => {
            console.log(res);
            window.location.replace("http://localhost:3000/mypage/");
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
          {/* <SignUpForm> */}
          <form className="EditForm" onSubmit={(e) => e.preventDefault()}>
            <FileUpload htmlFor="file" onChange={handlePreviewChange}>
              {uploadImg !== undefined ? (
                <img
                  src={uploadImg.previewURL}
                  alt="프사"
                  onClick={deleteUploadImg}
                ></img>
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

            {/* 닉네임 */}
            <input
              className="EditNickName"
              type="text"
              placeholder={nick || "* NickName"}
              onChange={handleUserNick}
            ></input>

            {/* 핸드폰 */}
            <input
              className="EditPhone"
              type="tel"
              placeholder={phone || "* Mobile Phone"}
              onChange={handleUserPhone}
            ></input>

            {/* 상태메시지 */}
            <input
              className="EditText"
              type="text"
              placeholder={profileText || "* 상태메시지를 입력해주세요"}
              onChange={handleMyText}
            ></input>

            {/* 비밀번호확인 */}
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
