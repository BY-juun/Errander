export interface OrderInfo {
  id: number;
  date: string;
  classification: string;
  detail: string;
  deliveryPrice: number;
  additionalRequest: string;
  pickUpTime: Date;
  pickUpPosLa: number;
  pickUpPosMa: number;
}

export interface CurrentOrderInfo {
  id: number;
  step: string;
  date: string;
  classification: string;
  detail: string;
  deliveryPrice: number;
  additionalRequest: string;
  pickUpTime: Date;
  pickUpPosLa: number;
  pickUpPosMa: number;
}
