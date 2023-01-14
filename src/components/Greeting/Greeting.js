import React from 'react'

function Greeting({user}) {
  console.log(user)
  return (
    <div className="shadow p-3 bg-white d-flex mb-3">
      <div className="col-2 rounded-circle">
        <img src={`${user.avatar}`} />
      </div>
      <div className="col-4">
        <h5 className="text-muted">@{user.nick}</h5>
        <h3>Witaj {user.name} {user.surname}</h3>
        <h6 className="text-muted">Rola: {user.role}</h6>
      </div>
    </div>
  )
}

export default Greeting