import React, { useState, VFC,useCallback,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userNickNameInfo } from 'recoil/account/states';
import styles from './header.module.scss';
import {AiFillCaretDown} from 'react-icons/ai';
import UserInfoModal from 'components/UserInfoModal/userInfoModal';
const Header : VFC = () => {
    const userNickName = useRecoilValue(userNickNameInfo);
    const [userInfoModal, setUserInfoModal] = useState(false);

    const onClickUserInfo = useCallback(()=>{
        setUserInfoModal(!userInfoModal);
    },[userInfoModal]);

    useEffect(()=>{
        setUserInfoModal(false);
    },[userNickName])

    return (
        <div className={styles.header}>
            <Link to="/">
                <button className={styles.header_title}>
                    Home
                </button>
            </Link>
            <div className={styles.header_menu}>
                <button>
                    주문목록
                </button>
                <button>
                    공지사항
                </button>
                {userNickName && 
                    <div className={styles.header_userNickname}>
                        <div className={styles.info} onClick={onClickUserInfo}>
                            {userNickName} 님
                            <AiFillCaretDown />
                        </div>
                        {userInfoModal && 
                            <div className={styles.infomodal}>
                                <UserInfoModal />
                            </div>
                        }
                        
                    </div>
                }
            </div>
        </div>
    )
}

export default Header;