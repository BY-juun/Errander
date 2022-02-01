import React from 'react';
import styles from './main.module.scss';
import Header from 'components/Header/header';
import Login from 'components/Login/login';
import MainTitle from 'components/MainTitle/mainTitle';
import { useRecoilValue } from 'recoil';
import { userNickNameInfo } from 'recoil/account/states';
import { useEffect } from 'react';
import MainContent from 'components/MainContent/mainContent';

function Main() {
  const userNickName = useRecoilValue(userNickNameInfo);
  useEffect(()=>{
    console.log(userNickName);
  },[userNickName])
  return (
    <>
      <Header/>
      <div className={styles.mainRoot}>
        <MainTitle/>
        <div>
          <img alt= "mainLogo" src="/ajou.png"/>
        </div>
        {userNickName
        ? <div className={styles.contentWrapper}>
            <MainContent/>
          </div>
        : <Login />
          }
        
      </div>
    </>
  );
}

export default Main;
