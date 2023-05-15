import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Socket } from 'socket.io-client';

export interface CommonState {
  loading: boolean;
  socket: Socket | null;

  ui: {
    dialog: {
      [name: string]: boolean;
    };
  };
}

const initialState: CommonState = {
  loading: false,
  socket: null,
  ui: { dialog: {} },
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    toggleModals: (state, action: PayloadAction<string>) => {
      state.ui.dialog = { ...state.ui.dialog, [action.payload]: !state.ui.dialog[action.payload] };
    },
    setSocket: (state, action) => {
      const { socket } = action.payload;
      state.socket = socket;
    },
  },
});

export const { setLoading, toggleModals, setSocket } = commonSlice.actions;

export default commonSlice.reducer;
