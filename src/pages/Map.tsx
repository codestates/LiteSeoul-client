import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MapNav from '../components/Map/MapNav';
import KakaoMap from '../components/Map/KakaoMap';
import axios from 'axios';
import queryStringify from 'qs-stringify';

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
  setLogin: any;
  setMyinfo: any;
  setLoading: any;
};

function Map({
  handleModal,
  isModal,
  handleModalData,
  setLogin,
  setMyinfo,
  setLoading,
}: MapProps) {
  useEffect(() => {
    var url = new URL(window.location.href);
    console.log(url);
    if (sessionStorage.getItem('access_token')) {
      setLogin(true);
      axios
        .post(
          'http://ec2-3-142-145-100.us-east-2.compute.amazonaws.com/user/get',
          {
            access_token: sessionStorage.getItem('access_token'),
          },
        )
        .then((res) => {
          setMyinfo(res.data);
        });
    }

    if (url.searchParams.get('code')) {
      const code = url.searchParams.get('code');

      console.log('kakao');
      const data2: any = {
        grant_type: 'authorization_code',
        client_id: 'd33a84f54f22e12cd75db7c1981bd095',
        redirect_uri: url,
        code: code,
      };

      const data = queryStringify(data2);

      axios({
        method: 'post',
        url: 'https://kauth.kakao.com/oauth/token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data,
      }).then((res) => {
        setLogin(true);
        setLoading(true);
        axios
          .post(
            'http://ec2-3-142-145-100.us-east-2.compute.amazonaws.com/kakao/login',
            {
              kakaoToken: res.data.access_token,
            },
          )
          .then((result) => {
            sessionStorage.setItem('access_token', result.data);
            window.location.reload();
            setLoading(false);
          });
      });
    }
  }, []);

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
        var lat = position.coords.latitude,
          lon = position.coords.longitude;

        var locPosition = new window.kakao.maps.LatLng(lat, lon);

        displayMarker(locPosition);
      });
    } else {
      alert('현재위치를 알 수가 없어요 ㅠㅠ');
    }

    function displayMarker(locPosition: any) {
      let container = document.getElementById('map');
      container!.innerHTML = '';
      let options = {
        center: new window.kakao.maps.LatLng(37.535946, 127.006161),
        level: 3,
      };
      let map = new window.kakao.maps.Map(container, options);
      map.setCenter(locPosition);

      var imageSrc = markers,
        imageSize = new window.kakao.maps.Size(35, 35),
        imageOption = { offset: new window.kakao.maps.Point(15, 44) };
      var markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      );

      for (var i = 0; i < isMap.length; i++) {
        var marker = new window.kakao.maps.Marker({
          map: map,
          image: markerImage,
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

        var infowindow = new window.kakao.maps.InfoWindow({
          content: iwContent,
        });

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
    }
  };

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
