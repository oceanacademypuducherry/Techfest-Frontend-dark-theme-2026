import { createSlice } from "@reduxjs/toolkit";
import { getSponsers } from "../api";

interface Sponsers {
  isSuccess: boolean;
  data: any | [];
  message: string | null;
  isLoading: boolean;
}

const initialState: Sponsers = {
  isSuccess: false,
  data: [],
  message: null,
  isLoading: true,
};

const SponsersSlice = createSlice({
  name: "Plant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSponsers.pending, (state) => {
        state.isSuccess = false;
        state.message = null;
        state.data = [];
      })
      .addCase(getSponsers.fulfilled, (state, action) => {
        const { data, isSuccess, message } = action.payload;
        state.isSuccess = isSuccess;
        state.message = message;
        state.data = data;
        state.isLoading = false;
      })
      .addCase(getSponsers.rejected, (state, action) => {
        state.isSuccess = false;
        state.message = null;
        state.data = [];
        state.message = action.error.message || "Failed to get sponsers";
      });
  },
});
export const SponsersReducer = SponsersSlice.reducer;
