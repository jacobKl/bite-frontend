export const initialState = {   
    userRole: 'xd',
    coursesList: ''
}

export const reducer = (state, payload) => {
    const { action } = payload;

    switch(action) {
        default: 
            console.log('THIS ACTION IS NOT SPECIFIED.')
            return state;
    }
}