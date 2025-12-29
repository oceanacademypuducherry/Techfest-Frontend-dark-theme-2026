// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface TicketState {
//     StudentTicketcount: number;
//   }
//   const initialState: TicketState = {
//     StudentTicketcount:  0, // Initial count
//   };

//   const studentTicketSlice = createSlice({
//     name: 'student-ticket',
//     initialState,
//     reducers: {
//       increment: (state:any) => {
//         state.StudentTicketcount += 1;
//         // sessionStorage.setItem("studentsTicketCount",String(state.StudentTicketcount) || "0")
//       },
//       decrement: (state:any) => {
//         if (state.StudentTicketcount > 0) {
//           state.StudentTicketcount -= 1;
//           // sessionStorage.setItem("studentsTicketCount",String(state.StudentTicketcount) || "0")
//         }
//       },
//       resetCount: (state) => {
       
        
//         state.StudentTicketcount = 0;
       
//       },
//       setCount: (state:any, action: PayloadAction<number>) => {
//         state.StudentTicketcount = action.payload;
//         // sessionStorage.setItem("studentsTicketCount",String(state.StudentTicketcount) || "0")

//       },
//     },
//   });
  
//   export const { increment, decrement, resetCount,setCount } = studentTicketSlice.actions;
// export const studentTicketReducer = studentTicketSlice.reducer;