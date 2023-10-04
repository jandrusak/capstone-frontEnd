import React, { useState } from 'react'
import axios from 'axios'

function Register() {
    const [state, setState] = useState({ 
        email: "",
        pwd: "", 
        first_name: "", 
        last_name: "",
        phone: "",
    })

    const handleChange = (e) => {
        const newUserState = {...state}
        newUserState[e.target.name] = e.target.value
        setState(newUserState)
    }
    console.log(state)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://sourcingmagic-backend.onrender.com/register", {
            email: state.email,
            pwd: state.pwd,
            first_name: state.first_name,
            last_name: state.last_name, 
            phone: state.phone
        })
        .then((response) => {
            console.log(response)
            console.log("i am registered")
        }) 
        .catch((error) => {
            console.log(error)
        }) 
    }

  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <input placeholder='email'value={state.email} name='email' onChange={handleChange} />
            <input placeholder='pwd'value={state.pwd} name='pwd' onChange={handleChange} />
            <input placeholder='first_name'value={state.first_name} name='first_name' onChange={handleChange} />
            <input placeholder='last_name'value={state.last_name} name='last_name' onChange={handleChange} />
            <input placeholder='phone'value={state.phone} name='phone' onChange={handleChange} />
            <button type='submit'>Push</button>
        </form>
    </div>
  )
}

export default Register