import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users(props) {
    const {users} = props
    // const [users, setUsers] = useState([])

    // const getUsers = () => {
    //     axios.get('http://localhost:3306/users')
    //     .then((response)=>{
    //         // console.log(response.data)
    //         setUsers(response.data)
    //     })
    // }

    // useEffect(()=> {
    // getUsers()

    // },[])
    // console.log(users)
    //not using this was example from Joel 

    
    if (!users) {
        return <p>Loading...</p>
    }
  return (
    <div>Users
        {users.map(user=>(
            <div key={user.user_id}>
                <p>Hello, {user.first_name}</p>
            </div>
        ))}
    </div>
  )
}

export default Users