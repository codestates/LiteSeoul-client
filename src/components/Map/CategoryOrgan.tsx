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
    width: 50px;
    height: 50px;
    &img {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
  }
  & div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
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

function CategoryOrgan(props: any) {
  const data = JSON.parse(localStorage.getItem('total') || '{}');

  useEffect(() => {
    const axiosOrgan = data.filter((el: any) => {
      return el['category'] === 'organ';
    });
    // console.log(axiosOrgan);
    setMap(axiosOrgan);
  }, []);

  const [isMap, setMap] = useState<any>(data);

  // 카페 카테고리를 눌럿을떄
  const handelCafe = (e: any) => {
    props.handelList();
    props.handelCategoy('organ');
    props.handleMarker('organ');

    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    container!.innerHTML = '';

    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.535946, 127.006161), //지도의 중심좌표.
      level: 8, //지도의 레벨(확대, 축소 정도)
    };
    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    var imageSrc = 'icon/location_main3.svg', // 마커이미지의 주소입니다
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

      var iwContent = `<div id="${isMap[i].id}" value="${isMap[i].id}"   class='info'
      onmouseenter="document.getElementById('CategoryList${isMap[i].id}').style.backgroundColor = '#ffd700' "
      onmouseout="document.getElementById('CategoryList${isMap[i].id}').style.backgroundColor = '#eee' "
      style=" width: 150px;
        height: 50px;
        background-color: #189cc4;
        color:#fff;
        text-align:center;
        line-height:50px;
        ">${isMap[i].name}`;

      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent, // 인포윈도우에 표시할 내용
      });

      infowindow.open(map, marker);
    }
  };

  return (
    <CategoryList onClick={handelCafe}>
      <div>
        <img src="icon/organic2.svg" alt="category"></img>
      </div>
      <div>
        <span>Organic</span>
        <span>nature organic market</span>
      </div>
      <div>
        <img src="icon/arrow_left_color.svg" alt="arrow"></img>
      </div>
    </CategoryList>
  );
}

export default CategoryOrgan;
