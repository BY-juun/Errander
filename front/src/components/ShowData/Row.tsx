import { Collapse, IconButton, TableCell, TableRow, Tooltip } from '@mui/material';
import React, { useCallback, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from './ShowData.module.scss';
import { Box } from '@mui/system';
import { OrderInfo } from 'types/types';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { myOrderInfo } from 'recoil/Order/myOrder/states';


interface Props{
    data : OrderInfo,
}

const Row = ({data} : Props) => {
    const [open,setOpen] = useState<boolean>(false);
    const [MyOrderInfo, SetMyOrderInfo] = useRecoilState(myOrderInfo);
    const navigate = useNavigate();

    const onClickDetailInfoBtn = useCallback(()=>{
        navigate('/detailInfo',{
            state : data
        })
    },[navigate,data]);


    const onClickDelteBtn = useCallback(()=>{
        if(window.confirm("해당 거래 내역을 삭제하시겠습니까?")){
            //비동기 요청
            SetMyOrderInfo(MyOrderInfo.filter((order)=> {
                return order.orderIdx !== data.orderIdx;
            }))
            alert("해당 거래내역이 삭제되었습니다");
            setOpen(false);
        }
    },[MyOrderInfo, SetMyOrderInfo, data.orderIdx]);


    
    return(
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton aria-label='expand row' size="small" onClick={()=>{setOpen(!open)}}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="right">{window.innerWidth < 768 ? data.date.slice(2,data.date.length) :data.date}</TableCell>
                <TableCell align="right">{data.classification}</TableCell>
                <TableCell align="right">{data.deliveryPrice}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}> 
                    <Collapse in={open} timeout="auto" unmountOnExit>
                    
                        <Box className={styles.box}>
                            <div className={styles.btnWrapper}>
                                <div>
                                    <button className={styles.showInfoBtn} onClick={onClickDetailInfoBtn}>추가 정보 확인하기</button>
                                    <Tooltip title="delete">
                                        <IconButton onClick={onClickDelteBtn}>
                                            <DeleteIcon style={{color : "#DB6982"}}/>
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>

        </React.Fragment>
        
    )
};

export default Row;