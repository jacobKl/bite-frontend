async function submitForm(e, endpoint, dispatch, token) {
    e.preventDefault();
    let form = e.target;
    let formdata = new FormData(form);
    let result = await fetch("http://localhost:3001/user/" + endpoint, {
        method: "POST",
        body: new URLSearchParams(formdata),
        headers: {
            'Custom-Token': token
        }
    }).then(res => res.json())
    dispatch({ type: 'SET_USER', payload: result });
}


export default submitForm;