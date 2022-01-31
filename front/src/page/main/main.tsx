import React from 'react';
import styles from './main.module.scss';
import Header from '../../components/Header/header';
import Login from '../../components/Login/login';
import MainTitle from '../../components/MainTitle/mainTitle';

function main() {
  return (
    <>
      <Header/>
      <div className={styles.mainRoot}>
        <MainTitle/>
        <div>
          <img alt= "mainLogo" src="/ajou.png"/>
        </div>
        <Login />
      </div>
    </>
  );
}

export default main;
