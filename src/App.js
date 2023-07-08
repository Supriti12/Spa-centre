import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import  Navbar  from "./Components/Common/Navbar";
import { Contact } from "./Pages/Contact";
import  Footer  from "./Components/Common/Footer";
import  Home  from "./Pages/Home";
import AboutDetails from './Components/Core/Home/AboutDetails'
import { AppointmentDetails } from "./Components/Core/Home/AppointmentDetails";
import { EditAppoinment } from "./Components/Core/Home/EditAppointment";
import Register from './Pages/register/Register'
import Login from './Pages/login/Login'
import BlogReadMore from "./Pages/Blog/BlogReadMore";
import ServiceDetails from "./Pages/Service/ServiceDetails";
import Services from "./Pages/Service/Services";
import Blog from './Pages/Blog/Blog'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { check_token } from "./redux/Slice/AuthSlice";
import { Appoinment } from "./Components/Core/Home/Appoinment";
import AdminRegister from './Pages/Admin/AdminRegister';
import AdminLogin from './Pages/Admin/Adminlogin'
function App() {
  const dispatch = useDispatch();
  //check token avable or not
  function PrivateRoute({ children }) {
    const token =localStorage.getItem("admin_token")
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/adminlogin" />
    );
  }

  //for Public Route
  const PublicRouteNames = [
    {
      path: "/login",
      Component: <Login />
    },
    
    {

      path: "/register",
      Component: <Register />
    },
    {
      path: '/',
      Component: <Home />
    },
    {
      path: 'appointment',
      Component: <Appoinment />
    },

  {
    path: '/service',
    Component: <Services />
  },
  {
    path: '/servicedet/:id',
    Component: <ServiceDetails />
  },
  {
    path: '/blog',
    Component: <Blog />
  },
  {
    path: '/blogdet/:id',
    Component: <BlogReadMore />
  },
  {
    path: '/aboutdetails/:id',
    Component: <AboutDetails />
  },
  {
    path: '/contact',
    Component: < Contact/>
  },
  {
    path: '/editappointment/:id',
    Component: <EditAppoinment />
  },
  {
    path: '/adminregister',
    Component: <AdminRegister/>
  },
  {
    path: '/adminlogin',
    Component: <AdminLogin/>
  },

  ]
//for Private Route
  const PrivateRouteNames = [
    {
      path: '/appointmentdetails',
      Component: <AppointmentDetails />
    },
  
  
  ]


  useEffect(() => {
   dispatch(check_token())
  }, [])
  
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            {PublicRouteNames?.map((route, index) => {
              return (
                <Route
                  Key={index + 1}
                  exact
                  path={route.path}
                  element={route?.Component}
                />
              )
            })}

            {/* Protect Route */}
            {PrivateRouteNames?.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={<PrivateRoute>{route?.Component}</PrivateRoute>}
                />
              )

            })}
           
          </Routes>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
