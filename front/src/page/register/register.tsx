import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Header from 'components/Header/header';
import PickUpPos from 'components/pickUpPos/pickUpPos';
import React, { useCallback, useState } from 'react';
import styles from './register.module.scss';




const Register = () => {
    const [classification, setClassification] = useState("");
    const [step, setStep] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    
    //현재 위치정보
    const handleChange = useCallback((e)=>{
        setClassification(e.target.value);
    },[])

    const gotoNextStep = useCallback(()=>{
        setStep(2);
    },[step]);
    return(
        <>
            <Header></Header>
            <div className={styles.registerRoot}>
                {step === 1 
                ?  
                <>
                <div className={styles.title}>주문서 작성</div>
                <div className={styles.registerContent}>
                    <div className={styles.classification}>
                        <div>분류</div>
                        <div>
                            <FormControl style={{width : "260px", textAlign:"start"}}>
                            <InputLabel>품목</InputLabel>
                                <Select
                                label="품목"
                                onChange={handleChange}
                                value={classification}
                                >
                                    <MenuItem value={"식품"}>식품</MenuItem>
                                    <MenuItem value={"생활용품"}>생활용품</MenuItem>
                                    <MenuItem value={"기타"}>기타</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className={styles.detailItem}>
                        <div>상세품목</div>
                        <input></input>
                    </div>
                    <div className={styles.deliveryPrice}>
                        <div>배달비</div>
                        <input></input>
                    </div>
                    <div className={styles.requirements}>
                        <div>추가 요청 사항</div>
                        <textarea></textarea>
                    </div>
                    <div className={styles.nextBtn}>
                        <button onClick={gotoNextStep}>다음</button>
                    </div>
                </div>
                </>
                :
                <>
                <PickUpPos/>
                </>
                }
                
            </div>
        </>
    )
};

export default Register;