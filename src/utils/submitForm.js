import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';

async function submitForm(e, endpoint, dispatch) {
    const cookies = new Cookies();
    const good = () => toast.success('Dobra odpowiedź!')
    const wrong = () => toast.error('Błędna odpowiedź');
    e.preventDefault();
    let form = e.target;
    let formdata = new FormData(form);
    let result = await fetch("http://localhost:3001/user/" + endpoint, {
        method: "POST",
        body: new URLSearchParams(formdata),
    }).then(res => res.json())
    if (result.status == "success") {
        dispatch({ type: 'SET_USER', payload: result.user });
        cookies.set("token", result.user.token)
    } else {
        wrong()
    }
}


export default submitForm;