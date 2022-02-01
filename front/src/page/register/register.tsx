import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { style } from '@mui/system';
import Header from 'components/Header/header';
import React, { useCallback, useEffect, useState } from 'react';
import useCurrentLocation from 'Util/hooks/useCurrentLocation';
import styles from './register.module.scss';

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

const Register = () => {
    const [classification, setClassification] = useState("");
    const {location : currentLocation, error : currentError} = useCurrentLocation(geolocationOptions);
    //현재 위치정보
    const handleChange = useCallback((e)=>{
        setClassification(e.target.value);
    },[])

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
            <Header></Header>
            <div className={styles.registerRoot}>
                <div className={styles.title}>주문서 작성</div>
                <div className={styles.registerContent}>
                    <div className={styles.classification}>
                        <div>분류</div>
                        <div>
                            <FormControl style={{width : "255px", textAlign:"start"}}>
                            <InputLabel>품목</InputLabel>
                                <Select
                                label="품목"
                                onChange={handleChange}
                                value={classification}
                                >
                                    <MenuItem value={"식품"}>식품</MenuItem>
                                    <MenuItem value={"생활용품"}>생활용품</MenuItem>
                                    <MenuItem value={"기타"}>기타</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className={styles.detailItem}>
                        <div>상세품목</div>
                        <input></input>
                    </div>
                    <div className={styles.deliveryPrice}>
                        <div>배달비</div>
                        <input></input>
                    </div>
                    <div className={styles.pickUpPosition}>
                        <div>물건을 수령할 위치를 선택해주세요</div>
                        <div id="map" style={{width:"350px", height:"350px"}}></div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Register;