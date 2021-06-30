import React, { useEffect } from 'react';
import styled from 'styled-components';
import { markerdata } from './markerData';
declare global {
  interface Window {
    kakao: any;
  }
}

const MapContents = styled.div`
  width: 80%;
  height: 100vh;
  /* border: 1px solid red; */
  position: absolute;
  right: 0;
`;

const Marker = styled.div`
  width: 150px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #189cc4;
`;

const Kakaomap: React.FC = () => {
  //카테고리가 변할때마다 생성되어야 할둣? dev 설정시

  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.535946, 127.006161), //지도의 중심좌표.
      level: 7, //지도의 레벨(확대, 축소 정도)
    };
    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    var imageSrc = 'icon/location_main.svg', // 마커이미지의 주소입니다
      imageSize = new window.kakao.maps.Size(44, 49), // 마커이미지의 크기입니다
      imageOption = { offset: new window.kakao.maps.Point(22, 49) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    var markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    );

    for (var i = 0; i < markerdata.length; i++) {
      // 마커를 생성합니다
      var marker = new window.kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        image: markerImage,
        position: new window.kakao.maps.LatLng(
          markerdata[i].lat,
          markerdata[i].lng,
        ), // 마커의 위치
      });

      var iwContent = `<div style=" width: 150px;
    height: 50px;
    background-color: #189cc4;
    color:#fff;
    text-align:center;
    line-height:50px;
    ">${markerdata[i].content}`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

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

    // var marker = new window.kakao.maps.Marker({
    //   position: new window.kakao.maps.LatLng(37.5666805, 126.9784147),
    //   image: markerImage,
    // });

    // marker.setMap(map);

    // markerdata.forEach((el) => {
    //   // 마커를 생성합니다
    //   new window.kakao.maps.Marker({
    //     //마커가 표시 될 지도
    //     map: map,
    //     image: markerImage,
    //     //마커가 표시 될 위치
    //     position: new window.kakao.maps.LatLng(el.lat, el.lng),
    //   });
    // });

    // // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
    // var iwContent = `<div style=" width: 150px;
    // height: 50px;
    // background-color: #189cc4;
    // color:#fff;
    // text-align:center;
    // line-height:50px;
    // ">Hello World!</div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

    // // 인포윈도우를 생성합니다
    // var infowindow = new window.kakao.maps.InfoWindow({
    //   content: iwContent,
    // });

    // // 마커에 마우스오버 이벤트를 등록합니다
    // window.kakao.maps.event.addListener(marker, 'mouseover', function () {
    //   // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
    //   infowindow.open(map, marker);
    // });

    // // 마커에 마우스아웃 이벤트를 등록합니다
    // window.kakao.maps.event.addListener(marker, 'mouseout', function () {
    //   // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
    //   infowindow.close();
    // });
  };

  return (
    <MapContents>
      <div id="map" style={{ width: '100vw', height: '100vh' }} />
    </MapContents>
  );
};

export default Kakaomap;
