import React, { useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { Contactdata } from '../redux/Slice/ContactSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
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


const initialValue = {
  name: "",
  email: "",
  phone: "",
  message: "",
}
export const Contact = () => {
  const {Logouttoggle}=useSelector((state)=>state?.auth)
  const [user, setUser] = useState(initialValue);
  const [error, setError] = useState({});
  const [modalopen, setModalopen] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()

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
    if(Logouttoggle===true){
      setModalopen(false)
    }

    if (Object.keys(ErrorList).length === 0) {
         if(Logouttoggle===true){

          await Contactdata(user)
          navigate('')
          toast.success("contact succesfully done")
         }else{
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
                <h2>Contact Us</h2>
                <p>
                  We can help.Our team of experts is on hand to answer your questions.
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
                      type='type'
                      name="name"
                      value={user.name}
                      onChange={e => postUserData(e)}
                    />

                  </div>
                  <div className="col-md-6">
                    <span style={{ color: "red" }}> {error.email} </span>
                    <input
                      className="form_control"
                      placeholder="Email"
                      type="type"
                      name="email"
                      value={user.email}
                      onChange={e => postUserData(e)}
                    />

                  </div>
                  <div className="col-md-12">
                    <span style={{ color: "red" }}> {error.phone} </span>
                    <input
                      className="form_control"
                      placeholder="Phone Number"
                      type="type"
                      name="phone"

                      value={user.phone}
                      onChange={e => postUserData(e)}
                    />

                  </div>




                  <div className="col-md-12">
                    <span style={{ color: "red" }}> {error.message} </span>
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      type="text"
                      name="message"
                      value={user.message}
                      onChange={e => postUserData(e)}
                    />

                  </div>
                  <div className="col-md-12">
                    <button type='submit' onClick={() => setModalopen(true)} className="send_btn">Send Now</button>
                  </div>
                  <Modal
                    keepMounted
                    open={modalopen}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="keep-mounted-modal-title" variant="h5" color="green" component="h2">
                        <h2>Alert Message!</h2>
                      </Typography><hr />
                      <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        <h3> Please login for Contact us</h3>
                      </Typography>


                      <div className='mt-3 d-flex justify-content-center'>
                        <button className='btn btn-secondary m-2' onClick={() => setModalopen(false)}>close</button>

                        <button className='btn btn-success m-2' onClick={() => navigate('/login')}>Login</button>
                      </div>

                    </Box>
                  </Modal>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
