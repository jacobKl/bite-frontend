import React, { useEffect, useState } from 'react'
import Course from '../../components/Course/Course';
import Greeting from '../../components/Greeting/Greeting';
import WithContext from '../../hoc/WithContext';

function UserRootScreen({state, dispatcb}) {
    const [courses, setCourses] = useState([])

    useEffect(() => {
      const getCourses = async () => {
        const response = await fetch('http://localhost:3001/course');
        const json = await response.json();
  
        setCourses(json);
      }
  
      getCourses();
    }, [])

  return (
    <>
      <Greeting user={state.user} />
      <h3>Lista szkoleń</h3>
      <div class="row">
        {courses.length ? courses.map(course => (<Course course={course} />)) : null}
      </div>
    </>
  )
}

export default WithContext(UserRootScreen);