import React, { useState } from 'react'
import axios from 'axios';

const Login = ({ setLoginUser }) => {

  const [user, setUser] = useState({
    name: "",
    password: ""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const login = () => {
    axios.post("http://localhost:5172/Login", user)
      .then(res => {
        alert(res.data.message)
        setLoginUser(res.data.user)
      })
  }
  return (
    <form action="#" autoComplete="off">
      <input type="text" name="email" value={user.name} onChange={handleChange} placeholder="Your email" />
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Your password" />
      <button type="submit" onClick={login}>
        Login
      </button>
    </form>
  )
}
export default Login