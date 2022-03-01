import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { getCurrentMyOrder } from "recoil/Order/myOrder/states";
import { CurrentOrderInfo } from "types/types";
import styles from "./CurrentMyOrder.module.scss";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const CurrentMyOrder = () => {
  const currentmyorder = useRecoilValue(getCurrentMyOrder);

  useEffect(() => {
    const La = currentmyorder.pickUpPosLa;
    const Ma = currentmyorder.pickUpPosLa;
    if (La && Ma && kakao) {
      var container = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(La, Ma),
        level: 3,
      };
      var map = new kakao.maps.Map(container, options);
      var markerPosition = new kakao.maps.LatLng(La, Ma);
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, [currentmyorder.pickUpPosLa, currentmyorder.pickUpPosMa]);
  return (
    <div className={styles.currentOrderRoot}>
      <div className={styles.currentOrderRoot_title}>배달신청현황</div>
      <div className={styles.currentOrderRoot_step}>
        <div className={styles.currentOrderRoot_step_title}>현재상태</div>
        <div className={styles.currentOrderRoot_step_content} style={{ color: currentmyorder.step === "수락대기중" ? "#DB6982" : "#0a5ca8" }}>
          {currentmyorder.step}
        </div>
      </div>
      <div className={styles.currentOrderRoot_classification}>
        <div className={styles.currentOrderRoot_classification_title}>분류</div>
        <div className={styles.currentOrderRoot_classification_content}>{currentmyorder.classification}</div>
      </div>
      <div className={styles.currentOrderRoot_detail}>
        <div className={styles.currentOrderRoot_detail_title}>상세품목</div>
        <div className={styles.currentOrderRoot_detail_content}>{currentmyorder.detail}</div>
      </div>
      <div className={styles.currentOrderRoot_deliveryPrice}>
        <div className={styles.currentOrderRoot_deliveryPrice_title}>배달비</div>
        <div className={styles.currentOrderRoot_deliveryPrice_content}>{currentmyorder.deliveryPrice}</div>
      </div>
      <div className={styles.currentOrderRoot_additionalRequest}>
        <div className={styles.currentOrderRoot_additionalRequest_title}>추가요청사항</div>
        <div className={styles.currentOrderRoot_additionalRequest_content}>{currentmyorder.additionalRequest}</div>
      </div>
      <div className={styles.currentOrderRoot_pickUpTime}>
        <div className={styles.currentOrderRoot_pickUpTime_title}>제한시간</div>
        <div className={styles.currentOrderRoot_pickUpTime_content}>
          {currentmyorder.pickUpTime.getHours()}시 {currentmyorder.pickUpTime.getMinutes()}분
        </div>
      </div>
      <div className={styles.currentOrderRoot_pickUpPos}>
        <div className={styles.currentOrderRoot_pickUpPos_title}>픽업장소</div>
        <div id="map" style={{ width: "100%", height: "250px", borderRadius: "4px" }}></div>
      </div>
    </div>
  );
};

export default CurrentMyOrder;
