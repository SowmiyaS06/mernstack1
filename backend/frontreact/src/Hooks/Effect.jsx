import React from 'react'
import {useEffect} from 'react';
// This component demonstrates the use of the useEffect hook to fetch data from an API and display it in a list.
// It also includes a button to increment a count value, showcasing how state can be managed alongside side effects.
const Effect = ()=>{
    const [count, setCount] = React.useState(0);
    const [users, setUsers] = React.useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            setUsers(data);
        })
    },[])
    console.log(users);
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}> </button>
            <h2>Users:</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Effect