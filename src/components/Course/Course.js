import React from 'react'
import { Link } from 'react-router-dom';

function Course({course}) {
    console.log(course)
  return (
    <div class="col-4">
        <div className="bg-white shadow rounded">
            <img src={course.image} />
            <div className="bg-white p-3">
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <Link className="btn btn-primary w-100" to={`/course/${course.id}`}>Zacznij kurs</Link>
            </div>
        </div>
    </div>
  )
}

export default Course