import Header from 'components/Header/header';
import ShowData from 'components/ShowData/ShowData';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { entireOrderInfo } from 'recoil/Order/entireOrder/states';
import styles from './list.module.scss';

const List = () => {
    const EntireOrderInfo = useRecoilValue(entireOrderInfo);
    return(
        <>
            <Header></Header>
            <div className={styles.listRoot}>
                <ShowData dataList={EntireOrderInfo} isEntireOrder = {true}/>
            </div>
        </>
    )
};

export default List;