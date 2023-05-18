import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  current: any | undefined;
  suggestFriendList: any[];
  currentChat: any | undefined;
  friends: any[];
  chatSession: any[];
  posts: any[];
} = {
  current: undefined,
  suggestFriendList: [],
  currentChat: undefined,
  chatSession: [],
  friends: [],
  posts: [],
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
    setPosts: (state, action: PayloadAction<any>) => {
      state.posts = [...action.payload];
    },
  },
});

export const { setCurrentUser, setSuggestFriendList, setCurrentChat, setFriends, setChatSession, setPosts } = userSlice.actions;

export default userSlice.reducer;
