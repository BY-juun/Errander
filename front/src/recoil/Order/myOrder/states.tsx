import { atom, selector } from "recoil";
import { CurrentOrderInfo, OrderInfo } from "types/types";
import { customAxios } from "Util/customAxios";

export const getCurrentMyOrder = selector({
  key: "getCurrentMyOrder",
  get: async ({}) => {
    const res = await customAxios("/myorder");
    return res.data;
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
