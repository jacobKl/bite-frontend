import React from 'react'

function LoginScreen() {
  return (
    <main className="w-100 h-100 d-flex align-items-center justify-content-center">
        <form class="d-flex flex-column paper text-center">
            <h3>Witaj!</h3>
            <input type="text" name="username" class="form-control mb-1" placeholder="Nazwa uzytkownika"/>
            <input name="password" className="form-control mb-1" type="password" placeholder="Hasło     " />
            <input type="submit" className="button"/>
        </form>
    </main>
  )
}

export default LoginScreen