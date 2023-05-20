import { createAction } from '@reduxjs/toolkit';
import { UserNormalized } from '../../types/apiType';

export const storyActions = {
  getStory: createAction('user/GET_STORY'),
};
