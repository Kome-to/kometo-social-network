import { get } from 'lodash';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../apiServices';
import { userEntity } from '../schemas';
import { userActions } from './UserActions';
import { UserDTO, UserNormalized } from '../../types/apiType';
import { notify } from '../../../common/utils/notify';
import { normalized } from '../../../common/utils/normalized';
import { setCurrentUser } from './UserSlice';
import { CommonGenerator } from '../../types/common';

function* getUserDetailSaga(): CommonGenerator<UserDTO, any> {
  try {
    const data = yield call(api.user.getUserDetail);
    if (data) {
      yield put(userActions.getDetailSuccess(normalized<UserNormalized>(data, userEntity)));
      yield put(setCurrentUser(data.id));
    }
  } catch (error) {
    const message = get(error, 'response.data.message');
    notify.error(message);
  }
}

export function* userSaga() {
  yield all([takeLatest(userActions.getDetail, getUserDetailSaga)]);
}
