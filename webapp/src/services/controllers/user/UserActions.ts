import { createAction } from '@reduxjs/toolkit';
import { UserNormalized } from '../../types/apiType';

export const userActions = {
  getDetail: createAction('user/GET_DETAIL'),
  getDetailSuccess: createAction<UserNormalized>('user/GET_DETAIL_SUCCESS'),
};
