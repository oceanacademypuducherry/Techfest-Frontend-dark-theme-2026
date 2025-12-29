import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TicketState {
  studentTicketCount: number;
  workingProfTicketCount: number;
}

const initialState: TicketState = {
  studentTicketCount: 0,
  workingProfTicketCount: 0,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<"student" | "workingProf">) => {
      if (action.payload === "student") {
        state.studentTicketCount += 1;
      } else {
        state.workingProfTicketCount += 1;
      }
    },
    decrement: (state, action: PayloadAction<"student" | "workingProf">) => {
      if (action.payload === "student" && state.studentTicketCount > 0) {
        state.studentTicketCount -= 1;
      } else if (action.payload === "workingProf" && state.workingProfTicketCount > 0) {
        state.workingProfTicketCount -= 1;
      }
    },
    resetCount: (state, action: PayloadAction<"student" | "workingProf">) => {
      if (action.payload === "student") {
        state.studentTicketCount = 0;
      } else {
        state.workingProfTicketCount = 0;
      }
    },
    setCount: (state, action: PayloadAction<{ type: "student" | "workingProf"; count: number }>) => {
      if (action.payload.type === "student") {
        state.studentTicketCount = action.payload.count;
      } else {
        state.workingProfTicketCount = action.payload.count;
      }
    },
  },
});

export const { increment, decrement, resetCount, setCount } = ticketSlice.actions;
export const ticketReducer = ticketSlice.reducer;
