import { all } from 'redux-saga/effects';
import { authSaga } from './services/controllers/auth/AuthSagas';
import { userSaga } from './services/controllers/user/UserSagas';
import { storySaga } from './services/controllers/story/StorySaga';

export default function* rootSaga() {
  yield all([authSaga(), userSaga(), storySaga()]);
}
