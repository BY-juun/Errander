import Header from 'components/Header/header';
import ShowData from 'components/ShowData/ShowData';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { myOrderInfo } from 'recoil/Order/myOrder/states';
import styles from './myorderList.module.scss';

const MyOrderList = () => {
    const MyOrderInfo = useRecoilValue(myOrderInfo);
    return(
        <>
            <Header></Header>
            <div className={styles.myorderRoot}>
                <ShowData dataList={MyOrderInfo} isEntireOrder={false}/>
            </div>
        </>
    )
};

export default MyOrderList;