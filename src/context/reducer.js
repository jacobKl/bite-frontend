const courseStep = {
    title: '',
    informations: '',
}

export const initialState = {   
    userRole: '',
    coursesList: '',
    createdCourse: {
        name: '',
        description: '',
        steps: []
    }
}

export const reducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
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
            console.log(steps[payload.id])
            return {
                ...state,
                createdCourse: {
                    ...state.createdCourse,
                    steps: [
                        ...steps
                    ]
                }
            }
        default: 
            console.log('THIS ACTION IS NOT SPECIFIED.')
            return state;
    }
}