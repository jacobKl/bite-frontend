import React from 'react'
import { Link } from 'react-router-dom';

function TrainerHeader() {
  return (
    <header className="navbar trainer-navbar shadow px-3 py-1 rounded">
      <div className="navbar-brand">CoursedUp!</div>

        <nav className="navbar-nav">
          <div className="nav-item">
            <Link className="nav-link" to="/courses">Twoje szkolenia</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/add">Dodaj szkolenie</Link>
          </div>
          <div className="nav-item">
            <button class="btn btn-light">Wyloguj</button>
          </div>
        </nav>
    </header>
  )
}

export default TrainerHeader