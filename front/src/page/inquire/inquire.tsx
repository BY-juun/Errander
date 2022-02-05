import Header from 'components/Header/header';
import InquireFrom from 'components/InquireForm/InquireForm';
import React from 'react';
import styles from './inquire.module.scss';

const Inquire = () => {
    return(
        <>
            <Header></Header>
            <div className={styles.InquireRoot}>
                <InquireFrom></InquireFrom>
            </div>
        </>
    )
};

export default Inquire;