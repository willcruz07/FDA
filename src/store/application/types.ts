import { IApplication } from "../../models/application";

export enum EApplicationTypes {
    Application_REQUEST = "@application/REQUEST",
    Application_SUCCESS = "@application/SUCCESS",
    Application_FAILURE = "@application/FAILURE",
    Application_CLEAR = "@application/CLEAR",    
}

export type TApplicationActions = 
{ 
    type: EApplicationTypes.Application_SUCCESS, 
    payload: IApplication,
} |
{ 
    type: EApplicationTypes.Application_CLEAR     
} |
{ 
    type: EApplicationTypes.Application_FAILURE,     
} |
{ 
    type: EApplicationTypes.Application_REQUEST,     
};

export interface IApplicationState {
    data: IApplication;
    loading: boolean;
    error: boolean;
}