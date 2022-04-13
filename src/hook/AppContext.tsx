import React from 'react';
import { IAppContextModel } from '../models/appContext';
import { mainInitialState, mainReducer } from '../store';

const AppContext = React.createContext({} as IAppContextModel);

export const AppProvider: React.FC = ({children}) => {
    const [state, dispatch] = React.useReducer(mainReducer, mainInitialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = (): IAppContextModel => {
    const context = React.useContext(AppContext);
    return context;
}