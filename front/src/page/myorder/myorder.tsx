import Header from 'components/Header/header';
import ShowData from 'components/ShowData/ShowData';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { myOrderInfo } from 'recoil/Order/myOrder/states';
import styles from './myorder.module.scss';

const MyOrder = () => {
    const MyOrderInfo = useRecoilValue(myOrderInfo);
    return(
        <>
            <Header></Header>
            <div className={styles.myorderRoot}>
                <ShowData dataList={MyOrderInfo}/>
            </div>
        </>
    )
};

export default MyOrder;