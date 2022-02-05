import CurrentMyOrder from 'components/CurrentMyOrder/CurrentMyOrder';
import Header from 'components/Header/header';
import React from 'react';
import styles from './myorder.module.scss';

const MyOrder = () => {
    return(
        <>
            <Header></Header>
            <div className={styles.myOrderRoot}>
                <CurrentMyOrder/>
            </div>
        </>
    )
};

export default MyOrder;