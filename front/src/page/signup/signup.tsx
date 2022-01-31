import React, { VFC } from 'react';
import Header from '../../components/Header/header';
import MainTitle from '../../components/MainTitle/mainTitle';
import SignUp from '../../components/SignUp/SignUp';
import styles from './signUp.module.scss';

const signUp : VFC = () => {
    return(
        <>
        <Header></Header>
        <div className={styles.signUp}>
            <MainTitle/>
            <SignUp/>
        </div>  
        </>
    )
};

export default signUp;