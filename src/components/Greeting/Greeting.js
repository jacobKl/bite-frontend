import React from 'react'

function Greeting() {
  return (
    <div className="shadow p-3 bg-white d-flex">
      <div className="col-2 rounded-circle">
        <img src="/" />
      </div>
      <div className="col-8">
        <h5 className="text-muted">@jakubklimek</h5>
        <h3>Witaj Jakub Klimek</h3>
        <h6 className="text-muted">Rola: Trener</h6>
      </div>
    </div>
  )
}

export default Greeting