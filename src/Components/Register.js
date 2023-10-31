import React, { useState } from 'react'
import axios from 'axios'
import { TextField, Button, Container } from "@mui/material";
import "./Form.css"
import { useNavigate, Link} from 'react-router-dom';

function Register() {
    const [state, setState] = useState({ 
        email: "",
        pwd: "", 
        first_name: "", 
        last_name: "",
        phone: "",
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
            navigate("/login")
        }) 
        .catch((error) => {
            console.log(error)
        }) 
    }

  return (
    <div>
        <Container maxWidth="sm">
        <form className="login-form" onSubmit={handleSubmit}>
          <TextField
            required
            onChange={handleChange}
            value={state.email}
            name="email"
            label="Email"
            type="text"
          />
          <TextField
            required
            onChange={handleChange}
            value={state.pwd}
            name="pwd"
            label="Password"
            type="password"
          />
           <TextField
            required
            onChange={handleChange}
            value={state.first_name}
            name="first_name"
            label="First Name"
            type="text"
          />
           <TextField
          required
          onChange={handleChange}
          value={state.last_name}
          name="last_name"
          label="Last Name"
          type="text"
        /> 
        <TextField
        required
        onChange={handleChange}
        value={state.phone}
        name="phone"
        label="Phone"
        type="phone"
      />
          <Button sx={{ backgroundColor: "#f6359d" }}
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
          <p>Already Registered? <Link to="/login">Login</Link></p>
        </form>
      </Container>
    </div>
  )
}

export default Register