import Header from 'components/Header/header';
import React, { useEffect, useState } from 'react';
import useCurrentLocation from 'Util/hooks/useCurrentLocation';
import styles from './pickUpPos.module.scss';

const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
    maximumAge: 1000 * 3600 * 24, // 24 hour
}

declare global {
  interface Window {
    kakao: any;
  }
}


const { kakao } = window;


const PickUpPos = () => {
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
            marker.setDraggable(true); 
        }
    },[currentLocation,currentError]);
    return(
        <>
            <div className={styles.pickUpRoot}>
                <div id="map" style={{width:"100%", height:"500px", borderRadius : "4px"}}></div>
                <button className={styles.closeBtn}>확인</button>
            </div>
        </>
    )
};

export default PickUpPos;