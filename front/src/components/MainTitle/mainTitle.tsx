import React, { VFC } from 'react'
import styles from './mainTitle.module.scss';

const mainTitle : VFC = () => {
    return(
        <>
            <div className={styles.mainTitle}>
                Errander
            </div>
            <div className={styles.mainDescription}>
                아주대학교 기숙사 배달대행 서비스
            </div>
        </>
    )
};

export default mainTitle;