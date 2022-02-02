
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Header from 'components/Header/header';
import PickUpPos from 'components/pickUpPos/pickUpPos';
import React, { useCallback, useEffect, useState } from 'react';
import useInput from 'Util/hooks/useInput';
import styles from './register.module.scss';




const Register = () => {
    const [classification, setClassification] = useState<string>("");
    const [detail,, onChangeDetail] = useInput(""); 
    const [deliveryPrice,, onChangeDeliveryPrice] = useInput("");
    const [additionalRequest,, onChangeAdditionalRequest] = useInput("");
    const [step, setStep] = useState(1);
    const [pickUpPos, setPickUpPos] = useState({La:0,Ma:0});

    const handleChange = useCallback((e)=>{
        setClassification(e.target.value);
    },[])

    const gotoNextStep = useCallback(()=>{
        if(!detail || !deliveryPrice || !classification){
            alert("추가 요구사항을 제외한 모든 항목을 작성해주세요.");
            return;
        }
        setStep(2);
    },[detail,deliveryPrice,classification]);

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
                        <input value={detail} onChange={onChangeDetail}></input>
                    </div>
                    <div className={styles.deliveryPrice}>
                        <div>배달비</div>
                        <input type="number" placeholder='숫자만 입력해주세요.' value={deliveryPrice} onChange={onChangeDeliveryPrice}></input>
                    </div>
                    <div className={styles.requirements}>
                        <div>추가 요청 사항</div>
                        <textarea value={additionalRequest} onChange={onChangeAdditionalRequest}></textarea>
                    </div>
                    <div className={styles.nextBtn}>
                        <button onClick={gotoNextStep} >다음</button>
                    </div>
                </div>
                </>
                :
                <>
                <PickUpPos setPickUpPos={setPickUpPos} 
                classification = {classification} 
                detail={detail} 
                deliveryPrice={deliveryPrice}
                pickUpPos={pickUpPos}/>
                </>
                }
                
            </div>
        </>
    )
};

export default Register;