import React, { useEffect, useState } from 'react'
import Greeting from '../../components/Greeting/Greeting';
import WithContext from '../../hoc/WithContext';

function TrainerWelcomeScreen({state}) {

  const [yourCourses, setYourCourses] = useState([]);

  useEffect(() => { 
    const getTrainerCourses = async () => {
      const result = await fetch('http://localhost:3001/course?id=' + state.user.id);
      const json = await result.json();
      setYourCourses(json);
    }

    getTrainerCourses();
  }, [])

  return (
    <>
      <Greeting />
      <h3>Twoje kursy</h3>
      <div className="row">
        {(yourCourses.map((course, j) => (
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
      <h3>Znajdź nowe kursy</h3>
    </>
  )
}

export default WithContext(TrainerWelcomeScreen);