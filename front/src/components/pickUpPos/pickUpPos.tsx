import Header from "components/Header/header";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { customAxios } from "Util/customAxios";
import useCurrentLocation from "Util/hooks/useCurrentLocation";
import styles from "./pickUpPos.module.scss";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

interface Props {
  setPickUpPos: ({ La, Ma }: { La: number; Ma: number }) => void;
  classification: string;
  detail: string;
  deliveryPrice: string;
  pickUpPos: { La: number; Ma: number };
  pickUpTime: Date;
  additionalRequest: string;
}

const PickUpPos = ({ additionalRequest, pickUpTime, setPickUpPos, classification, detail, deliveryPrice, pickUpPos }: Props) => {
  const navigate = useNavigate();
  const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
  useEffect(() => {
    if (currentLocation) {
      var container = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude),
        level: 3,
      };
      var map = new kakao.maps.Map(container, options);
      var markerPosition = new kakao.maps.LatLng(currentLocation.latitude, currentLocation.longitude);
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
      marker.setDraggable(true);
      kakao.maps.event.addListener(marker, "dragend", function () {
        const { La, Ma } = marker.getPosition();
        setPickUpPos({
          La: La,
          Ma: Ma,
        });
      });
    }
  }, [setPickUpPos, currentLocation]);

  const onClickConfirm = useCallback(
    async (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (window.confirm("주문을 완료하시겠습니까?")) {
        let reqData = {
          date: new Date(),
          classification: classification,
          detail: detail,
          deliveryPrice: deliveryPrice,
          pickUpPosLa: pickUpPos.La,
          pickUpPosMa: pickUpPos.Ma,
          pickUpTime: pickUpTime,
          additionalRequest: additionalRequest,
        };
        try {
          await customAxios.post("/order/register", reqData);
          alert("주문이 완료되었습니다!");
          navigate("/");
        } catch (error) {
          console.error(error);
        }
      }
    },
    [classification, detail, deliveryPrice, pickUpPos, navigate]
  );

  return (
    <>
      <div className={styles.pickUpRoot}>
        <div className={styles.pickUpRoot_description}>픽업받을 장소를 선택해주세요.</div>
        <div className={styles.pickUpRoot_subdescription}>(잠시후, 지도가 표시됩니다)</div>
        <div id="map" style={{ width: "100%", height: "500px", borderRadius: "4px" }}></div>
        <button className={styles.closeBtn} onClick={onClickConfirm}>
          확인
        </button>
      </div>
    </>
  );
};

export default PickUpPos;
