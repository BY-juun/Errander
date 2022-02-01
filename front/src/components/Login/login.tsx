import React, { useCallback, VFC } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import {userNickNameInfo} from 'recoil/account/states';
import useInput from 'Util/hooks/useInput';
import styles from './login.module.scss';

const Login : VFC = () => {
    const [id,, onChangeId] = useInput("");
    const [pwd,, onChangPwd] = useInput("");
    const setUserNickname = useSetRecoilState(userNickNameInfo);

    const onSubmit = useCallback((e)=>{
        //로그인 정보를 포함한 비동기 요청
        e.preventDefault();
        console.log(id);
        console.log(pwd);
        setUserNickname("병준");
    },[id,pwd,setUserNickname]);

    return(
        <form className={styles.login} onSubmit={onSubmit}>
            <div className={styles.login_input}>
                <input placeholder="ID(이메일 주소)" value={id} onChange={onChangeId}/>
            </div>
            <div className={styles.login_input}>
                <input placeholder="PASSWORD" value={pwd} onChange={onChangPwd}/>
            </div>
            <div>
                <button className={styles.login_button}>로그인</button>
            </div>
            <div className={styles.singUpFind}>
                <Link to='/signUp'><button className={styles.signupbutton}>회원가입</button></Link>
                <div className={styles.divider}>|</div>
                <Link to='/findAccount'><button>ID/PW찾기</button></Link>
            </div>
        </form>
    )
}

export default Login;