import React, { useState } from 'react'
import Input from '../../components/Input/Input';
import WithContext from '../../hoc/WithContext';
import WithTrainerLayout from '../../hoc/WithTrainerLayout';

function CourseBuilderScreen({state, dispatch}) { 

  const coreCourseFieldDispatcher = (name, value) => {
    dispatch({type: 'EDIT_COURSE_CORE_FIELD', payload: {name: name, value: value}});
  }

  const courseStepFieldDispatcher = (name, value, id) => {
    dispatch({type: 'EDIT_COURSE_STEP_FIELD', payload: {name, value, id}})
  }

  const addStep = () => {
    dispatch({type: 'ADD_COURSE_STEP'});
  }

  return (
    <main className="container d-flex align-items-center course-builder flex-column">
        <div className="w-100 shadow p-3 mb-3">
            <div>
                <h2>Podstawowe informacje kursu</h2>
                <Input placeholder={"Nazwa kursu"} value={state.createdCourse.name} onInput={(e) => coreCourseFieldDispatcher('name', e.target.value)} type="input"/>
                <Input placeholder={"Opis kursu / wstęp"} value={state.createdCourse.description} onInput={(e) => coreCourseFieldDispatcher('description', e.target.value)} type="textarea"/>
                <Input placeholder={"Nagroda za kurs"} value={state.createdCourse.prize} onInput={(e) => coreCourseFieldDispatcher('prize', e.target.value)} type="input"/>
            </div>
        </div>

        {state.createdCourse.steps.map((step,j) => (
                <div className="shadow p-3 mb-2 rounded w-100">
                    <h2>Rozdział {j + 1} - {step.name}</h2>
                    <Input placeholder={"Nazwa rozdziału"} value={step.name} onInput={(e) => courseStepFieldDispatcher('name', e.target.value, j)} type="input" />
                    <Input placeholder={"Zawartość tekstowa rozdziału"} value={step.informations} onInput={(e) => courseStepFieldDispatcher('informations', e.target.value, j)} type="textarea" />
                </div>
            ))}

        <div className="d-flex justify-content-end w-100">
            <button className="btn btn-primary" onClick={addStep}>Dodaj krok</button>
        </div>
    </main>
  )
}

export default WithContext(CourseBuilderScreen);