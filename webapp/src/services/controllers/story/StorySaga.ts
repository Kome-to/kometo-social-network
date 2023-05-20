import { AxiosResponse } from 'axios';
import { get } from 'lodash';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { notify } from '../../../common/utils/notify';
import api from '../../apiServices';
import { storyActions } from './StoryActions';
import { setStoryList } from './StorySlice';

function* getStorySaga(action: any) {
  try {
    const data = (yield call(api.story.getStory)) as any[];
    yield put(setStoryList([...data]));
  } catch (error) {
    const message = get(error, 'data.response.message');
    notify.error(message);
  }
}

export function* storySaga() {
  yield all([takeLatest(storyActions.getStory, getStorySaga)]);
}
