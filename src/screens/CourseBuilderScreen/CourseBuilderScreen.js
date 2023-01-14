import React, { useState } from 'react'
import Input from '../../components/Input/Input';
import Step from '../../components/Step/Step';
import WithContext from '../../hoc/WithContext';
import WithTrainerLayout from '../../hoc/WithTrainerLayout';

function CourseBuilderScreen({state, dispatch}) { 

  const coreCourseFieldDispatcher = (name, value) => {
    dispatch({type: 'EDIT_COURSE_CORE_FIELD', payload: {name: name, value: value}});
  }

  const addStep = () => {
    dispatch({type: 'ADD_COURSE_STEP'});
  }

  const saveCourse = () => {
    fetch('http://localhost:3001/courses', {
      method: "POST",
      body: JSON.stringify(state.createdCourse),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <main className="container d-flex align-items-center course-builder flex-column">
        <div className="w-100 shadow p-3 mb-3 bg-white rounded">
            <div>
                <h2>Podstawowe informacje kursu</h2>
                <Input placeholder={"Nazwa kursu"} value={state.createdCourse.name} onInput={(e) => coreCourseFieldDispatcher('name', e.target.value)} type="input"/>
                <Input placeholder={"Opis kursu / wstęp"} value={state.createdCourse.description} onInput={(e) => coreCourseFieldDispatcher('description', e.target.value)} type="textarea"/>
                <Input placeholder={"Nagroda za kurs"} value={state.createdCourse.prize} onInput={(e) => coreCourseFieldDispatcher('prize', e.target.value)} type="input"/>
            </div>
        </div>

        {state.createdCourse.steps.map((step, j) => (<Step key={`step-${j}`} step={step} id={j} />))}

        <div className="d-flex justify-content-end w-100">
            <button className="btn btn-primary" onClick={addStep}>Dodaj krok</button>
        </div>

        <button class="btn btn-primary" onClick={saveCourse}>Zakończ edycję</button>
    </main>
  )
}

export default WithContext(CourseBuilderScreen);