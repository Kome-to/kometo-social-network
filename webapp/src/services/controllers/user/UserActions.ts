import { createAction } from '@reduxjs/toolkit';
import { UserNormalized } from '../../types/apiType';

export const userActions = {
  getMe: createAction('user/GET_ME'),
};
