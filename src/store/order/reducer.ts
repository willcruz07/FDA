import { IOrder } from "../../models/order";
import { EOrderTypes, TOrderActions, IOrderState } from "./types";

export const orderInitialState: IOrderState = {
    loading: false,
    error: false,
    data: {} as IOrder,    
}

export const orderReducer = (state: IOrderState, action: TOrderActions): IOrderState => {
    switch (action.type) {
        case EOrderTypes.ORDER_CLEAR:
            return {
                ...orderInitialState
            };

        case EOrderTypes.ORDER_FAILURE: 
            return {
                ...state,
                loading: false,
                error: true,                
            };

        case EOrderTypes.ORDER_START: 
            return {
                ...orderInitialState
            };
        
        case EOrderTypes.ORDER_SUCCESS: 
            return {
                ...state,
                data: action.payload                
            };    
            
        case EOrderTypes.ORDER_UPDATE: 
            return {
                ...state,
                data: action.payload                
            };        
                
                
        default: state;
    }   
    return state;
}