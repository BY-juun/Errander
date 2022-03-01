import { atom, selector } from "recoil";
import { OrderInfo } from "types/types";
import { customAxios } from "Util/customAxios";

export const entireOrderInfo = selector({
  key: "entireOrderInfo",
  get: async ({ get }) => {
    const res = await customAxios.get("/order");
    console.log(res);
    return res.data;
  },
});
