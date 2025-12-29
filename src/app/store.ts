import { configureStore } from "@reduxjs/toolkit";
import {planReducer } from "../features/ticketBooking/services";
import {ticketReducer,primaryUserReducer } from "../features/ticketSummary/services"
import { loaderReducer } from "../features/ticketConfirmation/services";
import { SponsersReducer } from "../features/sponsers/services/slice";

export const store = configureStore({
    reducer: {

        ticketReducer: ticketReducer,
        plans: planReducer,
        primaryUser: primaryUserReducer,
        loader: loaderReducer,
        sponsers : SponsersReducer
    }
})

export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;