import { rest } from "msw";
import { baseUrl } from "Util/baseUrl";

export const myOrderHandlers = [
  rest.get(`${baseUrl}/myorder`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          data: {
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
        },
      ])
    );
  }),
];
