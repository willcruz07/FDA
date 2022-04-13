import { IOrder } from "../../models/order";

export enum EOrderTypes {
    ORDER_REQUEST = "@order/REQUEST",
    ORDER_UPDATE = "@order/UPDATE",
    ORDER_SUCCESS = "@order/SUCCESS",
    ORDER_FAILURE = "@order/FAILURE",
    ORDER_CLEAR = "@order/CLEAR",    
    ORDER_START = "@order/START",
}


export type TOrderActions = 
{ 
    type: EOrderTypes.ORDER_SUCCESS, 
    payload: IOrder,
} |
{ 
    type: EOrderTypes.ORDER_START     
} |
{ 
    type: EOrderTypes.ORDER_FAILURE,     
} |
{ 
    type: EOrderTypes.ORDER_CLEAR,     
} |
{ 
    type: EOrderTypes.ORDER_UPDATE,     
    payload: IOrder;
};


export interface IOrderState {
    data: IOrder;
    loading: boolean;
    error: boolean;
}