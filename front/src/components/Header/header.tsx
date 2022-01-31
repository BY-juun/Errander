import React, { VFC } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
const Header : VFC = () => {
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
            </div>
        </div>
    )
}

export default Header;