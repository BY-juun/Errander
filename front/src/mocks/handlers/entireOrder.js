import { rest } from "msw";
import { baseUrl } from "Util/baseUrl";

export const entireOrderHandlers = [
  rest.get(`${baseUrl}/order`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          data: [
            {
              UserId: 5,
              additionalRequest: "조심히 오세요",
              classification: "식품",
              date: "2022-02-13T11:01:40.000Z",
              deliveryPrice: 1000,
              detail: "과자",
              id: 1,
              pickUpPosLa: 126.99,
              pickUpPosMa: 37.2979,
              pickUpTime: "2022-02-13T11:01:14.000Z",
            },
            {
              UserId: 5,
              additionalRequest: "123",
              classification: "식품",
              date: "2022-02-13T15:38:08.000Z",
              deliveryPrice: 2000,
              detail: "코카콜라",
              id: 4,
              pickUpPosLa: 127.046,
              pickUpPosMa: 37.2848,
              pickUpTime: "2022-02-13T15:37:24.000Z",
            },
          ],
        },
      ])
    );
  }),
];
