import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function WithContext(Component) {
    return function ContextRenderer (props) {
    const { state, dispatch } = useContext(AppContext);
    return <Component state={state} {...props} dispatch={dispatch} />
  }
}

export default WithContext