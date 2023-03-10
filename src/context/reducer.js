const courseStep = {
    title: '',
    informations: '',
    question: {}
}

const basicFiles = []

const basicQuestion = {
    question: '',
    answer: '',
    type: 1
}

const checkboxQuestion = {
    question: '',
    answers: [
        { valid: false, answer: '' },
        { valid: false, answer: '' },
        { valid: false, answer: '' },
        { valid: false, answer: '' },
    ],
    type: 2
}

export const initialState = {
    userRole: '',
    cookiesChecked: false,
    coursesList: '',
    createdCourse: {
        name: '',
        description: '',
        image: '',
        steps: [],
        prize: 0,
        difficulty: 1
    },
    user: {
        id: 0,
        nick: '',
        name: '',
        surname: '',
        email: '',
        money: 0,
        avatar: '',
        role: '',
        token: ''
    }
}

export const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'EDIT_COURSE_CORE_FIELD':
            return {
                ...state,
                createdCourse: {
                    ...state.createdCourse,
                    [payload.name]: payload.value
                }
            }
        case 'ADD_COURSE_STEP':
            return {
                ...state,
                createdCourse: {
                    ...state.createdCourse,
                    steps: [
                        ...state.createdCourse.steps,
                        JSON.parse(JSON.stringify(courseStep))
                    ]
                }
            }
        case 'EDIT_COURSE_STEP_FIELD':
            const steps = state.createdCourse.steps;
            steps[payload.id][payload.name] = payload.value;

            return {
                ...state,
                createdCourse: {
                    ...state.createdCourse,
                    steps: [
                        ...steps
                    ]
                }
            }
        case 'ADD_QUESTION_TO_STEP':
            const stepsWithQuestion = state.createdCourse.steps;
            stepsWithQuestion[payload.id].question = JSON.parse(JSON.stringify(basicQuestion));

            return {
                ...state,
                createdCourse: {
                    ...state.createdCourse,
                    steps: stepsWithQuestion
                }
            }
        case 'ADD_FILES_TO_STEP':
            const stepsWithFiles = state.createdCourse.steps;
            stepsWithFiles[payload.id].attachments = JSON.stringify(payload.tab);

            return {
                ...state,
                createdCourse: {
                    ...state.createdCourse,
                    steps: stepsWithFiles
                }
            }
        case 'EDIT_STEP_QUESTION':
            const stepsWithAlteredQuestion = state.createdCourse.steps;
            stepsWithAlteredQuestion[payload.id].question[payload.name] = payload.value;

            return {
                ...state,
                createdCourse: {
                    ...state.createdCourse,
                    steps: stepsWithAlteredQuestion
                }
            }
        case 'ADD_CHECKBOX_QUESTION_TO_STEP':
            const stepsWithCheckboxQuestion = state.createdCourse.steps;
            stepsWithCheckboxQuestion[payload.id].question = JSON.parse(JSON.stringify(checkboxQuestion));
            return {
                ...state,
                createdCourse: {
                    ...state.createdCourse,
                    steps: stepsWithCheckboxQuestion
                }
            }
        case 'MARK_PROPER_CHECKBOX_ANSWER':
            const stepsWithWrongCheckboxAnswer = state.createdCourse.steps;
            stepsWithWrongCheckboxAnswer[payload.id].question.answers.forEach((answer, i) => stepsWithWrongCheckboxAnswer[payload.id].question.answers[i].valid = false);
            stepsWithWrongCheckboxAnswer[payload.id].question.answers[payload.optionId].valid = true;
            return {
                ...state,
                createdCourse: {
                    ...state.createdCourse,
                    steps: stepsWithWrongCheckboxAnswer
                }
            }
        case 'ALTER_CHECKBOX_ANSWER':
            const stepsWithNotAlteredCheckboxAnswer = state.createdCourse.steps;
            stepsWithNotAlteredCheckboxAnswer[payload.id].question.answers[payload.optionId].answer = payload.value;
            return {
                ...state,
                createdCourse: {
                    ...state.createdCourse,
                    steps: stepsWithNotAlteredCheckboxAnswer
                }
            }
        case 'ALTER_CHECKBOX_QUESTION':
            const stepsWithNotAlteredCheckboxQuestion = state.createdCourse.steps;
            stepsWithNotAlteredCheckboxQuestion[payload.id].question.question = payload.value;
            return {
                ...state,
                createdCourse: {
                    ...state.createdCourse,
                    steps: stepsWithNotAlteredCheckboxQuestion
                }
            }
        case 'SET_USER':
            return {
                ...state,
                user: payload
            }
        case 'SET_FILES':
            return {
                ...state,
                files: payload
            }
        case 'DESTROY_USER':
            return {
                ...initialState
            }
        default:
            console.log('THIS ACTION IS NOT SPECIFIED.')
            return state;
    }
}