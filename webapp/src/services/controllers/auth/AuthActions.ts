import { createAction } from '@reduxjs/toolkit';
import { LoginForm } from '../../../views/login/LoginView';
import { SignUpForm } from '../../../views/sign-up/SignUpView';

export const authActions = {
  login: createAction<LoginForm>('auth/LOGIN'),
  signUp: createAction<SignUpForm>('auth/SIGNUP'),
};
