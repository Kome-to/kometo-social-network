import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  isSignUpSuccess?: boolean;
  isResetPasswordSuccess: boolean;
} = {
  isSignUpSuccess: false,
  isResetPasswordSuccess: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUpSuccess: (state) => {
      state.isSignUpSuccess = true;
    },
    resetPasswordSuccess: (state) => {
      state.isResetPasswordSuccess = true;
    },
  },
});

export const { signUpSuccess, resetPasswordSuccess } = authSlice.actions;

export default authSlice.reducer;
