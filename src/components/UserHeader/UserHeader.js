import React from 'react'
import { Link } from 'react-router-dom';
import WithContext from '../../hoc/WithContext';
import Cookies from 'universal-cookie'

function UserHeader({ state, dispatch }) {
  const cookies = new Cookies()
  const destroySession = () => {
    dispatch({ type: 'DESTROY_USER' })
    cookies.remove("token")
  }

  return (
    <header className="trainer-navbar">
      <Link to="/" className="trainer-navbar-brand">Learn<span className="text-primary">Able</span></Link>
      <div className="trainer-navbar-menu">
        <button onClick={destroySession} className="logout btn btn-danger">Wyloguj <i class="fa-solid fa-right-from-bracket"></i></button>
      </div>
    </header>
  )
}

export default WithContext(UserHeader);