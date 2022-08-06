import { useEffect } from 'react';

interface IProps {
    user: {
        id: number;
        name: string;
    }
}

export const UserKey = ({ user }: IProps) => {

    useEffect(() => {
        console.log("will mount", user.name);
    })
    useEffect(() => {
        console.log("did mount", user.name);
    }, [])
    useEffect(() => {
        console.log("did update", user.name);
    }, [user])
    return (
        <div>
            {user && (
                <li>{user.name}</li>
            )}
        </div>
    )
}