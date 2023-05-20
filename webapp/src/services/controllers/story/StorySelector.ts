import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../store';

const selectStory = (state: RootState) => state.story;

export const selectStoryList = createSelector(selectStory, (story) => story.list);
