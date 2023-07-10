import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './LoginContainer.module.css';
import { Link } from 'react-router-dom';
import useIsMobile from '../../utils/useIsMobile';
import { Params, fetchAuth } from '../../redux/thunks/authThunk';
import LoginForm from './LoginForm';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
const Login: React.FC = () => {
  const dispatch: ThunkDispatch<string, Params, AnyAction> = useDispatch();
  const isMobile = useIsMobile();

  const handleSubmit = async (email: string, password: string) => {
    dispatch(fetchAuth({ email, password }));
  };

  return (
    <div className={`${isMobile ? styles.isMobile : ''} ${styles.container}`}>
      <h2>Sign In</h2>
      <p>If you have an account, sign in with your email address.</p>
      <LoginForm onSubmit={handleSubmit} />
      <Link className={styles.register} to="/register">
        Register
      </Link>
    </div>
  );
};

export default Login;
