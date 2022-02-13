import { atom, selector } from "recoil";
import { OrderInfo } from "types/types";
import { customAxios } from "Util/customAxios";

export const entireOrderInfo = selector({
  //나중에 selector로 비동기 처리로 바꿔야한다.
  key: "entireOrderInfo",
  get: async ({ get }) => {
    const res = await customAxios.get("/order");
    console.log(res);
    return res.data;
  },
});
