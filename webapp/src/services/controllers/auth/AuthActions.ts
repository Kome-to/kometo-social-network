import { createAction } from '@reduxjs/toolkit';
import { LoginForm, SignUpForm } from '../../../views/login/LoginView';

export const authActions = {
  login: createAction<LoginForm>('auth/LOGIN'),
  signUp: createAction<SignUpForm>('auth/SIGNUP'),
};
