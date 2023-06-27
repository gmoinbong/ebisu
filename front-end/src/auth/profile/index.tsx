import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProfileData, selectProfileStatus, fetchProfile } from '../../redux/slices/profileSlice';
import { initializeAuthData, selectAuthData } from '../../redux/slices/authSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector(selectProfileData);
  const profileStatus = useSelector(selectProfileStatus);
  const authData = useSelector(selectAuthData)
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);


  useEffect(() => {
    if (!authData) {
      dispatch(initializeAuthData())
    }
  }, [authData, dispatch]);

  if (profileStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (profileStatus === 'error') {
    return <div>Error occurred while fetching profile.</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      {profileData && (
        <div>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          {/* Отображайте другие данные профиля */}
        </div>
      )}
    </div>
  );
};

export default Profile;
