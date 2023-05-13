import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  current: any | undefined;
  suggestFriendList: any[];
} = {
  current: undefined,
  suggestFriendList: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<any>) => {
      state.current = action.payload;
    },
    setSuggestFriendList: (state, action: PayloadAction<any>) => {
      state.suggestFriendList = [...action.payload];
    },
  },
});

export const { setCurrentUser, setSuggestFriendList } = userSlice.actions;

export default userSlice.reducer;
