import { all } from 'redux-saga/effects';
import { authSaga } from './services/controllers/auth/AuthSagas';

export default function* rootSaga() {
  yield all([authSaga()]);
}
