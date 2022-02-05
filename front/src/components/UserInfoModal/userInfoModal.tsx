import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { userNickNameInfo } from 'recoil/account/states';
import styles from './userInfoModal.module.scss';

const UserInfoModal = () => {
    const setUserNickname = useSetRecoilState(userNickNameInfo);
    const navigate = useNavigate();

    const onClickMyOrderList = useCallback(()=>{
        navigate('/myorderList');
    },[navigate]);
    return(
        <div className={styles.userInfoModal}> 
            <div className={styles.userInfoModal_mypage}>
                마이페이지
            </div>
            <div className={styles.userInfoModal_content}>
                <div className={styles.myInfo}>
                    내정보
                </div>
                <div className={styles.myOrderList} onClick={onClickMyOrderList}>
                    거래내역
                </div>
                <div className={styles.inquireList}>
                    문의내역
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.userInfoModal_logout} onClick={()=>{setUserNickname("")}}>
                로그아웃
            </div>
        </div>
    );
};

export default UserInfoModal;