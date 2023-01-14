import React from 'react'
import WithContext from '../../hoc/WithContext';
import submitForm from '../../utils/submitForm';

function LoginScreen({ state, dispatch }) {
  return (
    <main className="w-100 h-100 d-flex align-items-center justify-content-center">
      <form onSubmit={(e) => submitForm(e, "login", dispatch)} className="d-flex flex-column paper text-center">
        <h3>Witaj!</h3>
        <input type="text" name="username" classnName="form-control mb-1" placeholder="Nazwa uzytkownika" />
        <input name="password" className="form-control mb-1" type="password" placeholder="Hasło     " />
        <input type="submit" className="button" value="Wyślij" />
      </form>
    </main>
  )
}

export default WithContext(LoginScreen)