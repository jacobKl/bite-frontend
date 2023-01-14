import React from 'react'
import { Link } from 'react-router-dom';
import WithContext from '../../hoc/WithContext';
import submitForm from '../../utils/submitForm';

function LoginScreen({ state, dispatch }) {
  return (
    <main style={{minHeight: "100vh"}} className="w-100 h-100 d-flex align-items-center justify-content-center">
      <form onSubmit={(e) => submitForm(e, "login", dispatch, state.user.token)} className="d-flex flex-column rounded bg-white shadow text-center p-5">
        <h5>Learn<span className="text-primary">Able</span></h5>
        <h1>Witaj ponownie!</h1>
        <input type="text" name="username" className="input mb-1" placeholder="Nazwa użytkownika" />
        <input name="password" className="input mb-1" type="password" placeholder="Hasło" />
        <input type="submit" className="btn btn-primary" value="Wyślij" />
        <Link to="/register" className="btn btn-link mb-0">Zarejestruj się</Link>
      </form>
    </main>
  )
}

export default WithContext(LoginScreen)