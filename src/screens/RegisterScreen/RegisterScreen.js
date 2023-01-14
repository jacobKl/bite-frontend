import React from 'react'
import WithContext from '../../hoc/WithContext'
import submitForm from '../../utils/submitForm'

function RegisterScreen({ state, dispatch }) {
  return (
    <main className="w-100 h-100 d-flex align-items-center justify-content-center">
      <h3>Witaj!</h3>
      <form className="d-flex flex-column paper text-center" onSubmit={(e) => submitForm(e, "registery", dispatch)}>
        Nick: <input classnName="form-control mb-1" type="text" name="nick" /><br />
        Pass: <input classnName="form-control mb-1" type="password" name="password" /><br />
        Name: <input classnName="form-control mb-1" type="text" name="name" /><br />
        Surname: <input classnName="form-control mb-1" type="text" name="surname" /><br />
        Email: <input classnName="form-control mb-1" type="email" name="email" /><br />
        Trener: <input name="isTrainer" type="checkbox" /><br />
        <input type="submit" value="Wyślij" />
      </form>
    </main>
  )
}

export default WithContext(RegisterScreen)