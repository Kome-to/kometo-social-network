import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../store';

const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(selectUser, (user) => user.current);
export const selectSuggestFriendsList = createSelector(selectUser, (user) => user.suggestFriendList);
export const selectFriends = createSelector(selectUser, (user) => user.friends);
export const selectCurrentChat = createSelector(selectUser, (user) => user.currentChat);
export const selectChatSession = createSelector(selectUser, (user) => user.chatSession);
