import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../store';

const selectAuth = (state: RootState) => state.auth;

export const selectIsSignUpSuccess = createSelector(selectAuth, (auth) => auth.isSignUpSuccess);
