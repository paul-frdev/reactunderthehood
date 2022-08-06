import { ReactKeyClass } from './ReactKeyClass'
import { UserKey } from './UserKey'

export const ReactKeyLIst = () => {

    const users = [
        {
            id: 1,
            name: 'Anton'
        },
        {
            id: 2,
            name: 'pavel'
        },
        {
            id: 3,
            name: 'Sasha'
        }
    ]
    return (
        <div>
            <ul>
                {users.map(user => (
                    <ReactKeyClass key={user.id} user={user}/>
                ))}
            </ul>
        </div>
    )
}