import React from 'react'
import { Link } from 'react-router-dom';

function Course({course, progress = 0}) {
  return (
    <div class="col-4">
        <div className="bg-white shadow rounded mb-3 overflow-hidden">
            <img src={'http://localhost:3001/' + course.image} class="img-fluid"/>
            <div className="bg-white p-3">
                <h3>{course.name}</h3>
                <p dangerouslySetInnerHTML={{__html: course.description}}></p>
                {course.steps.length + 1 <= progress ? <p className="text-muted text-center py-1">Kurs zakończony</p> : null}
                {((course.steps.length + 1 > progress) && progress > 0) ? <Link to={`/course/${course.id}`} className="btn btn-primary">Kontynuuj</Link> : null}
                {!progress  ? <Link to={`/course/${course.id}`} className="btn btn-primary">Zacznij kurs</Link> : null}
            </div>
        </div>
    </div>
  )
}

export default Course