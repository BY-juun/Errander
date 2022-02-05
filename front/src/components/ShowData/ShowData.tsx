import React from 'react';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { TableBody, TableCell, TableContainer, TableHead } from '@mui/material';
import Row from './Row';
import { OrderInfo } from 'types/types';

interface Props{
    dataList : Array<OrderInfo>;
    isEntireOrder : boolean,
}   

const ShowData = ({dataList,isEntireOrder} : Props) => {
    return(
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableCell/>
                        {isEntireOrder 
                        ?   <TableCell align="right">제한시간</TableCell>
                        :   <TableCell align="right">날짜</TableCell>
                        }
                        
                        <TableCell align="right">분류</TableCell>
                        <TableCell align="right">배달비</TableCell>
                    </TableHead>
                    <TableBody>
                        {dataList.map((row,idx)=>(
                            <Row key={idx} data={row} idx={idx} isEntireOrder={isEntireOrder}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
} ;

export default ShowData;