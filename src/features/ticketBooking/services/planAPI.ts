import { createAsyncThunk } from "@reduxjs/toolkit";
import {UserAPI} from "../../../service";

export const getPlans = createAsyncThunk(
    "/get/plan",
    async(_,thunkAPI) =>{
        try{
            const response = await UserAPI.get("/plan/get",{
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