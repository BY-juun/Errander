import React from 'react';
import { useSetRecoilState } from 'recoil';
import { userNickNameInfo } from 'recoil/account/states';
import styles from './userInfoModal.module.scss';

const UserInfoModal = () => {
    const setUserNickname = useSetRecoilState(userNickNameInfo);
    return(
        <div className={styles.userInfoModal}> 
            <div className={styles.userInfoModal_mypage}>
                마이페이지
            </div>
            <div className={styles.userInfoModal_content}>
                <div>
                    내정보
                </div>
                <div>
                    거래내역
                </div>
                <div>
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