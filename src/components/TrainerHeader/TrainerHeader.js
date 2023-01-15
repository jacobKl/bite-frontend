import React from 'react'
import { Link } from 'react-router-dom';
import WithContext from '../../hoc/WithContext';
import Cookies from 'universal-cookie'

function TrainerHeader({ state, dispatch }) {

  const cookies = new Cookies()
  const destroySession = () => {
    dispatch({ type: 'DESTROY_USER' })
    cookies.remove("token")
  }

  return (
    <header className="trainer-navbar">
      <Link to="/" className="trainer-navbar-brand">Learn<span className="text-primary">Able</span></Link>
      <div className="trainer-navbar-menu">
        <Link to="/add">Dodaj kurs</Link>
        <button onClick={destroySession} className="logout btn btn-danger">Wyloguj</button>
      </div>
    </header>
  )
}

export default WithContext(TrainerHeader);