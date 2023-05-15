import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  current: any | undefined;
  suggestFriendList: any[];
  currentChat: any | undefined;
  friends: any[];
  chatSession: any[];
} = {
  current: undefined,
  suggestFriendList: [],
  currentChat: undefined,
  chatSession: [],
  friends: [],
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
    setCurrentChat: (state, action: PayloadAction<any>) => {
      state.currentChat = action.payload;
    },
    setFriends: (state, action: PayloadAction<any>) => {
      state.friends = [...action.payload];
    },
    setChatSession: (state, action: PayloadAction<any>) => {
      state.chatSession = [...action.payload];
    },
  },
});

export const { setCurrentUser, setSuggestFriendList, setCurrentChat, setFriends, setChatSession } = userSlice.actions;

export default userSlice.reducer;
