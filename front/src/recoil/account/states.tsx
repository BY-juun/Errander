import { atom } from "recoil";

export const userNickNameInfo = atom<any>({
  key: "userNickNameInfo",
  default: localStorage.getItem("nickname"),
});
