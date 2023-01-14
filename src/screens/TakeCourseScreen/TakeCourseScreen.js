import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import WithContext from '../../hoc/WithContext';
import { Routes, Route } from 'react-router-dom';
import BasicFrontendQuestion from '../../components/BasicFrontendQuestion/ BasicFrontendQuestion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckboxFrontendQuestion from '../../components/CheckboxFrontendQuestion/CheckboxFrontendQuestion';

function TakeCourseScreen() {
  const { id } = useParams();
  const [ course, setCourse ] = useState();
  const [ activeStep, setActiveStep ] = useState(0);
  const [ ended, setEnded ] = useState(false);

  const good = () => toast.success('Dobra odpowiedź!')
  const wrong = () => toast.error('Błędna odpowiedź');

  const goFurther = () => {
    good();
    if (activeStep + 1 < course.steps.length) {
        setActiveStep(activeStep + 1);
    } else {
        setEnded(true);
    }
  }


  useEffect(() => {
    const getCourse = async (id) => {
        console.log(id)
        const response = await fetch(`http://localhost:3001/course/${id}`);
        const json = await response.json();
        setCourse(json);
    }
    getCourse();
  }, []);

  return (
    <div>
        <ToastContainer/>
        {course ? 
            <div>
                <img src={course.image} className="img-fluid " />
                <div className="mb-3 p-3 bg-white shadow rounded">
                    <h1>{course.name}</h1>
                    <p>{course.description}</p>
                </div>
                <div className="row mb-3">
                    <div className="col-9">
                        <div className="bg-white rounded shadow p-3">
                            <h2>{course.steps[activeStep].title}</h2>
                            <p>
                                {course.steps[activeStep].informations}
                            </p>
                        </div>
                    </div>
    
                    <div className="col-3">
                        <div className="bg-white p-3 rounded shadow">
                            <h3>Spis treści</h3>
                            {
                                <ul>
                                    {course.steps.map((step, j) => (
                                        <li key={`toc-${j}`} className={activeStep == j ? 'text-primary' : ''}>{step.title}</li>
                                    ))}
                                </ul>
                            }
                        </div>
                    </div>
                </div>
                {(course.steps[activeStep].question && !ended) ? 
                            (course.steps[activeStep].question.type == 1 ? <BasicFrontendQuestion onWrong={wrong} onSuccess={goFurther} question={course.steps[activeStep].question} /> : <CheckboxFrontendQuestion onWrong={wrong} onSuccess={goFurther} question={course.steps[activeStep].question} />)
                        : null}
            </div>
        : null}
    </div>
  )
}

export default WithContext(TakeCourseScreen);