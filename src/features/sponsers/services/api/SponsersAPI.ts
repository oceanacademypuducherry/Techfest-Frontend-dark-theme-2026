import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "../../../../service";

export const getSponsers = createAsyncThunk(
    "/sponsor/get",
    async(_,thunkAPI) =>{
        try{
            const response = await UserAPI.get("/sponsor/get",{
                headers:{
                    "Content-Type":"application/json",
                }
            })
            return response.data;
        } catch(error:any){
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)