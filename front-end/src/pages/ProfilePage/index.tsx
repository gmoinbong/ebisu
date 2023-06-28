import { useEffect, useState } from 'react';
import * as yup from 'yup';
import styles from './Profile.module.css';

import Button from '../../components/layout/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { clearAuthData, initializeAuthData } from '../../redux/slices/authSlice';
import { selectProfileStatus, fetchProfile } from '../../redux/slices/profileSlice';
import { Link } from 'react-router-dom';
import { useRouteChange } from '../../hooks/useRouteChange';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state: RootState) => state.profile.data);
  const profileStatus = useSelector(selectProfileStatus);
  const country = useSelector((state: RootState) => state.setCountry.country)
  const token = useSelector((state: RootState) => state.auth.token);
  const routChange = useRouteChange()

  useEffect(() => {
    dispatch(initializeAuthData());
    dispatch(fetchProfile({ token }));
  }, [dispatch, token]);

  useEffect(() => {
    if (profileStatus === 'loading' || profileStatus === 'error') {
      dispatch(fetchProfile({ token }));
    }
  }, [profileStatus, dispatch, token]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const schema = yup.object().shape({
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.string().required('Please enter your last name'),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Please enter your email address'),
    address: yup.string().required('Please enter your address'),
    country: yup.string().required('Please select your country'),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate({
        firstName,
        lastName,
        email,
        address,
      });

    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authData')
    dispatch(clearAuthData());
    routChange('/login')
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };



  if (profileStatus === 'loading') {
    return <div className={styles.profileContainer}>Loading...</div>;
  }

  if (profileStatus === 'error') {
    return <div className={styles.profileContainer}>Error occurred while fetching profile.</div>;
  }

  if (!profileData) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} className={styles.profileContainer}>
        <div className={styles.content}>
          <h2>Welcome!</h2>
          <p>Please sign up or sign in to view your profile.</p>
          <div>
            <Link to='/login' className={styles.link}>Sign In</Link>
            <br />
            <Link to='/signup' className={styles.link}>Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.profileTitle}>Profile</h2>
      <form className={styles.profileForm} onSubmit={handleSubmit}>
        <div className={styles.profileField}>
          <label style={{ minHeight: '46px' }} className={styles.profileLabel} htmlFor="email">Email: </label>
          <p style={{ fontWeight: '500' }}>{profileData.email}</p>
        </div>
        <div className={styles.profileField}>
          <label style={{ minHeight: '46px' }} className={styles.profileLabel} htmlFor="email">Country: </label>
          <p style={{ fontWeight: '500' }}>{country}</p>
        </div>
        <div className={styles.profileField}>
          <label className={styles.profileLabel} htmlFor="firstName">First Name:</label>
          <input
            className={styles.profileInput}
            type="text"
            id="firstName"
            value={profileData.fullName || firstName}
            required
          />
          {errors.firstName && <span className={styles.profileError}>{errors.firstName}</span>}
        </div>
        <div className={styles.profileField}>
          <label className={styles.profileLabel} htmlFor="lastName">Last Name:</label>
          <input
            className={styles.profileInput}
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
          {errors.lastName && <span className={styles.profileError}>{errors.lastName}</span>}
        </div>
        <div className={styles.profileField}>
          <label className={styles.profileLabel} htmlFor="address">Address:</label>
          <input
            className={styles.profileInput}
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
          {errors.address && <span className={styles.profileError}>{errors.address}</span>}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button width='100%' margin='10px' maxWidth={200} text='save' type="submit" />
          <Button width='100%' margin='10px' onClick={handleLogout} backgroundColor='#000' maxWidth={200} text='logout' />
        </div>
      </form >
    </div >
  );
};

export default ProfilePage;