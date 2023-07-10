import React, { useState } from 'react';
import Button from '../../components/layout/button';
import * as Yup from 'yup';
import { selectIsAuth } from '../../redux/slices/authSlice';
import { useRouteChange } from '../../hooks/useRouteChange';
import { useSelector } from 'react-redux';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const routChange = useRouteChange();
  const isAuth = useSelector(selectIsAuth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
    const schema = Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    });
    try {
      await schema.validate({ email, password }, { abortEarly: false });
      onSubmit(email, password);
      if (isAuth === true) {
        return routChange('/account');
      }
    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors: { [key: string]: string } = {};
        error.inner.forEach((err: Yup.ValidationError) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        {errors.email && <div>{errors.email}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        {errors.password && <div>{errors.password}</div>}
      </div>
      <div>
        <label>Remember Me:</label>
        <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
      </div>
      <Button margin="0 auto" text="Sign In" type="submit" />
    </form>
  );
};

export default LoginForm;
