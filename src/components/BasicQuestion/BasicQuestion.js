import React from 'react'
import WithContext from '../../hoc/WithContext';
import Input from '../Input/Input';

function BasicQuestion({state, dispatch, question, id}) {

  const alterStepQuestion = (id, name, value) => {
    dispatch({type: 'EDIT_STEP_QUESTION', payload: {id: id, name: name, value: value}})
  }

  return (
    <>
      <h4>Pytanie do zaliczenia rozdziału</h4>
      <div className="row flex-nowrap">
        <div className="col-8">
            <Input type="input" value={question.question} onInput={(e) => alterStepQuestion(id, 'question', e.target.value)} placeholder="Pytanie"></Input>
        </div>
        <div className="col-4">
            <Input type="input" value={question.answer} onInput={(e) => alterStepQuestion(id, 'answer', e.target.value)} placeholder="Poprawna odpowiedź uzytkownika" />
        </div>
      </div>
    </>
  )
}

export default WithContext(BasicQuestion);