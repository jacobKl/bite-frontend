import React from 'react'
import { Link } from 'react-router-dom';

function TrainerHeader() {
  return (
    <header className="trainer-navbar">
      <Link to="/" className="trainer-navbar-brand">CoursedUp!</Link>
      <div className="trainer-navbar-menu">
        <Link to="/add">Dodaj kurs</Link>
        <Link to="/logout" className="logout">Wyloguj</Link>
      </div>
    </header>
  )
}

export default TrainerHeader