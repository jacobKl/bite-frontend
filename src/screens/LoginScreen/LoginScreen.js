import React from 'react'

async function submitLogin(e) {
  e.preventDefault();
  let form = e.target;
  console.log(form)
  let formdata = new FormData(form);
  let result = await fetch("http://localhost:3001/user/login", {
    method: "POST",
    body: new URLSearchParams(formdata)
  }).then(res => res.json())
  console.log(result);
}

function LoginScreen() {
  return (
    <main className="w-100 h-100 d-flex align-items-center justify-content-center">
      <form onSubmit={(e) => submitLogin(e)} className="d-flex flex-column paper text-center">
        <h3>Witaj!</h3>
        <input type="text" name="username" class="form-control mb-1" placeholder="Nazwa uzytkownika" />
        <input name="password" className="form-control mb-1" type="password" placeholder="Hasło     " />
        <input type="submit" className="button" value="Wyślij" />
      </form>
    </main>
  )
}

export default LoginScreen