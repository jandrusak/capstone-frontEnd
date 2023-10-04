import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [state, setState] = useState({ 
        email: "",
        pwd: "", 
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const newUserState = {...state}
        newUserState[e.target.name] = e.target.value
        setState(newUserState)
    }
    console.log(state)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://sourcingmagic-backend.onrender.com/login", {
            email: state.email,
            pwd: state.pwd,
        })
        .then((response) => {
            console.log(response)
            console.log("i am logged in")
            document.cookie = 'loggedIn=true;max-age=60*10000'
            navigate('/')
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
            <button type='submit'>Push</button>
        </form>
    </div>
  )
}

export default Login