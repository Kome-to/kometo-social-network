import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseState } from '../../../common/enum';
import { UserDTO } from '../../types/apiType';
import { userActions } from './UserActions';

export interface UserState extends BaseState<UserDTO> {
  current?: string;
}

export const userAdapter = createEntityAdapter<UserDTO>();

const initialState: UserState = {
  list: {
    ...userAdapter.getInitialState(),
    totalCount: 0,
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: null,
      endCursor: null,
    },
  },
  current: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userActions.getDetailSuccess, (state, action) => {
      userAdapter.upsertMany(state.list, action.payload.user);
    });
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
