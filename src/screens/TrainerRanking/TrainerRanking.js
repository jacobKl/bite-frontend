import WithContext from "../../hoc/WithContext";
import {useEffect, useState} from "react";

function TrainerRanking({state}) {

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
        <div>
            {
                users.map(user => {
                    {user.name} {user.surname} {user.money}
                })
            }
        </div>
    )
}

export default WithContext(TrainerRanking);