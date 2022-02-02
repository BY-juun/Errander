import React,{ useCallback } from 'react';
import { useNavigate } from 'react-router';
import styles from './mainContent.module.scss';

const MainContent = () => {
    const navigate = useNavigate();
    const gotoList = useCallback(()=>{
        navigate('/list');
    },[navigate]);
    const gotoRegisger = useCallback(()=>{
        navigate('/register')
    },[navigate]);
    const gotoMyOrder = useCallback(()=>{
        navigate('/myorder')
    },[navigate]);
    const gotoInquire = useCallback(()=>{
        navigate('/inquire')
    },[navigate]);
    
    return(
        <>
            <div className={styles.mainContentRoot}>
                <div className={styles.mainContentRoot_item} onClick={gotoList}>
                    <div className={styles.itemTitle}>
                        배달 목록 확인하기
                    </div>
                    <div className={styles.itemDescription}>
                        기숙사 사생들이 신청한 배달 목록을 확인해보세요!
                    </div>
                </div>
                <div className={styles.mainContentRoot_item} onClick={gotoRegisger}>
                    <div className={styles.itemTitle}>
                        배달 대행 신청하기
                    </div>
                    <div className={styles.itemDescription}>
                        기숙사 사생들에게 배달 대행을 신청해보세요!
                    </div>
                </div>

                <div className={styles.mainContentRoot_item} onClick={gotoMyOrder}>
                    <div className={styles.itemTitle}>
                        내 주문 확인하기
                    </div>
                    <div className={styles.itemDescription}>
                        내가 신청한 배달을 확인할 수 있습니다!
                    </div>
                </div>
                <div className={styles.mainContentRoot_item} onClick={gotoInquire}>
                    <div className={styles.itemTitle}> 
                        문의하기
                    </div>
                    <div className={styles.itemDescription}>
                        불편한점이나 문의사항을 알려주세요!
                    </div>
                </div>

            </div>
        </>
    )
};

export default MainContent;