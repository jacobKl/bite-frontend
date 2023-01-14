import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function WithContext(Component) {
    return function ContextRenderer () {
    const { state, dispatch } = useContext(AppContext);
    return <Component state={state} dispatch={dispatch} />
  }
}

export default WithContext