import { IApplication } from "../../models/application";
import { EApplicationTypes, IApplicationState, TApplicationActions } from "./types";

export const applicationInitialState: IApplicationState = {
    loading: false,
    error: false,
    data: {
        company: {
            cpf: "134.657.467-75",
            name: "Wellen Cruz",
        }
    } as IApplication,    
}

export const applicationReducer = (state: IApplicationState, action: TApplicationActions): IApplicationState => {
    switch (action.type) {
        case EApplicationTypes.Application_CLEAR:
            return {
                ...applicationInitialState
            };

        case EApplicationTypes.Application_FAILURE: 
            return {
                ...state,
                loading: false,
                error: true,                
            };

        case EApplicationTypes.Application_REQUEST: 
            return {
                ...state,
                loading: true,                
            };
        
        case EApplicationTypes.Application_SUCCESS: 
            return {
                ...state,
                data: action.payload                
            };        
                
        default: state;
    }   
    return state;
}