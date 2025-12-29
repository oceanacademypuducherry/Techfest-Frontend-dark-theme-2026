import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PrimaryUserState {
  isPrimaryUserStudent: boolean ; // null means no selection initially
}

const initialState: PrimaryUserState = {
  isPrimaryUserStudent: true ,
};

const primaryUserSlice = createSlice({
  name: 'primaryUser',
  initialState,
  reducers: {
    setPrimaryUser: (state, action: PayloadAction<boolean>) => {
      state.isPrimaryUserStudent = action.payload;
    },
  },
});

export const { setPrimaryUser } = primaryUserSlice.actions;
export const primaryUserReducer = primaryUserSlice.reducer;
