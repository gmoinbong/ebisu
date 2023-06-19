import React, { useState } from 'react';
import styles from './LoginContainer.module.css';

import axios from 'axios';
import { isMobile } from '../../utils/isMobile';
import { Link } from 'react-router-dom';

const LoginContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5172/api/login', {
        email, password
      });
      console.log(response.data);
    }
    catch (error) {
      console.error(123, error.response.data);
    }
  }

  return (
    <div className={`${isMobile ? styles.isMobile : ''} ${styles.container}`}>
      < h2 > Sign In</ h2>
      <p className={styles.p}>If you have an account, sign in with your email address.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">EMAIL ADDRESS*</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">PASSWORD*</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
          <button className={styles.forgotPassword}>Forgot Password &gt;</button>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
          <label style={{ marginLeft: '10px' }} htmlFor="rememberMe">By using this form you agree with the storage and handling of your data by this website.</label>
        </div>
        <Link className={styles.register} to={'/register'} >Register</Link>
        <button style={{ backgroundColor: 'black' }} className={styles.submit} type="submit" disabled={!rememberMe}>Sign In</button>
      </form>
    </div>
  );
};

export default LoginContainer;
