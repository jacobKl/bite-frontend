import React from 'react'
import { Link } from 'react-router-dom';

function Course({course}) {
    console.log(course)
  return (
    <div class="col-4">
        <div className="bg-white shadow rounded mb-3">
            <img src={'http://localhost:3001/' + course.image} class="img-fluid"/>
            <div className="bg-white p-3">
                <h3>{course.name}</h3>
                <p dangerouslySetInnerHTML={{__html: course.description}}></p>
                <Link className="btn btn-primary w-100" to={`/course/${course.id}`}>Zacznij kurs</Link>
            </div>
        </div>
    </div>
  )
}

export default Course