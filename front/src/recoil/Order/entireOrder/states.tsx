import { atom } from "recoil";
import { OrderInfo } from "types/types";

export const entireOrderInfo = atom<Array<OrderInfo>>({ //나중에 selector로 비동기 처리로 바꿔야한다.
    key : 'entireOrderInfo',
    default : [
        {
            orderIdx : 1,
            date : "2022.02.12",
            classification : "식품",
            detail : "콜라",
            deliveryPrice : 2000,
            additionalRequest : "조심히 와주세요",
            pickUpTime : new Date(),
            pickUpPos : {La: 37.29635415391546,Ma: 126.99141714387821}
        }, 
        {
            orderIdx : 2,
            date : "2022.01.19",
            classification : "생활용품",
            detail : "휴지",
            deliveryPrice : 2000,
            additionalRequest : "올때 벨 누르세요",
            pickUpTime : new Date(),
            pickUpPos : {La: 37.38976025620987,Ma:126.88013295659034}
        }, 
        {
            orderIdx : 3,
            date : "2022.02.12",
            classification : "기타",
            detail : "담배",
            deliveryPrice : 2000,
            additionalRequest : "숫가락빼세요",
            pickUpTime : new Date(),
            pickUpPos : {La:37.376688139216085,Ma:127.071676746512}
        }, 
        {
            orderIdx : 4,
            date : "2022.02.12",
            classification : "식품",
            detail : "콜라",
            deliveryPrice : 2000,
            additionalRequest : "조심히 와주세요",
            pickUpTime : new Date(),
            pickUpPos : {La:35.93664918431931 ,Ma:126.99141714387821}
        }, 
        {
            orderIdx : 5,
            date : "2022.02.12",
            classification : "기타",
            detail : "사이다",
            deliveryPrice : 2000,
            additionalRequest : "글쎄요",
            pickUpTime : new Date(),
            pickUpPos : {La:36.90094530174807 ,Ma:126.53377525355278}
        }, 
        {
            orderIdx : 6,
            date : "2022.02.12",
            classification : "생활용품",
            detail : "물티슈",
            deliveryPrice : 2000,
            additionalRequest : "안녕하세요",
            pickUpTime : new Date(),
            pickUpPos : {La: 35.93664918431931,Ma:126.70373361430727}
        }, 
    ],    
})