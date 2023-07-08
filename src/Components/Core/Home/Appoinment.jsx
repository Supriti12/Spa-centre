import { Link, Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Adddata } from '../../../redux/Slice/AppointmentSlice';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const Appoinment = () => {
  const { Logouttoggle } = useSelector((state) => state?.auth)
  const [modalIsopen, setModalIsopen] = useState(false)
  const [user1, setUser1] = useState({
    name: "",
    email: "",
    phone: "",
    spa: "",
    time: "",
    date: "",
    message: ""
  })
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const validation = () => {
    let error = {}

    if (!user1.name) {
      error.name = "Name is Required"
    }

    if (!user1.email) {
      error.email = "Email is Required"
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user1.email)
    ) {
      error.email = "Enter a valid Email"
    }

    if (!user1.phone) {
      error.phone = "Phone is Required"
    }
    if (!user1.spa) {
      error.spa = "Spa is Required"
    }
    if (!user1.time) {
      error.time = "Time is Required"
    }
    if (!user1.date) {
      error.date = "Date is Required"
    }
    if (!user1.message) {
      error.message = "Message is Required"
    }

    return error
  }

  let name, value
  const postuser1Data = (e) => {
    name = e.target.name
    value = e.target.value
    setUser1({ ...user1, [name]: value })


    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "@Name is Required" })
        setUser1({ ...user1, name: "" })
      } else {
        setError({ ...error, name: "" })
        setUser1({ ...user1, name: value })
      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is required" })
        setUser1({ ...user1, email: "" })
      } else {
        setError({ ...error, email: "" })
        setUser1({ ...user1, email: value })
      }
    }
    if (name === "phone") {
      if (value.length === 0) {
        setError({ ...error, phone: "@mobile is Required" })
        setUser1({ ...user1, phone: "" })
      } else {
        setError({ ...error, phone: "" })
        setUser1({ ...user1, phone: value })
      }
    }
    if (name === "spa") {
      if (value.length === 0) {
        setError({ ...error, spa: "@Spa is Required" })
        setUser1({ ...user1, spa: "" })
      } else {
        setError({ ...error, spa: "" })
        setUser1({ ...user1, spa: value })
      }
    }
    if (name === "time") {
      if (value.length === 0) {
        setError({ ...error, time: "Time is required" })
        setUser1({ ...user1, time: "" })
      } else {
        setError({ ...error, time: "" })
        setUser1({ ...user1, time: value })
      }
    }
    if (name === "date") {
      if (value.length === 0) {
        setError({ ...error, date: "Date is Required" })
        setUser1({ ...user1, date: "" })
      } else {
        setError({ ...error, date: "" })
        setUser1({ ...user1, date: value })
      }
    }
    if (name === "message") {
      if (value.length === 0) {
        setError({ ...error, message: "message is Required" })
        setUser1({ ...user1, message: "" })
      } else {
        setError({ ...error, message: "" })
        setUser1({ ...user1, message: value })
      }
    }
  }
  const SubmitInfo = async (e) => {
    e?.preventDefault()
    let ErrorList = validation()
    setError(validation())

    if (Logouttoggle === true) {
      setModalIsopen(false)
    }

    if (Object.keys(ErrorList).length === 0) {
       
      if(Logouttoggle===true){

            
      await Adddata(user1)

      navigate('/')
      toast.success("Booking successfully done we will contact you soon...")
      
      }else {
        toast.error("invalid")
      }

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
                  We look forward to welcoming you to our spa and creating a truly unforgettable experience for you.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <form onSubmit={SubmitInfo} id="request" className="main_form">
                <div className="row">
                  <div className="col-md-6 ">
                    <span style={{ color: "red" }}> {error.name} </span>
                    <input
                      className="form_control"
                      placeholder="Your name"
                      type="type"
                      name="name"
                      value={user1.name}
                      onChange={e => postuser1Data(e)}
                    />

                  </div>
                  <div className="col-md-6">
                    <span style={{ color: "red" }}> {error.email} </span>
                    <input
                      className="form_control"
                      placeholder="Email"
                      type="type"
                      name="email"
                      value={user1.email}
                      onChange={e => postuser1Data(e)}
                    />

                  </div>
                  <div className="col-md-6">
                    <span style={{ color: "red" }}> {error.phone} </span>
                    <input
                      className="form_control"
                      placeholder="Phone Number"
                      type="type"
                      name="phone"
                      value={user1.phone}
                      onChange={e => postuser1Data(e)}
                    />

                  </div>
                  <div className="col-md-6">
                    <span style={{ color: "red" }}> {error.spa} </span>
                    <input
                      className="form_control"
                      placeholder="select type"
                      type="type"
                      name="spa"
                      value={user1.spa}
                      onChange={e => postuser1Data(e)}
                    />

                  </div>
                  <div className="col-md-6 ">
                    <span style={{ color: "red" }}> {error.time} </span>
                    <input
                      className="form_control"
                      placeholder="Time"
                      type="time"
                      name="time"
                      value={user1.time}
                      onChange={e => postuser1Data(e)}
                    />

                  </div>
                  <div className="col-md-6">
                    <span style={{ color: "red" }}> {error.date} </span>
                    <input
                      type="date"
                      className="form_control"
                      id="my_date_picker"
                      placeholder="Select Date"
                      name='date'
                      value={user1.date}
                      onChange={e => postuser1Data(e)}
                    />

                  </div>
                  <div className="col-md-12">
                    <span style={{ color: "red" }}> {error.message} </span>
                    <textarea
                      style={{ color: "#d0d0cf" }}
                      className="textarea"
                      placeholder="Message"
                      type="text"
                      name="message"
                      value={user1.message}
                      onChange={e => postuser1Data(e)}
                    />

                  </div>
                  <div className="col-md-12">

                    <button type='submit' onClick={() => setModalIsopen(true)} className="send_btn">Booking</button>
                    <Modal
                      keepMounted
                      open={modalIsopen}
                      onRequestClose={() => setModalIsopen(false)}
                      aria-labelledby="keep-mounted-modal-title"
                      aria-describedby="keep-mounted-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h5" color="green" component="h2">
                          <h2>Alert Message!</h2>
                        </Typography><hr />
                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                          <h3> Please login for Booking</h3>
                        </Typography>


                        <div className='mt-3 d-flex justify-content-center'>
                          <button className='btn btn-secondary m-2' onClick={() => setModalIsopen(false)}>close</button>

                          <button className='btn btn-success m-2' onClick={() => navigate("/login")}>Login</button>
                        </div>

                      </Box>
                    </Modal>



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
