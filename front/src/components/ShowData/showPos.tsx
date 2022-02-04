import React, { useEffect } from 'react';

interface Props{
    la : number,
    ma : number,
    idx : number,
}

declare global {
    interface Window {
      kakao: any;
    }
  }
  
  
  const { kakao } = window;

const ShowPos = ({la,ma,idx}:Props) => {

    useEffect(()=>{
        if(la && ma){
            var container = document.getElementById(`map_${idx}`);
            var options = {
                center: new kakao.maps.LatLng(la, ma),
                level: 3
              };
            var map = new kakao.maps.Map(container, options);
            var markerPosition  = new kakao.maps.LatLng(la, ma); 
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
            map.relayout();
        }
    },[la,ma,idx]);

    return(
        <div id={`map_${idx}`} style={{marginTop : "25px",width:"100%", height:"200px", borderRadius : "4px"}}></div>
    )
};

export default ShowPos;