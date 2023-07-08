import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    data: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : {},
    isLoading: false,
    isError: false,
    status:null
}
const BaseUrl="http://127.0.0.1:3003/contact"
export const Fetchdata = createAsyncThunk("fetch", async () => {

    let res = await axios.get(BaseUrl);
    
    return res?.data;

})

export const Contactdata =async  (data) => {
    const res = await axios.post(BaseUrl,data); 
    return res?.data;
    
}

const ContactSlice=createSlice({
    name:"contact",
    initialState,
    extraReducers:{
        [Fetchdata.pending]: (state)=>{
            state.isLoading=false
        },
        [Fetchdata.fulfilled]: (state, {payload})=>{
            state.isLoading=true
            state.data=payload
            state.status=payload
            localStorage.setItem("Data",JSON.stringify(state.data))
        },
        [Fetchdata.rejected]: (state)=>{
         state.isError= true
        }
    }
})

export default ContactSlice.reducer