import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Home from "./Components/Home/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Users from "./Components/Users";
import axios from "axios";

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies.loggedIn === "true";
};

// Write ProtectedRoute function here
// const ProtectedRoute = ({ path, element }) => {
//     if (checkAuth()) {
//         return <Route path ={path} element={element}/>
//     } else {
//         return <Navigate to="/login" />
//     }
// }

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const Router = () => {
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
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* add products page protected route */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default Router;
