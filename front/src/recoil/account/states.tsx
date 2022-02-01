import { atom } from "recoil";

export const userNickNameInfo = atom<string>({
    key : 'userNickNameInfo',
    default : '',    
})