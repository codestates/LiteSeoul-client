import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MarkerOut = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  min-height: 900px;
  background-color: #000000b3;
  /* opacity: 0.6; */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
const MarkerInMain = styled.div`
  width: 800px;
  height: 900px;
  /* border: 1px solid #fff; */
  /* border: 1px solid red; */
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (max-width: 850px) {
    width: 400px;
    position: relative;
    border: 1px solid red;
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

const MarkerCenter = styled.div`
  position: absolute;
  width: 800px;
  height: 850px;
  background: #fff;
  top: 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  @media screen and (max-width: 850px) {
    width: 400px;
  }
`;

const MarkerInfo = styled.div`
  width: 90%;
  height: 30%;
  border-radius: 20px;
  background: #eee;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const MakerStoreInfo = styled.div`
  width: 90%;
  height: 30%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  & div:nth-child(1) {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    &img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }
  }
  & div:nth-child(2) {
    height: 60px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & span:nth-child(1) {
      color: #000000;
      font-size: 1.7rem;
      font-weight: 700;
    }
    & span:nth-child(2) {
      color: #86868b;
      font-weight: 700;
      font-size: 1rem;
    }
  }
`;
const MakerStoreText = styled.div`
  /* border: 1px solid blue; */
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  & div:nth-child(1) {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
    margin-bottom: 20px;
  }
  & div:nth-child(2) {
    width: 100px;
    height: auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    /* background: yellow; */
    & span {
      font-size: 1rem;
    }
    & label {
      display: block;
      width: 20px;
      height: 20px;
      & img {
        width: 20px;
        height: 20px;
        object-fit: cover;
      }
    }
  }
  @media screen and (max-width: 850px) {
    font-size: 0.7rem;
  }
`;

const MarkerComment = styled.div`
  color: #fff;
  width: 20%;
  height: 40px;
  background-color: #189cc4;
  border-radius: 20px;
  margin-left: 5%;
  line-height: 40px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  @media screen and (max-width: 850px) {
    font-size: 1.2rem;
    width: 90%;
    margin-left: 0;
    margin: 0 auto;
  }
`;

const MarkerCommemntUl = styled.ul`
  width: 90%;
  height: 45%;
  margin: 0 auto;
  padding-right: 1%;
  /* border: 1px solid red; */
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    height: 20%;
    background-color: #189cc4;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
  & li {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 40px;
    border: 3px solid #189cc4;
    color: #000000;
    border-radius: 20px;
    margin-bottom: 20px;
    &:hover {
      background-color: #189cc4;
      color: #fff;
      & div:nth-of-type(3) {
        color: #fff;
      }
    }
    & div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    & div:nth-child(1) {
      /* border: 1px solid red; */
      width: 15%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    & div:nth-child(2) {
      width: 70%;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
    }
    & div:nth-child(3) {
      /* border: 1px solid red; */
      width: 15%;
      height: 100%;
      font-size: 0.6rem;
      color: #86868b;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  & li:nth-last-child() {
    margin-bottom: 0;
  }
  @media screen and (max-width: 961px) {
    & li {
      display: flex;
      & div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      & div:nth-child(1) {
        /* border: 1px solid red; */
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: 700;
      }
      & div:nth-child(2) {
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 0.6rem;
      }
      & div:nth-child(3) {
        display: none;
      }
    }
  }
`;

const MarkerCommnetInput = styled.div`
  width: 90%;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const CommentInput = styled.input.attrs({
  type: "text",
})`
  width: 78%;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #189cc4;
  text-indent: 20px;
  &:focus {
    outline: none;
    border: 2px solid #ff735d;
    background: transparent;
  }
`;

const CommentBtn = styled.button`
  width: 20%;
  height: 40px;
  background-color: #189cc4;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 20px;
  font-weight: 400;
  font-size: 1rem;
  transition: 0.4s all;
  &:hover {
    background-color: #ff735d;
  }
`;

type MarkerProps = {
  handleModal: () => void;
  isModal: boolean;
  modalData: any;
};

function Marker({ isModal, handleModal, modalData }: MarkerProps) {
  // console.log(modalData)
  const [isCheck, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!isCheck);
  };

  const [comments, setComments] = useState([]);
  // console.log(comments)

  useEffect((): any => {
    axios
      .get(
        `http://ec2-52-79-247-245.ap-northeast-2.compute.amazonaws.com/shop/${Number(modalData.id)}`
      )
      .then((res) => setComments(res.data.commentInfo));
  }, []);

  return (
    // 프롭스로 가져온 모달데이터를 갖고 아래 하단부에 렌더링 하면 된다.
    <MarkerOut>
      <MarkerInMain>
        <CloseBtn onClick={handleModal}></CloseBtn>
        <MarkerCenter>
          <MarkerInfo>
            <MakerStoreInfo>
              <div>
                <img src="icon/certification_mypage.svg" alt="Category"></img>
              </div>
              <div key={modalData.id}>
                <span>{modalData.name}</span>
                <span>{modalData.category}</span>
              </div>
            </MakerStoreInfo>
            <MakerStoreText>
              <div>가게 소개문구 자리. 서버에 요청하여 받을 예정임.</div>
              <div>
                <input
                  type="checkbox"
                  id="like"
                  style={{ display: "none" }}
                  onChange={handleCheck}
                ></input>
                <label htmlFor="like">
                  {isCheck ? (
                    <img src="icon/like_fill.svg" alt="Likes"></img>
                  ) : (
                    <img src="icon/like_stroke.svg" alt="Likes"></img>
                  )}
                </label>
                <span>Likes 120</span>
              </div>
            </MakerStoreText>
          </MarkerInfo>
          <MarkerComment>COMMENT</MarkerComment>
          <MarkerCommemntUl>
            {comments.map((comment: any) => (
              <li key={comment.id}>
                <div>{comment.name}</div>
                <div>{comment.comment}</div>
                <div>2021-06-28</div>
              </li>
            ))}
          </MarkerCommemntUl>
          <MarkerCommnetInput>
            <CommentInput></CommentInput>
            <CommentBtn>등록</CommentBtn>
          </MarkerCommnetInput>
        </MarkerCenter>
      </MarkerInMain>
    </MarkerOut>
  );
}

export default Marker;
