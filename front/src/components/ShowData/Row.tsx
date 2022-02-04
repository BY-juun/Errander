import { Collapse, IconButton, TableCell, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box } from '@mui/system';
import ShowPos from './showPos';

interface Props{
    data : {date : string,    
        classification : string,
        detail : string,
        deliveryPrice : number,
        additionalRequest : string,
        pickUpPos : {La : number,Ma : number},
    },
    idx : number
}

const Row = ({data,idx} : Props) => {
    const [open,setOpen] = useState<boolean>(false);
    const [posOpen, setPosOpen] = useState<boolean>(false);

    return(
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton aria-label='expand row' size="small" onClick={()=>{setOpen(!open)}}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="right">{data.date}</TableCell>
                <TableCell align="right">{data.classification}</TableCell>
                <TableCell align="right">{data.detail}</TableCell>
                <TableCell align="right">{data.deliveryPrice}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box style={{padding : "25px  50px"}}>
                            <Typography style={{marginTop : "25px"}} variant='h6' gutterBottom component="div">
                                추가요청사항
                            </Typography>
                            <div style={{display : "flex",
                            justifyContent : "space-between",
                            alignItems:"center"}}>
                                <Typography style={{marginTop : "10px"}} variant='body2' gutterBottom component="div">
                                    {data.additionalRequest}
                                </Typography>   
                                <button style={{border : "1px solid #0a5ca8",
                            background : "#0a5ca8",
                            borderRadius : "4px",color : "white",
                            cursor:"pointer",height : "50px",padding : "10px"}}
                            onClick={()=>{setPosOpen(true)}}>픽업장소 확인</button>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            <ShowPos idx={idx} la={data.pickUpPos.La} ma={data.pickUpPos.Ma}></ShowPos>
        </React.Fragment>
        
    )
};

export default Row;