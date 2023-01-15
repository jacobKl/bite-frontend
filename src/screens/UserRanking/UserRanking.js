import WithContext from "../../hoc/WithContext";
import {useEffect, useState} from "react";

function UserRanking() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const result = await fetch('http://localhost:3001/user');
            const json = await result.json();
            json.sort((a, b) => {
                return b.money - a.money
            })
            setUsers(json);
        }

        getUsers();
    }, [])

    return (
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h3>Ranking kredytów</h3>
            <table className="table table-light shadow" style={{maxWidth: "768px"}}>
                <thead>
                    <tr><th>Imię</th><th>Nazwisko</th><th>Kredyty</th></tr>
                </thead>
                <tbody>
                {   
                    users.map(user => (
                        <tr><td>{user.name}</td><td>{user.surname}</td><td>{user.money}</td></tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default WithContext(UserRanking);