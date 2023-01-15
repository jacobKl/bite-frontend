import React from 'react'
import WithContext from '../../hoc/WithContext';
import BasicQuestion from '../BasicQuestion/BasicQuestion';
import CheckboxQuestion from '../CheckboxQuestion/CheckboxQuestion';
import Input from '../Input/Input';

function Step({state, dispatch, step, id}) {

    const courseStepFieldDispatcher = (name, value, id) => {
        dispatch({type: 'EDIT_COURSE_STEP_FIELD', payload: {name, value, id}})
    }

    const addBasicQuestion = () => {
        dispatch({type: 'ADD_QUESTION_TO_STEP', payload: {id: id}});
    }

    const addCheckboxQuestion = () => {
        dispatch({type: 'ADD_CHECKBOX_QUESTION_TO_STEP', payload: {id: id}});
    }

    const saveAttachments = async (e) => {
        let files = []
        for (let i = 0; i < e.target.files.length; i++) {
            files.push(e.target.files[i].name)
            const formData = new FormData();
            formData.append('file', e.target.files[i]);
            await fetch('http://localhost:3001/visual/save', {
                method: "POST",
                body: formData,
                headers: {
                    'Custom-Token': state.user.token
                }
            });
        }

        dispatch({type: 'ADD_FILES_TO_STEP', payload: {id: id, tab: files}});
    }

    return (
        <div className="shadow p-3 mb-2 rounded w-100 bg-white">
            <div className="d-flex justify-content-between">
                <h2>Rozdział {id + 1} {step.title ? '-' : null} {step.title}</h2>
                <div>
                    <button className="btn btn-light text-black" onClick={addBasicQuestion}>
                        <i className="fa-solid fa-question"></i>
                    </button>
                    <button className="btn btn-light text-black" onClick={addCheckboxQuestion}>
                        <i className="fa-solid fa-square-check"></i>
                    </button>
                </div>
            </div>
            <Input placeholder={"Nazwa rozdziału"} value={step.title}
                   onInput={(e) => courseStepFieldDispatcher('title', e.target.value, id)} type="input"/>
            <Input placeholder={"Zawartość tekstowa rozdziału"} value={step.informations}
                   onInput={(e) => courseStepFieldDispatcher('informations', e, id)} type="tiny"/>
            {step.question ?
                step.question.type === 1 ?
                    <BasicQuestion id={id} question={step.question}/> : (step.question.type === 2 ?
                        <CheckboxQuestion id={id} question={step.question}/> : null)
                : null}
            <input multiple type="file" className="form-control mb-3" onChange={e => saveAttachments(e)}/>
        </div>
    )
}

export default WithContext(Step);