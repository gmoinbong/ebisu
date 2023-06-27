import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProfileStatus, fetchProfile } from '../../redux/slices/profileSlice';
import { RootState } from '../../app/store';
import { initializeAuthData } from '../../redux/slices/authSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state: RootState) => state.profile.data);
  const profileStatus = useSelector(selectProfileStatus);
  const token = useSelector((state: RootState) => state.auth.token);
  console.log('profiledata', profileData);

  useEffect(() => {
    dispatch(initializeAuthData());
    dispatch(fetchProfile({ token }));
  }, [dispatch, token]);

  console.log('token ==>', token);

  if (profileStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (profileStatus === 'error') {
    return <div>Error occurred while fetching profile.</div>;
  }

  if (!profileData) {
    return <div>No profile data available.</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <p>Email: {profileData.email}</p>
      </div>
    </div>
  );
};

export default Profile;
