import { useState, useEffect } from "react"
import Container from "../Container"

const FetchData = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Fetch to fail data")
                }
                return response.json()
            })
            .then((data) => {
                setUsers(data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    }, []);

    if (loading) {
        return <div className="text-center text-3xl font-semibold mt-20">Loading...</div>
    };

    if (error) {
        return <div className="text-center text-red-500 text-3xl font-semibold mt-20">{error}</div>
    }
    return (
        <Container>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id} className="text-slate-500 text-xl">{user.name}</li>
                    ))
                }
            </ul>
        </Container>
    )
}

export default FetchData