import React from 'react'
import { Link } from 'react-router-dom';
import WithContext from '../../hoc/WithContext';

function UserHeader({state, dispatch}) {

  const destroySession = () => {
    dispatch({type: 'DESTROY_USER'})
  }

  return (
    <header className="trainer-navbar">
      <Link to="/" className="trainer-navbar-brand">Learn<span className="text-primary">Able</span></Link>
      <div className="trainer-navbar-menu">
        <button onClick={destroySession} className="logout btn btn-danger">Wyloguj</button>
      </div>
    </header>
  )
}

export default WithContext(UserHeader);