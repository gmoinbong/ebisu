import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './LoginContainer.module.css';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import useIsMobile from '../../utils/useIsMobile';
import { fetchAuth } from '../../redux/thunks/authThunk';
import { RootState } from '../../app/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const Login: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const isMobile = useIsMobile();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    });

    validationSchema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        dispatch(fetchAuth({ email, password }));
      })
      .catch((error) => {
        const validationErrors = error.inner.reduce((acc: any, err: any) => {
          return { ...acc, [err.path]: err.message };
        }, {});
        setErrors(validationErrors);
      });
  };

  return (
    <div className={`${isMobile ? styles.isMobile : ''} ${styles.container}`}>
      <h2>Sign In</h2>
      <p>If you have an account, sign in with your email address.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        <button type="submit">Sign In</button>
      </form>
      <Link className={styles.register} to="/register">
        Register
      </Link>
    </div>
  );
};

export default Login;
