import React, { useEffect } from 'react';
import { OrderInfo } from 'types/types';
import useCurrentLocation from 'Util/hooks/useCurrentLocation';

const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
    maximumAge: 1000 * 3600 * 24, // 24 hour
}


interface Props{
    DetailOrderInfo : OrderInfo;
}

declare global {
    interface Window {
      kakao: any;
    }
  }
  
  
const { kakao } = window;

const DetailOrderInfo = ({DetailOrderInfo} : Props ) => {

    const {La, Ma} = DetailOrderInfo?.pickUpPos;
    const {location : currentLocation, error : currentError} = useCurrentLocation(geolocationOptions);
    useEffect(()=>{
        if(currentLocation){
            var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
                level: 3
              };
            var map = new kakao.maps.Map(container, options);
            var markerPosition  = new kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude); 
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);

        }
    },[currentLocation]);

    return(
        <>
        <div>
            날짜 : {DetailOrderInfo.date}
        </div>
        <div>
            분류 : {DetailOrderInfo.classification}
        </div>
        <div>
            상세품목 : {DetailOrderInfo.detail}
        </div>
        <div>
            추가 요청 사항 : {DetailOrderInfo.additionalRequest}
        </div>
        <div id="map" style={{width:"100%", height:"500px", borderRadius : "4px"}}></div>
        </>
    );
};

export default DetailOrderInfo;