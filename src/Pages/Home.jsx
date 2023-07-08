import React from 'react'
import ReviewBanner from './ReviewBanner'
import Blog from '../Components/Core/Home/Blog'
import Service from '../Components/Core/Home/Service'
import { Appoinment } from '../Components/Core/Home/Appoinment'
import Banner from '../Components/Core/Home/Banner'
import About from '../Components/Core/Home/About'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const Home = () => {
  const {Logouttoggle}=useSelector((state)=>state?.auth)
  const name = localStorage.getItem("name");
  return (
    <>
    
      <Banner/>
      <Appoinment/>
      <Service/>
    <Blog/>
    <About/>
<ReviewBanner/>
      
    
    
    
     
    
  
  
    </>
  )
}

export default Home