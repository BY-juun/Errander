import { Collapse, IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import React, { useCallback, useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./ShowData.module.scss";
import { Box } from "@mui/system";
import { OrderInfo } from "types/types";
import { useRecoilState } from "recoil";
import { myOrderInfo } from "recoil/Order/myOrder/states";

interface Props {
  data: OrderInfo;
  idx: number;
  isEntireOrder: boolean;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

const Row = ({ data, idx, isEntireOrder }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [MyOrderInfo, SetMyOrderInfo] = useRecoilState(myOrderInfo);

  const onClickDelteBtn = useCallback(() => {
    if (window.confirm("해당 거래 내역을 삭제하시겠습니까?")) {
      //비동기 요청
      SetMyOrderInfo(
        MyOrderInfo.filter((order) => {
          return order.id !== data.id;
        })
      );
      alert("해당 거래내역이 삭제되었습니다");
      setOpen(false);
    }
  }, [MyOrderInfo, SetMyOrderInfo, data.id]);

  useEffect(() => {
    const La = data.pickUpPosLa;
    const Ma = data.pickUpPosMa;
    if (La && Ma && open) {
      console.log(La);
      console.log(Ma);
      var container = document.getElementById(`map_${idx}`);
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
  }, [data.pickUpPosLa, data.pickUpPosMa, open, idx]);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {isEntireOrder ? (
          <TableCell align="right">
            {new Date(data.pickUpTime).getHours()}시{new Date(data.pickUpTime).getMinutes()}분
          </TableCell>
        ) : (
          <TableCell align="right">{}</TableCell>
        )}

        <TableCell align="right">{data.classification}</TableCell>
        <TableCell style={{ color: "#5060B4" }} align="right">
          {data.deliveryPrice}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box className={styles.box}>
              <div className={styles.detailHedaer}>
                <div>추가 요청 사항</div>
                {isEntireOrder ? (
                  <button className={styles.acceptbtn}>수락하기</button>
                ) : (
                  <Tooltip title="delete">
                    <IconButton onClick={onClickDelteBtn}>
                      <DeleteIcon style={{ color: "#DB6982" }} />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
              <div className={styles.detailContent}>{data.additionalRequest}</div>
              <div className={styles.pickUpPos}>픽업 위치</div>
              <div id={`map_${idx}`} style={{ width: "100%", height: "300px  ", borderRadius: "4px" }}></div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default Row;
