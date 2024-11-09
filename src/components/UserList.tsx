type User = {
    name: string;
    age: number;
}

const UserList: React.FC = () => {

    const users: User[] = [
        {name: "Steve", age: 24},
        {name: "Melissa", age: 36},
        {name: "Albert", age: 67},
        {name: "Lauren", age: 27}
    ];

    return (
        <div>
            <h2>List of Users</h2>
            <ul>
                {users.map((user) => (
                    <li>
                        <p>Name: {user.name}</p>
                        <p>Age: {user.age}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default UserList;