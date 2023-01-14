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
        const response = await fetch('http://localhost:3003/courses');
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
                <h1>{course.name}</h1>
                <p>{course.description}</p>
                <div className="d-flex">
                    <div className="col-9">
                        <h2>{course.steps[activeStep].title}</h2>
                        <p>
                            {course.steps[activeStep].informations}
                        </p>
                        {(course.steps[activeStep].question && !ended) ? 
                            (course.steps[activeStep].question.type == 1 ? <BasicFrontendQuestion onWrong={wrong} onSuccess={goFurther} question={course.steps[activeStep].question} /> : <CheckboxFrontendQuestion onWrong={wrong} onSuccess={goFurther} question={course.steps[activeStep].question} />)
                        : null}
                    </div>
    
                    <div className="col-3">
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
        : null}
    </div>
  )
}

export default WithContext(TakeCourseScreen);