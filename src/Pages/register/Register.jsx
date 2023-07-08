import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/Slice/AuthSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { MagnifyingGlass } from 'react-loader-spinner'
import './register.css'
const initialValue = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    usertype:""
}

const Register = () => {
    const  {redirectReg,loading}  = useSelector((state) => state?.auth);
    const [user, setUser] = useState(initialValue);
    const [Secrectkey,setSecrectkey]=useState("")
    const [error, setError] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const validation = () => {
        let error = {}
        if (!user.usertype) {
            error.name = "usertype is Required"
        }


        if (!user.name) {
            error.name = "Name is Required"
        }

        if (!user.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }

        if (!user.mobile) {
            error.mobile = "Mobile is Required"
        }
        if (!user.password) {
            error.password = "Password is Required"
        }

        return error
    }

    let name, value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
        if (name === "usertype") {
            if (value.length === 0) {
                setError({ ...error, usertype: "@Usertype is Required" })
                setUser({ ...user, usertype: "" })
            } else {
                setError({ ...error, usertype: "" })
                setUser({ ...user, usertype: value })
            }
        }


        if (name === "name") {
            if (value.length === 0) {
                setError({ ...error, name: "@Name is Required" })
                setUser({ ...user, name: "" })
            } else {
                setError({ ...error, name: "" })
                setUser({ ...user, name: value })
            }
        }
        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "Email is required" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" })
                setUser({ ...user, email: value })
            }
        }
        if (name === "mobile") {
            if (value.length === 0) {
                setError({ ...error, mobile: "@mobile is Required" })
                setUser({ ...user, mobile: "" })
            } else {
                setError({ ...error, mobile: "" })
                setUser({ ...user, mobile: value })
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
 
    const SubmitInfo = async (e) => {
        if(user.usertype==="Admin"  && Secrectkey!=="Shibam"){
            e.preventDefault()
            toast.error("invalid")
        }else{
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())
        let formData = new FormData();
        if (Object.keys(ErrorList).length === 0) {
            formData.append("name", user.name);
            formData.append("email", user.email);
            formData.append("mobile", user.mobile);
            formData.append("password", user.password);
            dispatch(registerUser(formData))
             navigate('/login')
        }
        }
    }
    const redirectUser = () => {
        let name = localStorage.getItem("name")
        let isInLoginPage = window.location.pathname.toLowerCase() === "/register";
        if (name !== null && name !== undefined && name !== "") {
            isInLoginPage && navigate("/login");
        }
    }
    useEffect(() => {
        redirectUser()
    }, [redirectReg])
  return (
    <div className="register">
    <div className="container" style={{width:"50%",maxWidth:"100%",backgroundColor:"white",borderRadius:"5%",opacity:"0.8"}}>
        <span className="registertitle">Register</span>
        <form  className="registerform"style={{height:"90%",width:'100%'}}>

        <div>
        <label><span style={{color:"black"}}>User</span></label>
        <input type="radio" value="User" name='usertype'  onChange={e=>postUserData(e)}  />
    
        
        <label><span style={{color:"black"}}>Admin</span></label>
        <input type="radio" value="Admin" name='usertype'   onChange={e=>postUserData(e)}  />
        
        </div>
        {user.usertype =="Admin" ? (<>
    
        <label><span style={{color:"black"}}>Secrect Key</span><span style={{color:"red"}}>*</span></label>
        <input type="text"  onChange={(e)=>setSecrectkey(e.target.value)} placeholder="Enter Secrect key" />
        </>):null
        

    
    
             }
        
        
        <label><span style={{color:"black"}}>Name</span><span style={{color:"red"}}>*</span></label>
        <input type="text" value={user.name} name='name'  onChange={e=>postUserData(e)} placeholder="Enter Firstname" />
        <span style={{ color: "red" }}> {error.name} </span>
        <label><span style={{color:"black"}}>Mobile</span><span style={{color:"red"}}>*</span></label>
        <input type="number" value={user.mobile} name='mobile'  onChange={e=>postUserData(e)} placeholder="Enter Mobile Number" />
        <span style={{ color: "red" }}> {error.mobile} </span>
        <label><span style={{color:"black"}}>Email</span><span style={{color:"red"}}>*</span></label>
        <input type="email" value={user.email} name='email'  onChange={e=>postUserData(e)} placeholder="Enter Email" />
        <span style={{ color: "red" }}> {error.email} </span>
        <label><span style={{color:"black"}}>Password</span><span style={{color:"red"}}>*</span></label>
        <input type="password" value={user.password} name='password'  onChange={e=>postUserData(e)} placeholder='Enter password'  />
        <span style={{ color: "red" }}> {error.password} </span>
        
            <button onClick={SubmitInfo} className="registerbtn" style={{fontSize:'15px'}}>Register</button><br/>
            <h3 style={{textAlign:'center'}}>Don't have an account??<Link to='/login' style={{color:'blue'}}>Login</Link></h3><br/>
        
         </form>
         </div>
         {/* <div className="loginregister1">If you already have an acount please login<i class="fa-solid fa-arrow-right"></i> </div>
         <button className="registerregister"><Link style={{textDecoration:"none",color:"white"}} to={"/login"} >Login</Link></button> */}
        </div>
  )
}
export default Register