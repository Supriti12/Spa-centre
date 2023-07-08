import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const BaseUrl="http://127.0.0.1:3009/appointment"
export const FetchAppointment = createAsyncThunk("fetch", async () => {

        let res = await axios.get(BaseUrl);
        
        return res?.data;

    })
export const Adddata =  async (user) => {
        let res = await axios.post(BaseUrl,user);
        
        return res?.data;
    } 
    export const EditAppointment = async(user) => {
            const res= await axios.get(`${BaseUrl}/${user}`)
            return res
    }
    
    export const Update = async (id,user) => {
           const res= await axios.put(`${BaseUrl}/${id}`,user)
           return res

    }
    
    export const deleteAppointment = async id => {
            await axios.delete(`${BaseUrl}/${id}`)
    
    }
const initialState = ({
    
    A_data:localStorage.getItem("A_data") ? localStorage.getItem(JSON.parse("A_data")) :null,
     isLoading:false
})

export const AppointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducer: {},
    extraReducers: {
        [FetchAppointment.pending]: (state) => {
            state.isLoading=false
        
        },
        [FetchAppointment.fulfilled]: (state, { payload }) => {
            state.isLoading = true
            state.A_data = payload;
            localStorage.setItem("Data",JSON.stringify(payload))
        },
        [FetchAppointment.rejected]: (state) => {
            state.isLoading = false
        },

    },

})
export default AppointmentSlice.reducer