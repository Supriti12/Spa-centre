import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchdata } from '../../../redux/Slice/ServiceSlice';
import {FcServices} from "react-icons/fc"

const Service = () => {
    const dispatch = useDispatch();
    const { serv } = useSelector((state) => state?.service)

    useEffect(() => {
        dispatch(fetchdata())
    }, [dispatch]);

    return (
        <>
            <div class="services">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage text_align_center ">
                            <h2>
                                <span>
                                    <font color="#FF2626">O</font>
                                    <font color="#252A34">u</font>
                                    <font color="#753422">r</font>
                                    </span>
                                    {/* <FcServices style={{fontSize:'25px', color:'black'}}/> */}
                                    {/* <span>
                                    <font color="#FFD523">M</font>
                                    <font color="#71EFA3">a</font>
                                    <font color="#753422">s</font>
                                    <font color="#FF2626">s</font>
                                    <font color="#252A34">a</font>
                                    <font color="#753422">g</font>
                                    <font color="#FFD523">e</font>
                                    </span>    */}

                                    <FcServices style={{fontSize:'25px', color:'black'}}/>

                                  <span>
                                    <font color="#2D1F63">S</font>
                                    <font color="#FFD523">e</font>
                                    <font color="#FF2626">r</font>
                                    <font color="#631F5F">v</font>
                                    <font color="#71EFA3">i</font>
                                    <font color="#753422">c</font>
                                    <font color="#FF2626">e</font>
                                    <font color="#FFD523">s</font>
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {
                            serv?.map((item, k) => {
                                return (
                                    <>
                                        <div class="col-md-4">
                                            <div id="ho_shad" class="services_box text_align_left">
                                                <h3>{item.service}</h3>
                                                <figure><img src={item.image} alt="#" /></figure>
                                                <p>{item.servicedata}</p>
                                                <Link className="read_more" to={`/servicedet/${item.id}`}>Read More</Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Service