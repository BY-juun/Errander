import React, { VFC } from 'react';
import Header from '../../components/Header/header';

const findAccount : VFC = () => {
    return(
        <>
        <Header></Header>
        <div style={{marginTop : "300px",textAlign:"center"}}>아이디 비밀번호 찾기</div>
        </>
    )
};

export default findAccount;