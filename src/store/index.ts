import { applicationInitialState, applicationReducer } from "./application/reducer";
import { orderInitialState, orderReducer } from "./order/reducer";

const combineReducer = (reducers: any) => {
    return (state: any = {}, action: any) => {
        const newState: any = {};
        for (let key in reducers) {
            newState[key] = reducers[key](state[key], action);
        }
        return newState;
    }
}

export const mainReducer = combineReducer({
    order: orderReducer,
    application: applicationReducer,
});

export const mainInitialState = {
    order: orderInitialState,
    application: applicationInitialState
};
