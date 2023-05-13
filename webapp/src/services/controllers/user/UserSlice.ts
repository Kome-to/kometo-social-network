import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  current: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<any>) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
