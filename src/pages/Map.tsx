import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MapNav from '../components/Map/MapNav';
import KakaoMap from '../components/Map/KakaoMap';
// import KakaoMap2 from '../components/Map/KakaoMap2';
import axios from 'axios';

const MapOut = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 999;
  position: absolute;
  display: flex;
  overflow: hidden;
`;

const CurrentLocation = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  background-image: url('/icon/Current_location-01.svg');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  z-index: 991;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.2rem;
  bottom: 3%;
  right: 3%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.4s all;
  &:hover {
    transform: scale(1.1);
  }
`;

type MapProps = {
  handleModal: () => void;
  isModal: boolean;
  handleModalData: any;
};

function Map({ handleModal, isModal, handleModalData }: MapProps) {
  console.log(isModal);
  var data = JSON.parse(localStorage.getItem('total') || '{}');
  var axioscafe = data.filter((el: any) => {
    return el['category'] === 'cafe';
  });

  var axiosOrgan = data.filter((el: any) => {
    return el['category'] === 'organ';
  });
  var axiosLife = data.filter((el: any) => {
    return el['category'] === 'life';
  });

  const [isMarker, setMarker] = useState('all');

  const handleMarker = (e: string) => {
    console.log(e);
    setMarker(e);
  };

  const handleCurrentLocation = () => {
    if (isMarker === 'all') {
      var isMap = data;
      var markers = 'icon/location_main.svg';
    } else if (isMarker === 'cafe') {
      var isMap = axioscafe;
      var markers = 'icon/location_main4.svg';
    } else if (isMarker === 'life') {
      var isMap = axioscafe;
      var markers = 'icon/location_main2.svg';
    } else if (isMarker === 'organ') {
      var isMap = axioscafe;
      var markers = 'icon/location_main3.svg';
    }

    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        var locPosition = new window.kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition);
      });
    } else {
      alert('현재위치를 알 수가 없어요 ㅠㅠ');
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition: any) {
      let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      container!.innerHTML = '';
      let options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(37.535946, 127.006161), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      map.setCenter(locPosition);

      var imageSrc = markers, // 마커이미지의 주소입니다
        imageSize = new window.kakao.maps.Size(35, 35), // 마커이미지의 크기입니다
        imageOption = { offset: new window.kakao.maps.Point(15, 44) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      var markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      );

      for (var i = 0; i < isMap.length; i++) {
        // console.log(isMap)
        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          image: markerImage,
          // position: new window.kakao.maps.LatLng(isMap[i].lat, isMap[i].lng), // 마커의 위치
          position: new window.kakao.maps.LatLng(
            isMap[i].latitude,
            isMap[i].longitude,
          ), // 마커의 위치
        });

        var iwContent = `
      <div style=" width: 150px;
      height: 50px;
      background-color: #189cc4;
      color:#fff;
      text-align:center;
      line-height:50px;
      ">${isMap[i].name}`;
        // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

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

        // window.kakao.maps.event.addListener(marker, 'click', handleMakerModal);
      }

      // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
      function makeOverListener(map: any, marker: any, infowindow: any) {
        return function () {
          infowindow.open(map, marker);
        };
      }

      // 인포윈도우를 닫는 클로저를 만드는 함수입니다
      function makeOutListener(infowindow: any) {
        return function () {
          infowindow.close();
        };
      }
    }
  };

  useEffect(() => {
    axios
      .get(
        `http://ec2-52-79-247-245.ap-northeast-2.compute.amazonaws.com/shop/getAll`,
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('total', JSON.stringify(res.data));
      });
  }, []);

  return (
    <MapOut>
      <MapNav
        handleModal={handleModal}
        isModal={isModal}
        handleModalData={handleModalData}
        handleMarker={handleMarker}
      ></MapNav>
      <KakaoMap
        handleModal={handleModal}
        isModal={isModal}
        // handleModalData={handleModalData}
      ></KakaoMap>
      <CurrentLocation onClick={handleCurrentLocation}></CurrentLocation>
    </MapOut>
  );
}

export default Map;
