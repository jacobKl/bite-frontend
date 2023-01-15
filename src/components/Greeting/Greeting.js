import React from 'react'
import WithContext from '../../hoc/WithContext';

function Greeting({ state }) {
  return (
    <div className="shadow p-3 bg-white d-flex mb-3">
      <div className="col-2 rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{height: "150px", width: "150px"}}>
        <i class="fa-solid fa-user" style={{color: "white", fontSize: "6rem"}}></i>
      </div>
      <div className="col-4 ms-4 d-flex flex-column justify-content-center">
        <h5 className="text-muted">@{state.user.nick}</h5>
        <h3>Witaj {state.user.name} {state.user.surname}</h3>
        <h6 className="text-muted">Rola: {state.user.role == 'Trainer' ? 'Trener' : 'Uczeń'}</h6>
      </div>
    </div>
  )
}

export default WithContext(Greeting)