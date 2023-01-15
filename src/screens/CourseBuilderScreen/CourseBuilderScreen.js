import React from 'react'
import { useNavigate } from 'react-router';
import Input from '../../components/Input/Input';
import Step from '../../components/Step/Step';
import WithContext from '../../hoc/WithContext';
import postFile from '../../utils/postFile';

function CourseBuilderScreen({state, dispatch}) { 

  const navigate = useNavigate();

  const coreCourseFieldDispatcher = (name, value) => {
    dispatch({type: 'EDIT_COURSE_CORE_FIELD', payload: {name: name, value: value}});
  }

  const addStep = () => {
    dispatch({type: 'ADD_COURSE_STEP'});
  }

  const saveCourse = () => {
    fetch('http://localhost:3001/course/create', {
      method: "POST",
      body: JSON.stringify({...state.createdCourse, trainer_id: state.user.id}),
      headers: {
        'Content-Type': 'application/json',
        'Custom-Token': state.user.token
      }
    }).then(res => {
      navigate('/');
    })


  }

  const handleFile = async (e) => {
    const name = await postFile(e, state.user.token);
    coreCourseFieldDispatcher('image', name);
  }

  return (
    <main className="container d-flex align-items-center course-builder flex-column">
        {state.createdCourse.image.length ? <img src={`http://localhost:3001/${state.createdCourse.image}`} className="img-fluid mb-3" /> : null}
    
        <div className="w-100 shadow p-3 mb-3 bg-white rounded">
            <div>
                <h2>Podstawowe informacje kursu</h2>
                <input type="file" className="form-control mb-3" onChange={e => handleFile(e)}/>
                <Input placeholder={"Nazwa kursu"} value={state.createdCourse.name} onInput={(e) => coreCourseFieldDispatcher('name', e.target.value)} type="input"/>
                <Input placeholder={"Opis kursu / wstęp"} value={state.createdCourse.description} onInput={(e) => coreCourseFieldDispatcher('description', e)} type="tiny"/>
                <Input placeholder={"Nagroda za ukończenie kursu"} value={state.createdCourse.prize} onInput={(e) => coreCourseFieldDispatcher('prize', e.target.value)} type="input"/>
            </div>
        </div>

        {state.createdCourse.steps.map((step, j) => (<Step key={`step-${j}`} step={step} id={j} />))}

        <div className="d-flex justify-content-end w-100">
            <button className="btn btn-primary" onClick={addStep}>Dodaj krok</button>
        </div>

        <button className="btn btn-primary" onClick={saveCourse}>Zakończ edycję</button>
    </main>
  )
}

export default WithContext(CourseBuilderScreen);