import { AnyAction } from '@reduxjs/toolkit';
import { get } from 'lodash';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { notify } from '../../../common/utils/notify';
import { storage } from '../../../common/utils/storage';
import api from '../../apiServices';
import { authActions } from './AuthActions';
import { resetPasswordSuccess, signUpSuccess } from './AuthSlice';

function* loginSaga(action: AnyAction): any {
  try {
    const data = yield call(api.auth.login, action.payload);
    storage.setToken(data);
    window.location.reload();
  } catch (error) {
    const message = get(error, 'response.data.message');
    notify.error(message);
  }
}

function* signUpSaga(action: AnyAction): any {
  try {
    yield call(api.auth.signUp, action.payload);
    yield put(signUpSuccess());
  } catch (error) {
    const message = get(error, 'response.data.message');
    notify.error(message);
  }
}

export function* authSaga() {
  yield all([takeLatest(authActions.login, loginSaga), takeLatest(authActions.signUp, signUpSaga)]);
}
