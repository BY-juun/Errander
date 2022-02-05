import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import useInput from 'Util/hooks/useInput';
import styles from './InquireForm.module.scss';

const InquireFrom = () => {
    const [title, ,onChnageTitle] = useInput("");
    const [content, ,onChangeContent] = useInput("");
    const navigate = useNavigate();

    const onClickSubmitBtn = useCallback(()=>{
        if(title === ""){
            alert("제목을 입력해주세요.");
            return;
        }
        if(content === ""){
            alert("내용을 입력해주세요.");
            return;
        }
        alert("접수가 완료되었습니다.");
        navigate('/');
    },[content, navigate, title]);

    return(
        <div className={styles.inquireForm}>
            <div className={styles.inquireForm_mainTitle}>문의사항</div>
            <div className={styles.inquireForm_mainDescription}>불편한점이나 문의사항을 알려주세요!</div>
            <div className={styles.inquireForm_title}>제목을 입력해주세요.</div>
            <div className={styles.inquireForm_titleInput}>
                <input value={title} onChange={onChnageTitle}/>
            </div>
            <div className={styles.inquireForm_detailInfo}>상세내용</div>
            <div className={styles.inquireForm_detailInput}>
                <textarea value={content} onChange={onChangeContent}/>
            </div>
            <div className={styles.inquireForm_submitBtn}>
                <button onClick={onClickSubmitBtn}>제출</button>
            </div>
        </div>
    )
};

export default InquireFrom;