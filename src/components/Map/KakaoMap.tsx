import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { markerdata } from './markerData';

declare global {
  interface Window {
    kakao: any;
  }
}

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

const MapContents = styled.div`
  width: 80%;
  height: 100vh;
  /* border: 1px solid red; */
  position: absolute;
  right: 0;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const Marker = styled.div`
  width: 150px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #189cc4;
`;



type groundData = {
  id: number,
  name: string,
  address: string,
  latitude: string,
  longitude: string,
  category: string,
  recommend: string,
  phone: string,
  created_at: string,
  updated_at: string
}

type KakaomapProps = {
  handleModal: () => void;
  isModal: boolean;
  // groundDatas: Array<groundData>;
  groundDatas: any;
};

const Kakaomap: React.FC<KakaomapProps> = ({ isModal, handleModal, groundDatas}) => {
  // const Kakaomap: React.FC<KakaomapProps> = (props: any) => {
  //카테고리가 변할때마다 생성되어야 할둣? dev 설정시
  // const [isMap, setMap] = useState(markerdata);
  // const [isMap, setMap] = useState([{
  //   id: 0,
  //   name: "",
  //   address: "",
  //   latitude: "",
  //   longitude: "",
  //   category: "",
  //   recommend: "",
  //   phone: "",
  //   created_at: "",
  //   updated_at: ""
  // }]);
  const [isMap, setMap] = useState(groundDatas);

  // 여기서 콘솔로그 값으로 데이터에 대한 트리거를 작동시켜야 실제 맵에 마커가 렌더링 된다. 렌더링 되는것 까지는 확인하였음.
  // console.log(groundDatas)
  // console.log(isMap)

  useEffect(() => {
    // console.log(groundDatas)
    setMap(groundDatas)
    // console.log(isMap)
    mapscript();
    // console.log(isMap)
    // 초기 값으로 isMap이 아니라 groundDatas를 해놓으면 한 박자 늦게 렌더링이 된다. 예를들어 cafe를 누르고 그 다음 뒤로가서 life를 누르면 렌더링되는 마커는 cafe의 마커이다.
  }, [groundDatas]);

  // useEffect(() => {
    
  //   // console.log(isModal);
  // }, []);

  const handleCurrentLocation = () => {
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
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      var locPosition = new window.kakao.maps.LatLng(37.535946, 127.006161);
      displayMarker(locPosition);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition: any) {
      let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      let options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(37.535946, 127.006161), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      map.setCenter(locPosition);
    }
  };

  const mapscript = () => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.535946, 127.006161), //지도의 중심좌표.
      level: 7, //지도의 레벨(확대, 축소 정도)
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
      console.log(isMap)
      // 마커를 생성합니다
      var marker = new window.kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        image: markerImage,
        // position: new window.kakao.maps.LatLng(isMap[i].lat, isMap[i].lng), // 마커의 위치
        position: new window.kakao.maps.LatLng(isMap[i].latitude, isMap[i].longitude), // 마커의 위치
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

      window.kakao.maps.event.addListener(marker, 'click', handleModal);
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
  };

  return (
    <MapContents>
      <div id="map" style={{ width: '100vw', height: '100vh' }} />
      <CurrentLocation onClick={handleCurrentLocation}></CurrentLocation>
    </MapContents>
  );
};

export default Kakaomap;
