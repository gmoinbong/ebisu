import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface ProfileState {
  country: string;
}

const initialState: ProfileState = {
  country: 'Ukraine',
};



const ProfileSlice = createSlice({
  name: 'profileSlice',
  initialState: initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
  },
});

export const { setCountry } = ProfileSlice.actions;
export default ProfileSlice.reducer;
