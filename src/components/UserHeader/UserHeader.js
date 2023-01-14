import React from 'react'
import { Link } from 'react-router-dom';

function UserHeader() {
  return (
    <header className="trainer-navbar">
      <Link to="/" className="trainer-navbar-brand">Learn<span className="text-primary">Able</span></Link>
      <div className="trainer-navbar-menu">
        <Link to="/logout" className="logout">Wyloguj</Link>
      </div>
    </header>
  )
}

export default UserHeader