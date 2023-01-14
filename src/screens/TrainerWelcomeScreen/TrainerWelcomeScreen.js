import React, { useEffect, useState } from 'react'
import Greeting from '../../components/Greeting/Greeting';
import WithContext from '../../hoc/WithContext';

function TrainerWelcomeScreen({state}) {

  const [courses, setCourses] = useState([]);
  console.log(state)
  useEffect(() => { 
    const getTrainerCourses = async () => {
      const result = await fetch('http://localhost:3001/course?id=' + state.user.id);
      const json = await result.json();
      setCourses(json);
    }

    getTrainerCourses();
  }, [])

  return (
    <>
      <Greeting />
      <h3>Twoje kursy</h3>
      <div className="row">
      {(courses.map((course, j) => (
          <div className="col-4" key={`course-${j}`}>
            <div className="shadow mb-2 bg-white">
              <img className="img-fluid" src={'http://localhost:3001/' + course.image} />
              <div className="p-3">
                <h2 className="mb-0">{course.name}</h2>
              </div>
            </div>
          </div>
      )))}
      </div>
    </>
  )
}

export default WithContext(TrainerWelcomeScreen);