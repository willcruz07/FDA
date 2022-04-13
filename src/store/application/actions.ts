import { IApplication } from "../../models/application";
import { EApplicationTypes, TApplicationActions,  } from "./types";

export const applicationRequest = (): TApplicationActions => ({
    type: EApplicationTypes.Application_REQUEST
})

export const applicationSuccess = (data: IApplication): TApplicationActions => ({
    type: EApplicationTypes.Application_SUCCESS,
    payload: data,
})