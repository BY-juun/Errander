import { atom } from "recoil";
import { CurrentOrderInfo, OrderInfo } from "types/types";

export const currentMyOrder = atom<CurrentOrderInfo>({
  key: "currentMyOrder",
  default: {
    id: 10,
    step: "수락대기중",
    date: "2022.02.24",
    classification: "기타",
    detail: "새우깡 한개, 코카콜라 2개, 아몰랑",
    deliveryPrice: 1000,
    additionalRequest: "김수한무 거북이와 두루미 삼천갑자 동방삭asdfsdaf1as1f35s1ad56f165sad1f561sa56f156as1f56",
    pickUpTime: new Date("Sun Feb 06 2022 03:08:37 GMT+0900 (한국 표준시)"),
    pickUpPosLa: 37.28534,
    pickUpPosMa: 127.02444,
  },
});

export const myOrderInfo = atom<Array<OrderInfo>>({
  //나중에 selector로 비동기 처리로 바꿔야한다.
  key: "myOrderInfo",
  default: [
    {
      id: 1,
      date: "2022.02.12",
      classification: "식품",
      detail: "콜라",
      deliveryPrice: 2000,
      additionalRequest: "조심히 와주세요",
      pickUpTime: new Date(),
      pickUpPosLa: 37.29635415391546,
      pickUpPosMa: 126.99141714387821,
    },
    {
      id: 2,
      date: "2022.01.19",
      classification: "생활용품",
      detail: "휴지",
      deliveryPrice: 2000,
      additionalRequest: "올때 벨 누르세요",
      pickUpTime: new Date(),
      pickUpPosLa: 37.38976025620987,
      pickUpPosMa: 126.88013295659034,
    },
  ],
});
