import React from 'react';
import styled from 'styled-components';

const FooterOut = styled.div`
  width: 100%;
  height: 300px;
  background: #ccc;
  position: relative;
  @media screen and (max-width: 901px) {
    height: auto;
  }
`;

const FooterMain = styled.div`
  width: 90%;
  height: 100%;
  /* border: 1px solid red; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 901px) {
    width: 100%;
    display: flex;
    height: auto;
    justify-content: center;
    flex-direction: column;
  }
`;

const FooterSocial = styled.ul`
  width: 30%;
  height: 100%;
  padding: 3%;
  @media screen and (max-width: 901px) {
    width: 60%;
  }

  /* border: 1px solid green; */
  & li {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    & div {
      width: 25%;
      height: 40px;
      /* border: 1px solid blue; */
      display: flex;
      align-items: center;
      justify-content: flex-start;
      & img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }
  & li:nth-child(1) {
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 701px) {
    & li {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      & div {
        width: 25%;
        height: 30px;
        /* border: 1px solid blue; */
        display: flex;
        align-items: center;
        justify-content: flex-start;
        & img {
          width: 30px;
          height: 30px;
          object-fit: cover;
          cursor: pointer;
        }
      }
    }
    & li:nth-child(1) {
      font-size: 1.4rem;
      font-weight: 500;
      color: #fff;
      margin-bottom: 20px;
    }
  }
`;

const FooterCategory = styled.ul`
  width: 10%;
  height: 100%;
  /* border: 1px solid green; */
  padding: 3%;
  @media screen and (max-width: 901px) {
    width: 60%;
  }
  & li {
    opacity: 0.7;
    color: #fff;
    cursor: pointer;
    margin-bottom: 10px;
  }
  & li:nth-child(1) {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 20px;
    opacity: 1;
  }
`;
const FooterBusiness = styled.ul`
  width: 20%;
  height: 100%;
  /* border: 1px solid green; */
  padding: 3%;
  @media screen and (max-width: 901px) {
    width: 60%;
  }
  & li {
    opacity: 0.7;
    color: #fff;
    cursor: pointer;
    margin-bottom: 10px;
  }
  & li:nth-child(1) {
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 20px;
    opacity: 1;
  }
`;

const FooterContact = styled.ul`
  width: 20%;
  height: 100%;
  /* border: 1px solid green; */
  padding: 3%;
  @media screen and (max-width: 901px) {
    width: 60%;
  }
  & li {
    opacity: 0.7;
    color: #fff;
    cursor: pointer;
    margin-bottom: 10px;
  }
  & li:nth-child(1) {
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 20px;
    opacity: 1;
  }
`;

const FooterCopyWrite = styled.span`
  position: absolute;
  color: #fff;
  bottom: 1%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.6rem;
  @media screen and (max-width: 501px) {
    display: none;
  }
`;

function Footer() {
  return (
    <FooterOut>
      <FooterMain>
        <FooterSocial>
          <li>LiteSeoul</li>
          <li>
            <div>
              <img src="/icon/facebook_white.svg" alt="facebook"></img>
            </div>
            <div>
              <img src="/icon/tweet_white.svg" alt="tweet"></img>
            </div>
            <div>
              <img src="/icon/gmail_white.svg" alt="gmail"></img>
            </div>
            <div>
              <img src="/icon/insta_white.svg" alt="insta"></img>
            </div>
            <div>
              <img src="/icon/youtube_white.svg" alt="youtube"></img>
            </div>
          </li>
        </FooterSocial>
        <FooterCategory>
          <li>Explore</li>
          <li>Home</li>
          <li>Map</li>
          <li>MyPage</li>
        </FooterCategory>
        <FooterBusiness>
          <li>New Business</li>
          <li>LiteSeoul@liteseoul.com</li>
        </FooterBusiness>
        <FooterContact>
          <li>Contact</li>
          <li>LiteSeoul@liteseoul.com</li>
          <li>LiteSeoul@liteseoul.com</li>
        </FooterContact>
        <FooterCopyWrite>© 2021 LiteSeoul, HellCoders</FooterCopyWrite>
      </FooterMain>
    </FooterOut>
  );
}

export default Footer;
