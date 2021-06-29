import React from "react";
// import dummyDatas from "../documents/dummyDatas";
import choonShick from "../image/choonShick.png";
import dummyShops from "../documents/dummyShops";

interface dummyInfo {
  id: number;
  img: string;
  name: string;
  message: string;
  likes: number;
  ground: string;
};

function ShopRank() {
  // const { name, id, ground, message, likes, img } = dummyShops.map((dummyShop) => {
  //   name: dummyShop.name,
  //   id: dummyShop.id,
  //   ground: dummyShop.ground,
  //   message: dummyShop.message,
  //   likes: dummyShop.likes,
  //   img: dummyShop.img
  // });

  // https://ui.toast.com/weekly-pick/ko_20210505 여기 참고할 것
  const renderShops = dummyShops.map(
    (dummyshop: {
      id: number;
      img: string;
      name: string;
      message: string;
      likes: number;
      ground: string;
    }, idx) => {
      <li className="EachRanker" key={idx}>
        <div className="EachNumber">{dummyshop.id}</div>
        <div>
          {<img className="EachPic" src={choonShick} alt="pepe" />}
        </div>
        <div className="EachName">{dummyshop.name}</div>
        <div className="EachMessage">{dummyshop.message}</div>
        <div className="EachLikes">❤️Likes {dummyshop.likes}</div>
        <div className="EachGround">📍{dummyshop.ground}</div>
      </li>;
    }
  )

  return (
    <div>
      shoprank
      <ul className="AllRankers">
        {renderShops}
        {/* <li className="EachRanker">
          <div className="EachNumber">{id}</div>
          <div>{<img className="EachPic" src={choonShick} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">{id}</div>
          <div>{<img className="EachPic" src={choonShick} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">{id}</div>
          <div>{<img className="EachPic" src={choonShick} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">{id}</div>
          <div>{<img className="EachPic" src={choonShick} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">{id}</div>
          <div>{<img className="EachPic" src={choonShick} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">{id}</div>
          <div>{<img className="EachPic" src={choonShick} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">{id}</div>
          <div>{<img className="EachPic" src={choonShick} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">{id}</div>
          <div>{<img className="EachPic" src={choonShick} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li>
        <li className="EachRanker">
          <div className="EachNumber">{id}</div>
          <div>{<img className="EachPic" src={choonShick} alt="pepe" />}</div>
          <div className="EachName">{name}</div>
          <div className="EachMessage">{message}</div>
          <div className="EachLikes">❤️Likes {likes}</div>
          <div className="EachGround">📍{ground}</div>
        </li> */}
      </ul>
    </div>
  );
}

export default ShopRank;
