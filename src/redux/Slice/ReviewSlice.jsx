import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { getApiData } from "../../Api1/apiUrl";

const initialState={
    banner:null,
    isloading:false,
    isError:false
}
export const reviewdata=createAsyncThunk('review',async()=>{
    const res=await getApiData('testimonials');
    console.log(res?.data);
    return res?.data;
})
const ReviewSlice=createSlice({
    name:"review",
    initialState,
    extraReducers:{
        [reviewdata.pending]:(state)=>{
            state.isloading=false
        },
        [reviewdata.fulfilled]:(state,{payload})=>{
            state.isloading=true
            state.banner=payload
        },
        [reviewdata.rejected]:(state)=>{
            state.isError=true;
        }
    }
})
export default ReviewSlice.reducer
