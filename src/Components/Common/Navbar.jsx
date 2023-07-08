import React, { useState } from "react";
import "./Navbar.css";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, Logouttoggle } from "../../redux/Slice/AuthSlice";
// import { Logout } from "../../redux/Slice/authenSlice";
import { toast } from "react-toastify";


const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const { Logouttoggle } = useSelector((state) => state?.auth);
    const item = useSelector((state) => state?.authen)
    const navigate = useNavigate()
    const name = localStorage.getItem("name");
    const admin_name = localStorage.getItem("admin_name");
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())

    }
    const Logouthandle = () => {
        localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_name");
       toast.success("Admin logout successfull")
       navigate("/adminlogin")
        
    }

    return (
        <>
            <header className="header-area">
                <nav className="main-nav" >
                    {/* logo part  */}

                    <Link to={'/'}> <img className='logo-photo'  src="images/LOGO-Photos.png" alt="" /> </Link>



                    {/* menu part  */}
                    <div
                        className={
                            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                        }>
                        <div className="header5">
                            <ul className="menu5">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/service">Service</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/appointmentdetails">Appointment</Link>
                                </li>


                                {/* <Link to="/">
                                        <i className="fa fa-user" aria-hidden="true" />
                                    </Link> */}
                                {
                                    Logouttoggle ? (
                                        <>
                                            <li>
                                                <div className='topRight'>
                                                    <ul className='topList'>
                                                        <li className='topListItem'>
                                                        <i className="fa fa-user " aria-hidden="true" />
                                                            <Link className='link' style={{fontSize:'17px',color:'purple'}}>{name}</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='topRight'>
                                                    <ul className='topList'>
                                                        <li className='topListItem'>
                                                            <Link className='link' onClick={handleLogout}>Logout</Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </li>
                                        </>

                                    ) : (
                                        <>
                                            <div className='topRight'>
                                                <ul className='topList'>
                                                    {/* <li className='topListItem'>
                                                            <Link className='link' to="/login">Login</Link>
                                                        </li> */}
                                                    <li class="nav-item dropdown">
                                                        <i className="fa fa-user " aria-hidden="true" />
                                                        <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                                            Login
                                                        </a>
                                                        <div className="dropdown-menu" style={{fontSize:'13px'}}>
                                                            {
                                                                !admin_name ? <>
                                                               
                                                                    <Link className="dropdown-item" to="/appointmentdetails">{admin_name ? admin_name : "ADMIN"}</Link>
                                                                    <Link className="dropdown-item" to="/login" >USER</Link>
                                                                </>
                                                                    :
                                                                    <>
                                                                   
                                                                        <Link className="dropdown-item" to="/appointmentdetails">{admin_name ? admin_name :"ADMIN"}</Link>
                                                                        <Link className="dropdown-item" to="/login">USER</Link>
                                                                        <Link className='dropdown-item' onClick={Logouthandle}>Admin Logout</Link>
                                                                    </>
                                                            }


                                                        </div>

                                                    </li>
                                                </ul>
                                            </div>
                                        </>
                                    )
                                }



                            </ul>
                        </div>

                    </div>

                    {/* social media links */}
                    <div className="social-media">
                        <ul className="social-media-desktop">
                            <li>
                                <a
                                    href="https://www.facebook.com/shibam.basak?mibextid=ZbWKwL"
                                    target="_shibam">
                                    <FaFacebookSquare className="facebook" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/__.she.shine.__/"
                                    target="_meghna">
                                    <FaInstagramSquare className="instagram" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://youtube.com/@supritigole2194"
                                    target="_supriti">
                                    <FaYoutubeSquare className="youtube" />
                                </a>
                            </li>
                        </ul>

                        {/* hamburget menu start  */}
                        <div className="hamburger-menu">
                            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                                <GiHamburgerMenu />
                            </a>
                        </div>
                    </div>
                </nav>
            </header>


        </>
    );
};

export default Navbar;