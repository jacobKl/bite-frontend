import React from 'react'
import WithContext from '../../hoc/WithContext';
import Input from '../Input/Input';

function CheckboxQuestion({state, dispatch, question, id}) {

  const markProperQuestion = (id, optionId) => {
    dispatch({type: 'MARK_PROPER_CHECKBOX_ANSWER', payload: {id: id, optionId: optionId}})
  }

  const alterCheckboxAnswer = (id, optionId, value) => {
    dispatch({type: 'ALTER_CHECKBOX_ANSWER', payload: {id: id, optionId: optionId, value: value}})
  }

  const alterCheckboxQuestion = (id, value) => {
      dispatch({type: 'ALTER_CHECKBOX_QUESTION', payload: {id: id, value: value}})
  }

  return (
    <div>
      <h4>Pytanie do zaliczenia rozdziału</h4>
      <Input type="input" onInput={(e) => alterCheckboxQuestion(id, e.target.value)} placeholder="Pytanie"/>
      <div className="row">
      {question.answers.map((answer, j) => (
        <div class="col-6">
          <div class="d-flex align-items-center">
            <input type="checkbox" onChange={() => markProperQuestion(id, j)} className="form-check-input m-0 me-2" checked={answer.valid ? true : false} />
            <Input type="input" onInput={(e) => alterCheckboxAnswer(id, j, e.target.value)} placeholder="Odpowiedź" value={answer.answer} />
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default WithContext(CheckboxQuestion);