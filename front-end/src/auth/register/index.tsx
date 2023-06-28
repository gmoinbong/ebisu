import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './RegPage.module.css';
import axios from 'axios';
import useIsMobile from '../../utils/useIsMobile';


const Register: React.FC = () => {
  const isMobile = useIsMobile()

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleRegister = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const { fullName, email, password, confirmPassword } = user;
    if (fullName && email && password && confirmPassword && password === confirmPassword) {
      try {
        const response = await axios.post('http://localhost:5172/api/register', user);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Invalid input');
    }
    setUser({
      confirmPassword: '',
      email: '',
      fullName: '',
      password: ''
    })
  };

  return (
    <div className={`${isMobile ? styles.isMobile : ''} ${styles.container}`}>
      <h2>CREATE NEW CUSTOMER ACCOUNT</h2>
      <p>Sign-In Information</p>

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="fullName">FULLNAME*</label>
          <input type="text" id="fullName" name="fullName" value={user.fullName} onChange={handleChange} required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">EMAIL*</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleChange} required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">PASSWORD*</label>
          <input type="password" id="password" name="password" value={user.password} onChange={handleChange} required />
          <div className={styles.passwordStrength}>
            Password Strength: {user.password.length >= 12 ? 'Strong' : user.password.length >= 6 ? 'Medium' : 'No Password'}
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">CONFIRM PASSWORD*</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.checkboxGroup}>
          <input type="checkbox" id="privacyPolicy" required />
          <label style={{ paddingLeft: '5px' }} htmlFor="privacyPolicy">
            I HEREBY AGREE TO THE <Link className={styles.link} to="/privacy-policy">PRIVACY POLICY</Link> AND{' '}
            <Link className={styles.link} to="/terms-and-conditions">TERMS AND CONDITIONS</Link> OF THE SITE.
          </label>
        </div>
        <button style={{ backgroundColor: 'black' }} type="submit" onClick={handleRegister}>Register</button>
      </form>

      <div className={styles.backButton} onClick={handleGoBack}>Back</div>
    </div>
  );
};

export default Register;
