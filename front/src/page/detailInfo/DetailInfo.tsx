import DetailOrderInfo from 'components/DetailOrderInfo/DetailOrderInfo';
import Header from 'components/Header/header';
import React from 'react';
import { useLocation } from 'react-router';
import { OrderInfo } from 'types/types';
import styles from './DetailInfo.module.scss';


const DetailInfo = () => {
    const location = useLocation();
    const state : any = location.state;
    console.log(state);
    return(
        <div>
            <Header></Header>
            <div className={styles.detailInfoRoot}>
                <DetailOrderInfo DetailOrderInfo={state}/>
            </div>
        </div>
    )
};

export default DetailInfo;