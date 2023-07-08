import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useDispatch, } from 'react-redux';
import {  EditAppointment, Update } from '../../../redux/Slice/AppointmentSlice';
import { toast } from 'react-toastify';


export const EditAppoinment = () => {
    const [user,setUser]= useState({
        name:"",
        email:"",
        phone:"",
        spa:"",
        time:"",
        date:"",
        message:""
    })
    const [error, setError] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {id}=useParams()
    const getUserData = async () => {
        let response = await EditAppointment(id)
        setUser(response?.data)
    }

    useEffect(() => {
        getUserData()
    }, [])


    const validation = () => {
        let error = {}

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

        if (!user.phone) {
            error.phone = "Phone is Required"
        }
        if (!user.spa) {
            error.spa = "Spa is Required"
        }
        if (!user.time) {
            error.time = "Time is Required"
        }
        if (!user.date) {
            error.date = "Date is Required"
        }
        if (!user.message) {
            error.message = "Message is Required"
        }

        return error
    }

    let name, value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })


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
        if (name === "phone") {
            if (value.length === 0) {
                setError({ ...error, phone: "@mobile is Required" })
                setUser({ ...user, phone: "" })
            } else {
                setError({ ...error, phone: "" })
                setUser({ ...user, phone: value })
            }
        }
        if (name === "spa") {
            if (value.length === 0) {
                setError({ ...error, spa: "@Spa is Required" })
                setUser({ ...user, spa: "" })
            } else {
                setError({ ...error, spa: "" })
                setUser({ ...user, spa: value })
            }
        }
        if (name === "time") {
            if (value.length === 0) {
                setError({ ...error, time: "Time is required" })
                setUser({ ...user, time: "" })
            } else {
                setError({ ...error, time: "" })
                setUser({ ...user, time: value })
            }
        }
        if (name === "date") {
            if (value.length === 0) {
                setError({ ...error, date: "Date is Required" })
                setUser({ ...user, date: "" })
            } else {
                setError({ ...error, date: "" })
                setUser({ ...user, date: value })
            }
        }
        if (name === "message") {
            if (value.length === 0) {
                setError({ ...error, message: "message is Required" })
                setUser({ ...user, message: "" })
            } else {
                setError({ ...error, message: "" })
                setUser({ ...user, message: value })
            }
        }
    }
    const SubmitInfo = async (e) => {
        e?.preventDefault()
        let ErrorList = validation()
        setError(validation())
        
        if (Object.keys(ErrorList).length === 0) {
          await Update(id,user)
          navigate('/appointmentdetails')
          toast.success("update successfully done")
          
      }else{
        toast.error("invalid")
      }
    }

  return (
    <>
    <div className="appointment">
  <div className="container">
    <div className="row">
      <div className="col-md-12 ">
        <div className="titlepage text_align_center">
          <h2>Make Appointment</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu
          </p>
        </div>
      </div>
      <div className="col-md-12">
        <form onSubmit={SubmitInfo} id="request" className="main_form">
          <div className="row">
            <div className="col-md-6 ">
              <input
                className="form_control"
                placeholder="Your name"
                type="type"
                name="name"
                value={user.name}
                onChange={e=>postUserData(e)}
              />
              <span style={{ color: "red" }}> {error.name} </span>
            </div>
            <div className="col-md-6">
              <input
                className="form_control"
                placeholder="Email"
                type="type"
                name="email"
                value={user.email}
                onChange={e=>postUserData(e)}
              />
              <span style={{ color: "red" }}> {error.email} </span>
            </div>
            <div className="col-md-6">
              <input
                className="form_control"
                placeholder="Phone Number"
                type="type"
                name="phone"
                value={user.phone}
                onChange={e=>postUserData(e)}
              />
              <span style={{ color: "red" }}> {error.phone} </span>
            </div>
            <div className="col-md-6">
              <input
                className="form_control"
                placeholder="selet msg spa"
                type="type"
                name="spa"
                value={user.spa}
                onChange={e=>postUserData(e)}
              />
              <span style={{ color: "red" }}> {error.spa} </span>
            </div>
            <div className="col-md-6 ">
              <input
                className="form_control"
                placeholder="Time"
                type="type"
                name= "time"
                value={user.time}
                onChange={e=>postUserData(e)}
              />
              <span style={{ color: "red" }}> {error.time} </span>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form_control"
                id="my_date_picker"
                placeholder="Select Date"
                name='date'
                value={user.date}
                onChange={e=>postUserData(e)}
              />
              <span style={{ color: "red" }}> {error.date} </span>
            </div>
            <div className="col-md-12">
              <textarea
                style={{ color: "#d0d0cf" }}
                className="textarea"
                placeholder="Message"
                type="type"
                name="message"
                value={user.message}
                onChange={e=>postUserData(e)}
              />
              <span style={{ color: "red" }}> {error.message} </span>
            </div>
            <div className="col-md-12">
            <button type='submit' className="send_btn">UpdateBooking</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}
