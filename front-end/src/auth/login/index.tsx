import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './LoginContainer.module.css';
import { Link } from 'react-router-dom';
import useIsMobile from '../../utils/useIsMobile';
import LoginForm from './LoginForm';
import { fetchAuth } from '../../redux/thunks/authThunk';

const LoginContainer: React.FC = () => {
  const dispatch = useDispatch();
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

export default LoginContainer;
