import React from 'react'
import WithContext from '../../hoc/WithContext'
import submitForm from '../../utils/submitForm'

function RegisterScreen({ state, dispatch }) {
  return (
    <main style={{minHeight: "100vh"}} className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
      <form className="d-flex flex-column bg-white rounded shadow text-center p-5" onSubmit={(e) => submitForm(e, "registery", dispatch)}>
        <h5>Learn<span className="text-primary">Able</span></h5>
        <h1>Dołącz do nas!</h1>
        <input className="input mb-1" placeholder="Nazwa użytkownika" type="text" name="nick" /><br />
        <input className="input mb-1" type="password" placeholder="Hasło" name="password" /><br />
        <input className="input mb-1" type="text" placeholder="Imię" name="name" /><br />
        <input className="input mb-1" type="text" placeholder="Nazwisko" name="surname" /><br />
        <input className="input mb-1" type="email" placeholder="E-mail" name="email" /><br />
        <div className="d-flex align-items-center py-2">
          <input name="isTrainer" type="checkbox" className="form-check-input mt-0 mb-1 me-1" /><br />
          <p className="mb-0">Chcę tworzyć kursy</p>
        </div>
        <input type="submit" value="Wyślij" className="btn btn-primary" />
      </form>
    </main>
  )
}

export default WithContext(RegisterScreen)