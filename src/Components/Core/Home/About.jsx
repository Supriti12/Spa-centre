import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAbout, about_data } from '../../../redux/Slice/AboutSlice';
import { Link } from 'react-router-dom';
import { BsFillHeartPulseFill } from "react-icons/bs";

const About = () => {
    const dispatch = useDispatch();

    const { about_data } = useSelector((state) => state?.about);
    useEffect(() => {
        dispatch(fetchAbout())
    }, [dispatch])


    return (
        <>
            <div class="titlepage text_align_center ">
                <h2>
                    <font color="#FF2626">A</font>
                    <font color="#252A34">b</font>
                    <font color="#753422">o</font>
                    <font color="#FFD523">u</font>
                    <font color="#71EFA3">t</font>
                    <BsFillHeartPulseFill style={{fontSize:'25px', color:'red'}}/>



                    <font color="#FF2626">U</font>
                    <font color="#FFD523">s</font>
                </h2>
            </div>
            <div className="about">
                {
                    about_data && about_data.map((item) => {
                        return (
                            <>

                                <div className="container_width">
                                    <div className="row d_flex grig">

                                        <div className="col-md-6">
                                            <div className="about_img">
                                                <figure>
                                                    <img src={item.image} alt="#" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-md-6 order">
                                            <div className="titlepage text_align_left">
                                                <h2>{item.title}</h2>
                                                <p>
                                                    {item.body}
                                                </p>
                                                <div>
                                                    <Link className="read_more" to={`/aboutdetails/${item.id}`}>Read More</Link>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default About

