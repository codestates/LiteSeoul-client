import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CategoryList = styled.div`
  width: 80%;
  height: 100px;
  border-radius: 20px;
  background-color: #eee;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  & div:nth-child(1) {
    width: 60px;
    height: 60px;
    &img {
      width: 60px;
      height: 60px;
      object-fit: cover;
    }
  }
  & div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    /* border: 1px solid red; */
    width: 150px;
    height: 60px;
    & span:nth-child(1) {
      font-size: 1.5rem;
      font-weight: 700;
    }
    & span:nth-child(2) {
      font-size: 1rem;
      color: #6e6e73;
    }
  }
  & div:nth-child(3) {
    width: 15px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #189cc4;
  }
`;

const NavMain2 = styled.div`
  width: 100%;
  height: 70%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
`;

const Category2 = styled.div`
  width: 50%;
  height: 40px;
  color: #fff;
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  background-color: #ffd700;
  border-radius: 20px;
  margin: 0 auto;
`;

const CategoryList2 = styled.div`
  cursor: pointer;
  margin: 0 auto;
  width: 80%;
  height: 80px;
  border-radius: 20px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin-bottom: 20px;
  & div:nth-child(1) {
    width: 80%;
    height: auto;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 5px;
    /* background-color: red; */
  }
  & div:nth-child(2) {
    /* background-color: red; */
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    & img {
      width: 20px;
      height: 20px;
      margin-right: 3px;
    }
    & span {
      font-size: 0.7rem;
      color: #6e6e73;
    }
  }
  & div:nth-child(3) {
    width: 15px;
    height: 50px;
    position: absolute;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const List2 = styled.div`
  width: 100%;
  height: 80%;
  overflow: auto;
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
`;

const CategoryOut = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  & img {
    width: 15px;
    height: 15px;
    object-fit: cover;
    transform: rotate(180deg);
    position: absolute;
    left: 45px;
    cursor: pointer;
  }
`;

function CategoryTotal(props: any) {
  const data = JSON.parse(localStorage.getItem('total') || '{}');

  const [isMap, setMap] = useState(data);

  // 카페 카테고리를 눌럿을떄
  const handelTotal = () => {
    props.handelList();
    props.handelCategoy('all');
    props.handleMarker('all');

    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    container!.innerHTML = '';

    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.535946, 127.006161), //지도의 중심좌표.
      level: 8, //지도의 레벨(확대, 축소 정도)
    };
    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    var imageSrc = 'icon/location_main.svg', // 마커이미지의 주소입니다
      imageSize = new window.kakao.maps.Size(35, 35), // 마커이미지의 크기입니다
      imageOption = { offset: new window.kakao.maps.Point(15, 44) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    var markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    );

    for (var i = 0; i < isMap.length; i++) {
      // 마커를 생성합니다
      var marker = new window.kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        image: markerImage,
        position: new window.kakao.maps.LatLng(
          isMap[i].latitude,
          isMap[i].longitude,
        ), // 마커의 위치
      });

      var iwContent = `<div style=" width: 150px;
        height: 50px;
        background-color: #189cc4;
        color:#fff;
        text-align:center;
        line-height:50px;
        ">${isMap[i].name}`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent, // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      window.kakao.maps.event.addListener(
        marker,
        'mouseover',
        makeOverListener(map, marker, infowindow),
      );
      window.kakao.maps.event.addListener(
        marker,
        'mouseout',
        makeOutListener(infowindow),
      );

      // window.kakao.maps.event.addListener(marker, 'click', props.handleModal);
    }

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map: any, marker: any, infowindow: any) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    function makeOutListener(infowindow: any) {
      return function () {
        infowindow.close();
      };
    }
  };

  return (
    <CategoryList onClick={handelTotal}>
      <div>
        <img src="icon/certification_mypage.svg" alt="category"></img>
      </div>
      <div>
        <span>All</span>
        <span>zero waste life</span>
      </div>
      <div>
        <img src="icon/arrow_left_color.svg" alt="arrow"></img>
      </div>
    </CategoryList>
  );
}

export default CategoryTotal;