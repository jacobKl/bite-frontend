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
        <div className="row">
            <table className="table">
                <thead className="dark">
                <tr>
                    <th scope="col">Imię</th>
                    <th scope="col">Nazwisko</th>
                    <th scope="col">Pseudonim</th>
                    <th scope="col">Punkty</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => (
                        <tr>
                            <th>{user.name}</th>
                            <td>{user.surname}</td>
                            <td>{user.nick}</td>
                            <td>{user.money}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default WithContext(UserRanking);