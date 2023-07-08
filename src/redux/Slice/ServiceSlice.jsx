import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    serv:null,
    isloading:false,
    isError:false
}
export const fetchdata=createAsyncThunk('service',async()=>{
    const res=await axios.get("http://127.0.0.1:3008/services");
    console.log(res?.data);
    return res?.data;
})
const ServiceSlice=createSlice({
    name:"service",
    initialState,
    extraReducers:{
        [fetchdata.pending]:(state)=>{
            state.isloading=false
        },
        [fetchdata.fulfilled]:(state,{payload})=>{
            state.isloading=true
            state.serv=payload
        },
        [fetchdata.rejected]:(state)=>{
            state.isError=true;
        }
    }
})
export default ServiceSlice.reducer
