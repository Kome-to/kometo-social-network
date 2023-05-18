import { createAction } from '@reduxjs/toolkit';
import { UserNormalized } from '../../types/apiType';

export const userActions = {
  getMe: createAction('user/GET_ME'),
  getSuggestFriend: createAction('user/GET_SUGGEST_FRIEND'),
  getPost: createAction('user/GET_POST'),
};
