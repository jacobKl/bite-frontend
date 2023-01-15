import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import WithContext from '../../hoc/WithContext';
import BasicFrontendQuestion from '../../components/BasicFrontendQuestion/ BasicFrontendQuestion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckboxFrontendQuestion from '../../components/CheckboxFrontendQuestion/CheckboxFrontendQuestion';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas'

function TakeCourseScreen({ state }) {
    const { id } = useParams();
    const [course, setCourse] = useState(false);
    const [courseFinished, setCourseFinished] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [ended, setEnded] = useState(false);

    const exportRef = useRef()

    const good = () => toast.success('Dobra odpowiedź!');
    const wrong = () => toast.error('Błędna odpowiedź!');

    const addNewProgress = () => {
        fetch('http://localhost:3001/course/take', {
            method: "POST",
            body: JSON.stringify({
                user_id: state.user.id,
                course_id: course.id
            }),
            headers: {
                'Custom-Token': state.user.token,
                'Content-Type': 'application/json'
            }
        });
    }

    const getCurrentProgress = async () => {
        const result = await fetch('http://localhost:3001/course/take/' + state.user.id);
        const json = result.json();
        return json;
    }

    const goFurther = () => {
        good();
        if (activeStep + 1 < course.steps.length) {
            setActiveStep(activeStep + 1);
            setProgress(activeStep + 1);
        } else {
            setProgress(activeStep + 1);
            setEnded(true);
        }
    }

    const setProgress = () => {
        fetch('http://localhost:3001/course/set-progress', {
            method: "POST",
            body: JSON.stringify({
                user_id: state.user.id,
                course_id: course.id
            }),
            headers: {
                'Custom-Token': state.user.token,
                'Content-Type': 'application/json'
            }
        });
    }

    const exportAsImage = async (el, imageFileName) => {
        const canvas = await html2canvas(el);
        const image = canvas.toDataURL("image/png", 1.0);
        downloadImage(image, imageFileName);
    }; const downloadImage = (blob, fileName) => {
        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display:none;";
        fakeLink.download = fileName;

        fakeLink.href = blob;

        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);

        fakeLink.remove();
    };

    const endCourse = async () => {
        console.log("finished")
        fetch("http://localhost:3001/course/finish/" + course.id, {
            method: "POST",
            body: JSON.stringify({ userid: state.user.id, prize: course.prize }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    useEffect(() => {

        const possessCurrentProgress = async (id) => {
            const userProgresses = await getCurrentProgress();

            const thisCourse = userProgresses.filter(progress => progress.course_id == id)[0];
            setCourseFinished(thisCourse.finished)
            console.log(thisCourse)
            if (parseInt(thisCourse.progress) >= thisCourse.course.steps.length) {
                if (!thisCourse.finished) {
                    endCourse()
                }
                setCourseFinished(true)
            }
            if (!thisCourse) addNewProgress()
            else {
                setActiveStep(thisCourse.progress - 1)
            };
        }

        const getCourse = async (id) => {
            const response = await fetch(`http://localhost:3001/course/${id}`, {
                headers: {
                    'Custom-Token': state.user.token
                }
            });
            const json = await response.json();

            json.steps.forEach((step, j) => {
                const parsed = JSON.parse(step.questions);
                json.steps[j].question = parsed;
            });
            setCourseFinished(json.finished)
            setCourse(json);

            if (json) {
                possessCurrentProgress(json.id);
            }

        }
        getCourse(id);
    }, []);

    return (
        <div>
            <ToastContainer />
            {courseFinished ? (course ?
                <div className="mb-5">
                    <img src={'http://localhost:3001/' + course.image} className="img-fluid mb-3 rounded"
                        style={{ maxHeight: "300px", objectFit: "cover", width: "100%" }} />
                    <div className="mb-3 p-3 bg-white shadow rounded">
                        <div className="d-flex align-items-center justify-content-between">
                            <h1>{course.name}</h1>
                            <p className="text-muted">
                                Postęp: {activeStep + 1} / {course.steps.length}
                            </p>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: course.description }}></p>
                    </div>
                    <div className="row mb-3">
                        <div className="col-9">
                            <div className="bg-white rounded shadow p-3">
                                <h2>{course.steps[activeStep].title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: course.steps[activeStep].informations }}>
                                </p>
                                <div className="row mb-3">
                                    {
                                        JSON.parse(course.steps[activeStep].attachemnts).map(img => (
                                            <a href={'http://localhost:3001/' + img}><i className="fa-solid fa-file"></i> {img}</a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="bg-white p-3 rounded shadow">
                                <h3>Spis treści</h3>
                                {
                                    <ul>
                                        {course.steps.map((step, j) => (
                                            <li key={`toc-${j}`}
                                                className={activeStep == j ? 'text-primary' : ''}>{step.title}</li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                    (course.steps[activeStep].question.type == 1 ?
                    <BasicFrontendQuestion onWrong={wrong} onSuccess={goFurther}
                        question={course.steps[activeStep].question} /> :
                    <CheckboxFrontendQuestion onWrong={wrong} onSuccess={goFurther}
                        question={course.steps[activeStep].question} />)
                </div>
                : null) :
                <div className="mb-5">
                    <div className="mb-3 p-3 bg-white shadow rounded">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div ref={exportRef} style={{ padding: 50 }} className="d-flex flex-column">
                                <h3 className='text-center'>Learn<span className="text-primary">Able</span></h3>
                                <h1 className='text-center mt-5'>Gratulacje, ukończyłeś kurs</h1>
                                <h3 className='text-center mt-5'>{state.user.name} {state.user.surname}</h3>
                                <h2 className='text-center mt-5'>Potwierdzenie ukończenia</h2>
                                <h3 className='text-center mt-1'>"{course.name}"</h3>
                            </div>

                            <Link style={{ color: 'black', fontSize: 30 }} to={"/"} className='btn btn-primary'>Moje kursy</Link>
                            <button style={{ color: 'black', fontSize: 30 }} onClick={() => exportAsImage(exportRef.current, "Certyfikat - " + course.name)} className="btn btn-primary mt-5 mb-5">Pobierz</button>
                        </div>

                    </div>
                </div>
            }

        </div>
    )
}

export default WithContext(TakeCourseScreen);