import React, { useEffect, useState } from 'react'
import Course from '../../components/Course/Course';
import Greeting from '../../components/Greeting/Greeting';
import WithContext from '../../hoc/WithContext';

function UserRootScreen({ state, dispatch }) {
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const response = await fetch('http://localhost:3001/course/take/' + state.user.id, {
        headers: {
          'Custom-Token': state.user.token
        }
      });
      const json = await response.json();
      console.log(json)
      setCourses(json);
    }

    const getAllCourses = async () => {
      const response = await fetch('http://localhost:3001/course/not/' + state.user.id, {
        headers: {
          'Custom-Token': state.user.token
        }
      });
      const json = await response.json();
      console.log("render", json)
      setAllCourses(json);
    }

    getCourses();
    getAllCourses();
  }, [])

  return (
    <>
      <Greeting />
      {courses.length ? <h3>Twoje kursy</h3> : null}
      <div class="row">
        {courses.length ? courses.map((course, j) => (<Course course={course.course} key={`courses-${j}`} progress={course.progress} />)) : null}
      </div>
      {allCourses.length ? <h3>Inne kursy</h3> : null}
      <div class="row">
        {allCourses.length ? allCourses.map((course, j) => (<Course course={course} key={`all-courses-${j}`} />)) : null}
      </div>
    </>
  )
}

export default WithContext(UserRootScreen);