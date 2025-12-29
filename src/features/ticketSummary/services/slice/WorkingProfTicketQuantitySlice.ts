// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface TicketState {
//     WorkingProfTicketcount: number;
//   }
//   const initialState: TicketState = {
//     WorkingProfTicketcount:  0, // Initial count
//   };

//   const WorkingProfTicketSlice = createSlice({
//     name: 'workingProf-ticket',
//     initialState,
//     reducers: {
//       ticketIncrement: (state:any) => {
//         state.WorkingProfTicketcount += 1;
//         // sessionStorage.setItem("workingProfTicketCount",String(state.WorkingProfTicketcount) || "0")
//       },
//       ticketDecrement: (state:any) => {
//         if (state.WorkingProfTicketcount > 0) {
//           state.WorkingProfTicketcount -= 1;
//           // sessionStorage.setItem("workingProfTicketCount",String(state.WorkingProfTicketcount) || "0")
//         }
//       },
//       ticketResetCount: (state) => {
//         state.WorkingProfTicketcount = 0;
//       },
//       ticketSetCount: (state:any, action: PayloadAction<number>) => {
//         state.WorkingProfTicketcount = action.payload;
//         // sessionStorage.setItem("workingProfTicketCount",String(state.WorkingProfTicketcount) || "0")
//       },
//     },
//   });
  
//   export const { ticketIncrement, ticketDecrement,ticketResetCount, ticketSetCount } = WorkingProfTicketSlice.actions;
// export const workingProfTicketReducer = WorkingProfTicketSlice.reducer;