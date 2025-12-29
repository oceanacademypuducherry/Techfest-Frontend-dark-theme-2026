import { createSlice } from "@reduxjs/toolkit";
import { getPlans } from "./";

interface Plans {
  isSuccess: boolean;
  data: any | [];
  message: string | null;
  isLoading: boolean;
}

const initialState: Plans = {
  isSuccess: false,
  data: [],
  message: null,
  isLoading: true,
};

const PlanSlice = createSlice({
  name: "Plant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlans.pending, (state) => {
        state.isSuccess = false;
        state.message = null;
        state.data = [];
      })
      .addCase(getPlans.fulfilled, (state, action) => {
        const { data, isSuccess, message } = action.payload;
        state.isSuccess = isSuccess;
        state.message = message;
        state.data = data;
        state.isLoading = false;
      })
      .addCase(getPlans.rejected, (state, action) => {
        state.isSuccess = false;
        state.message = null;
        state.data = [];
        state.message = action.error.message || "Failed to get plants";
      });
  },
});
export const planReducer = PlanSlice.reducer;
