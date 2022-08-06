import { useCallback, useEffect, useState } from 'react'

export const Users = () => {
    const [users, setUsers] = useState<any[]>([]);


    useEffect(() => {
        let isIgnoreResponse = false;
        const loadBooks = async () => {
            return await fetch(`https://jsonplaceholder.typicode.com/users`)
                .then(response => response.json())
                .then(response => setUsers(response))
        }
        loadBooks();

        return () => {
            isIgnoreResponse = true;
        }
    }, [])

    return (
        <ul>
            {users && (
                users.map(user => {
                    return <li key={user.id}>{user?.name}</li>
                })
            )}
        </ul>
    )
}