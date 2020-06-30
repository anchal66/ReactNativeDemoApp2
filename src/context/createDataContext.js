import React, {useReducer} from 'react';

export default (reducer, actions, initailState)=>{
    const Context = React.createContext();

    const Provider = ({children})=>{
        const [state, dispatch] = useReducer(reducer, initailState);

        return <Context.Provider value={{state: state, }}>
            {children}
        </Context.Provider>
    }

    return {Context, Provider}
}