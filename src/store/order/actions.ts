import { IOrder } from "../../models/order";
import { EOrderTypes, TOrderActions } from "./types";

export const orderStart = (): TOrderActions => {        
    return {
        type: EOrderTypes.ORDER_START    
    }
}

export const orderSuccess = (data: IOrder): TOrderActions => ({
    type: EOrderTypes.ORDER_SUCCESS,
    payload: data,
})