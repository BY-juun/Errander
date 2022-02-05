export interface OrderInfo{
    orderIdx : number,
    date : string,    
    classification : string,
    detail : string,
    deliveryPrice : number,
    additionalRequest : string,
    pickUpTime : Date,
    pickUpPos : {La : number,Ma : number},
}