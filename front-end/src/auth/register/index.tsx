import React, { useState } from 'react';
import axios from "axios";

const RegisterComponent = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const reg = () => {
    const { name, email, password } = user;
    if (name && email && password) {
      axios.post("http://localhost:5172/Register", user)
        .then(res => console.log(res));
    } else {
      alert("Invalid input");
    }
  };

  return (
    <form action="#" style={{ margin: "200px" }}>
      <input type="text" id="create-account-pseudo" name="name" value={user.name} onChange={handleChange} placeholder="FullName" />
      <input type="text" id="create-account-first-name" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
      <input type="password" id="create-account-email" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
      <button type="submit" onClick={reg}>
        Register
      </button>
    </form>
  );
};

export default RegisterComponent;
