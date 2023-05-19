import { AxiosResponse } from 'axios';
import { get } from 'lodash';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { notify } from '../../../common/utils/notify';
import api from '../../apiServices';
import { userActions } from './UserActions';
import { setCurrentUser, setPosts, setSuggestFriendList } from './UserSlice';

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

function* getSuggestFriendSaga(action: any) {
  try {
    const list = (yield call(api.user.getSuggestFriend)) as any[];
    yield put(setSuggestFriendList([...list]));
  } catch (error) {
    const message = get(error, 'response.data.message');
    notify.error(message);
  }
}

function* getPostSaga(action: any) {
  try {
    const data = (yield call(api.user.getPost)) as any[];
    yield put(setPosts([...data]));
  } catch (error) {
    const message = get(error, 'data.response.message');
    notify.error(message);
  }
}

export function* userSaga() {
  yield all([takeLatest(userActions.getMe, getMeSaga)]);
  yield all([takeLatest(userActions.getSuggestFriend, getSuggestFriendSaga)]);
  yield all([takeLatest(userActions.getPost, getPostSaga)]);
}
