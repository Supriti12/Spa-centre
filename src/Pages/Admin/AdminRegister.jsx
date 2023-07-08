import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/Slice/AuthSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './register.css'
import { register, registerUser1 } from '../../redux/Slice/authenSlice'
const initialValue = {
    firstname: "",
    email: "",
    lastname: "",
    password: "",
    confirmpassword:""
}

const AdminRegister = () => {
    const  item  = useSelector((state) => state?.authen);
    const [user, setUser] = useState(initialValue);
    const [Secrectkey,setSecrectkey]=useState("")
    const [error, setError] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const validation = () => {
        let error = {}
        if (!user.firstname) {
            error.firstname = "Firstname is Required"
        }


        if (!user.lastname) {
            error.lastname = "Lastname is Required"
        }

        if (!user.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }

        if (!user.confirmpassword) {
            error.confirmpassword = "Confirmpassword is Required"
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
        if (name === "firstname") {
            if (value.length === 0) {
                setError({ ...error, firstname: "@Firstname is Required" })
                setUser({ ...user, firstname: "" })
            } else {
                setError({ ...error, firstname: "" })
                setUser({ ...user, firstname: value })
            }
        }


        if (name === "lastname") {
            if (value.length === 0) {
                setError({ ...error, lastname: "@Lastname is Required" })
                setUser({ ...user, lastname: "" })
            } else {
                setError({ ...error, lastname: "" })
                setUser({ ...user, lastname: value })
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
        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "@password is Required" })
                setUser({ ...user, password: "" })
            } else {
                setError({ ...error, password: "" })
                setUser({ ...user, password: value })
            }
        }
        if (name === "confirmpassword") {
            if (value.length === 0) {
                setError({ ...error, confirmpassword: "@confirmpassword is Required" })
                setUser({ ...user, confirmpassword: "" })
            } else {
                setError({ ...error, confirmpassword: "" })
                setUser({ ...user, confirmpassword: value })
            }
        }
    }
 
    const SubmitInfo = async (e) => {
        if( Secrectkey!=="Shibam"){
            e.preventDefault()
            toast.error("invalid")
        }else{
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())
        if (Object.keys(ErrorList).length === 0) {
            let reg = {
                name: user.firstname,
                email: user.email,
                lastname:user.lastname,
                password: user.password,
                confirmpassword: user.confirmpassword,
                
               
            }
            dispatch(register(reg))
            navigate('/adminlogin')
            toast.success("Register successfully done")
           
        }else{
          toast.error("invalid")
        }
    }
    }
    
  return (
    <div className="register">
    <div className="container" style={{width:"20%",maxWidth:"100%",backgroundColor:"white",borderRadius:"5%",opacity:"0.8"}}>
        <span className="registertitle">Register</span>
        <form  className="registerform"style={{height:"90%"}}>


    
        <label><span style={{color:"black"}}>Secrect Key</span><span style={{color:"red"}}>*</span></label>
        <input type="text"  onChange={(e)=>setSecrectkey(e.target.value)} placeholder="Enter Secrect key" />
    
        
        
        <label><span style={{color:"black"}}>Name</span>First Name<span style={{color:"red"}}>*</span></label>
        <input type="text" value={user.firstname} name='firstname'  onChange={e=>postUserData(e)} placeholder="Enter Firstname" />
        <span style={{ color: "red" }}> {error.firstname} </span>
        <label><span style={{color:"black"}}>Last Name</span><span style={{color:"red"}}>*</span></label>
        <input type="text" value={user.lastname} name='lastname'  onChange={e=>postUserData(e)} placeholder="Enter Lastname" />
        <span style={{ color: "red" }}> {error.lastname} </span>
        <label><span style={{color:"black"}}>Email</span><span style={{color:"red"}}>*</span></label>
        <input type="email" value={user.email} name='email'  onChange={e=>postUserData(e)} placeholder="Enter Email" />
        <span style={{ color: "red" }}> {error.email} </span>
        <label><span style={{color:"black"}}>Password</span><span style={{color:"red"}}>*</span></label>
        <input type="password" value={user.password} name='password'  onChange={e=>postUserData(e)} placeholder='Enter password'  />
        <span style={{ color: "red" }}> {error.password} </span>
        <label><span style={{color:"black"}}>Confirm Password</span><span style={{color:"red"}}>*</span></label>
        <input type="password" value={user.confirmpassword} name='confirmpassword'  onChange={e=>postUserData(e)} placeholder='Enter password'  />
        <span style={{ color: "red" }}> {error.confirmpassword} </span>
        
        
            <button onClick={SubmitInfo} className="registerbtn">Register</button>
        
         </form>
         </div>
         <div className="loginregister1">If you have an acount please login   <i class="fa-solid fa-arrow-right"></i> </div>
         <button className="registerregister"><Link style={{textDecoration:"none",color:"white"}} to={"/adminlogin"} >Login</Link></button>
        </div>
  )
}
export default AdminRegister