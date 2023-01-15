import React, { useState } from 'react'

function  BasicFrontendQuestion({question, onSuccess, onWrong}) {
  
  const [answer, setAnswer] = useState('');

  const onSubmit = () => {
    if (answer == question.answer) {
        onSuccess();
    } else {
        onWrong();
    }
  }

  return (
    <div className="m3 shadow rounded p-3 bg-white">
      <h6 className="mb-0 fw-bold">{question.question}</h6>
      <div className="d-flex">
        <input type="text" value={answer} onInput={e => setAnswer(e.target.value)} className="input m-0" placeholder="Odpowiedź" />
        <button onClick={onSubmit} className="btn btn-primary">Odpowiedz</button>
      </div>
    </div>
  )
}

export default  BasicFrontendQuestion