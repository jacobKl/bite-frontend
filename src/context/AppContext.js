import React, { useEffect, useReducer } from 'react'
import { initialState, reducer } from './reducer';

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}



export default AppContextProvider;