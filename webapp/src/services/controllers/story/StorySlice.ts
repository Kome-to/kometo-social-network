import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  list: any[];
} = {
  list: [],
};

export const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    setStoryList: (state, action: PayloadAction<any>) => {
      state.list = [...action.payload];
    },
  },
});

export const { setStoryList } = storySlice.actions;

export default storySlice.reducer;
