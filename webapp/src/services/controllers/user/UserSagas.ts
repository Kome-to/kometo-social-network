import { AxiosResponse } from 'axios';
import { get } from 'lodash';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { notify } from '../../../common/utils/notify';
import api from '../../apiServices';
import { userActions } from './UserActions';
import { setCurrentUser } from './UserSlice';

function* getMeSaga(action: any) {
  try {
    const data = (yield call(api.user.getMe)) as AxiosResponse;
    if (data) {
      yield put(setCurrentUser(data));
    }
  } catch (e) {
    const message = get(e, 'response.data.response');
    notify.error(message);
    yield put(setCurrentUser(undefined));
  }
}

export function* userSaga() {
  yield all([takeLatest(userActions.getMe, getMeSaga)]);
}
