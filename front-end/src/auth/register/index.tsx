import React, { useState } from 'react';
import axios from 'axios';

const RegisterComponent = () => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleRegister = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { fullName, email, password } = user;
    if (fullName && email && password) {
      try {
        const response = await axios.post('http://localhost:5172/api/register', user);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Invalid input');
    }
  };

  return (
    <form style={{ margin: '200px' }}>
      <input
        type="text"
        name="fullName"
        value={user.fullName}
        onChange={handleChange}
        placeholder="FullName"
      />
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit" onClick={handleRegister}>
        Register
      </button>
    </form>
  );
};

export default RegisterComponent;
