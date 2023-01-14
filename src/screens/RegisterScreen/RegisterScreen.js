import React from 'react'

function RegisterScreen() {
  return (
    <main className="w-100 h-100 d-flex align-items-center justify-content-center">
        <h3>Witaj!</h3>
        <form>
            <input name="username" />
            <input name="password" type="password" />
            <input type="submit" />
        </form>
    </main>
  )
}

export default RegisterScreen