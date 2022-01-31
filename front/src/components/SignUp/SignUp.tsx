import React, { useCallback, useEffect, useState, VFC } from 'react';
import useInput from '../../Util/hooks/useInput';
import styles from './SignUp.module.scss';

const SignUp : VFC = () => {
    const [id,,onChangeId] = useInput("");
    const [nickname,,onChangeNickname] = useInput("");
    const [pwd,,onChangPwd] = useInput("");
    const [pwdCheck, , onChnagePwdCheck] = useInput("");
    const [check, setCheck] = useState(false);

    useEffect(()=>{
        if(pwdCheck === pwd) setCheck(true);
        else setCheck(false);
    },[pwdCheck,pwd]);

    const onSubmit = useCallback((e)=>{
        //비동기 요청
        e.preventDefault();
        if(!check){
            alert("비밀번호를 다시 확인해주세요");
            return;
        }
        console.log(id);
        console.log(pwd);
        console.log(pwdCheck);
    },[id,pwd,pwdCheck,check])

    const checkNickname = useCallback(()=>{
        //비동기 요청을 통한 닉네임 중복 체크
    },[nickname]);

    return(
        <>
        <form onSubmit={onSubmit} className={styles.signUpBox}>
            <div>
                <input placeholder="아이디" value={id} onChange={onChangeId}/>
            </div>
            <div className={styles.nicknameArea}>
                <input placeholder="닉네임" value={nickname} onChange={onChangeNickname}/>
                <button onClick={checkNickname}>중복확인</button>
            </div>
            <div>
                <input placeholder="비밀번호" type="password" value={pwd} onChange={onChangPwd}/>
            </div>
            <div>
                <input placeholder="비밀번호 확인" type="password" value={pwdCheck} onChange={onChnagePwdCheck}/>
            </div>
            {!check && <div className={styles.checkMsg}>비밀번호와 비밀번호 확인이 일치하지 않습니다.</div>}
            <div>
                <button className={styles.signUpBtn}>회원가입</button>
            </div>
        </form>
        </>
    )
}

export default SignUp;