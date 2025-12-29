import { createAsyncThunk } from "@reduxjs/toolkit";
import {UserAPI} from "../../../../service";

interface TicketCount{
    count: number
}
export const quantityCheck = createAsyncThunk(
    "/availability/:ticketsRequested",
    async({count}: TicketCount,thunkAPI)=>{
        try{
            const response = await UserAPI.get(`/ticket/availability/${count}`,{
                headers: {
                    "Content-Type":"application/json"
                }
            })
            return response.data;
        } catch(error: any){
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)