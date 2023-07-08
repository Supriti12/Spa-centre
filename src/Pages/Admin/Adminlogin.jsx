import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './login.css'
import { loginRequest1 } from '../../redux/Slice/authenSlice';
import { toast } from 'react-toastify';

const initialValue = {
    email: "",
    password: ""
}
const Adminlogin = () => {

    const [user, setUser] = useState(initialValue)
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const dispatch = useDispatch();
    const data = useSelector((state)=>{
        // console.log(state?.authen);
        return state?.authen?.user
    })

    //form validation
    const validation = () => {
        let error = {}
        if (!user.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }
        if (!user.password) {
            error.password = "Password is Required"
        }
        return error
    }
    //onchange validation
    let name, value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "Email is required" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" })
                setUser({ ...user, email: value })
            }
        }
        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "@password is Required" })
                setUser({ ...user, password: "" })
            } else {
                setError({ ...error, password: "" })
                setUser({ ...user, password: value })
            }
        }
    }

    const SubmitInfo =(e) => {
        // alert()
        e?.preventDefault()
        let ErrorList = validation()
        setError(ErrorList)
        if(data[0].email === user.email && data[0].password === user.password){
            localStorage.setItem("admin_token",data[0].id)
            localStorage.setItem("admin_name",data[0].firstname)
            toast.success("Admin login successfull")
            navigate('/appointmentdetails')
        }else{
            toast.error("invalid")
            navigate('/adminlogin')
        }
        // let data = {
        //     "email": user.email,
        //     "password": user.password,
        // }
        // dispatch(loginRequest1(data))
        // navigate('/')
    }

    useEffect(()=>{
        dispatch(loginRequest1())
    },[])

    return (

        <div className="login">
            <div className="container" style={{ width: "25%", backgroundColor: "white", opacity: "0.8", borderRadius: "5%" }}>
                <span className="logintitle">Admin Login</span>
                <form className="loginform">
                    <label><span style={{ color: "black" }}>Email</span><span style={{ color: "red" }}>*</span></label>
                    <input type="email" value={user.email} name='email' onChange={e => postUserData(e)} placeholder="Enter email" />
                    <span style={{ color: "red" }}> {error.email} </span>
                    <label><span style={{ color: "black" }}>Password</span><span style={{ color: "red" }}>*</span></label>
                    <input type="password" value={user.password} name='password' onChange={e => postUserData(e)} placeholder='Enter password' />
                    <span style={{ color: "red" }}> {error.password} </span>


                    <button onClick={SubmitInfo} className="loginbtn">Login</button><br/>






                </form>
            </div>
            {/* <div className="loginregister1">If you don't have an acount please register   <i class="fa-solid fa-arrow-right"></i> </div>
         <button className="loginregister"><Link style={{textDecoration:"none",color:"white"}} to="/adminregister">Register</Link></button> */}

        </div>

    )
}
export default Adminlogin