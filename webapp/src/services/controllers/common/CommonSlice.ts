import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CommonState {
  loading: boolean;
  ui: {
    dialog: {
      [name: string]: boolean;
    };
  };
}

const initialState: CommonState = {
  loading: false,
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
  },
});

export const { setLoading, toggleModals } = commonSlice.actions;

export default commonSlice.reducer;
