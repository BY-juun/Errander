import React from 'react';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { TableBody, TableCell, TableContainer, TableHead } from '@mui/material';
import Row from './Row';

interface OrderInfo{
    date : string,
    classification : string,
    detail : string,
    deliveryPrice : number,
    additionalRequest : string,
    pickUpPos : {La : number,Ma : number},
}

interface Props{
    dataList : Array<OrderInfo>;
}   

const ShowData = ({dataList} : Props) => {
    console.log(dataList);
    return(
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableCell/>
                        <TableCell align="right">날짜</TableCell>
                        <TableCell align="right">분류</TableCell>
                        <TableCell align="right">상세품목</TableCell>
                        <TableCell align="right">배달비</TableCell>
                    </TableHead>
                    <TableBody>
                        {dataList.map((row,idx)=>(
                            <Row key={idx} data={row} idx={idx}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
} ;

export default ShowData;