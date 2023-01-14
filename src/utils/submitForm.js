async function submitForm(e, endpoint, dispatch) {
    e.preventDefault();
    let form = e.target;
    console.log(form)
    let formdata = new FormData(form);
    let result = await fetch("http://localhost:3001/user/" + endpoint, {
        method: "POST",
        body: new URLSearchParams(formdata)
    }).then(res => res.json())
    dispatch({ type: 'SET_USER', payload: result });
}


export default submitForm;