import { IApplicationState, TApplicationActions } from "../store/application/types";
import { IOrderState, TOrderActions } from "../store/order/types";

type TAppActions = TOrderActions | TApplicationActions;

interface IAppState {
    order: IOrderState;
    application: IApplicationState;
}

export interface IAppContextModel {
    state: IAppState;
    dispatch: React.Dispatch<TAppActions>
}
