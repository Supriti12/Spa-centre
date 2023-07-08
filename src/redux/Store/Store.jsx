import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from '../Slice/ContactSlice'
import AppointmentReducer from '../Slice/AppointmentSlice'
import AuthReducer from '../Slice/AuthSlice'
import BlogReducer from "../Slice/BlogSlice"
import ServiceReducer from "../Slice/ServiceSlice"
import ReviewSlice from "../Slice/ReviewSlice";
import BannerReducer from "../Slice/BannerSlice";
import AboutReducer from "../Slice/AboutSlice";
import authenReducer from '../Slice/authenSlice'
export const Store = configureStore({
    reducer: {
        contact:ContactReducer,
        appointment:AppointmentReducer,
        auth:AuthReducer,
        blog: BlogReducer,
        service: ServiceReducer,
        review: ReviewSlice,
        banner:BannerReducer,
        about:AboutReducer,
        authen:authenReducer
    }
}
)