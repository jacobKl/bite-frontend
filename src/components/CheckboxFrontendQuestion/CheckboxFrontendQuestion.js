import React from 'react'

function CheckboxFrontendQuestion({question, onSuccess, onWrong}) {

  const onChange = (valid) => {
    if (valid) {
        onSuccess();
    } else {
        onWrong();
    }
  }
  
  return (
    <div className="m3 shadow rounded p-3 bg-white">
      <h6 className="mb-0 fw-bold">{question.question}</h6>
      {
          question.answers.map((answer) => (
              <div className="d-flex align-items-center">
                <input type="checkbox" className="form-check-input m-0 me-2" selected="false" onChange={() => onChange(answer.valid)} />
                <p className="mb-0 mt-1">{answer.answer}</p>
              </div>
          ))
      }
    </div>
  )
}

export default CheckboxFrontendQuestion