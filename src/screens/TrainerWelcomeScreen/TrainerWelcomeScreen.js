import React, { useEffect, useState } from 'react'
import Greeting from '../../components/Greeting/Greeting';
import WithContext from '../../hoc/WithContext';

function TrainerWelcomeScreen({state}) {

  const [courses, setCourses] = useState([]);

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
      {(courses.map(course => (
        <div className="row">
          <div className="col-4">
            <div className="shadow mb-2 bg-white">
              <img className="img-fluid" src={'http://localhost:3001/' + course.image} />
              <div className="p-3">
                <h2 class="mb-0">{course.name}</h2>
              </div>
            </div>
          </div>
        </div>
      )))}
    </>
  )
}

export default WithContext(TrainerWelcomeScreen);