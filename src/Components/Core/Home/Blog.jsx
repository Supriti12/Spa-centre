import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Apifetch } from '../../../redux/Slice/BlogSlice';
import { BiCameraMovie } from "react-icons/bi";


const Blog = () => {
    const { post } = useSelector((state) => state?.blog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Apifetch())
    }, [dispatch])
    console.log(post);
    return (
        <>
            <div class="blog">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage text_align_center ">
                                <h2>
                                    <span>
                                        <font color="#FF2626">L</font>
                                        <font color="#252A34">a</font>
                                        <font color="#753422">t</font>
                                        <font color="#FFD523">e</font>
                                        <font color="#71EFA3">s</font>
                                        <font color="#753422">t</font>
                                    </span>

                                    <BiCameraMovie style={{ fontSize: '25px', color: 'black' }} />


                                    <span>
                                        <font color="#2D1F63">B</font>
                                        <font color="#FFD523">l</font>
                                        <font color="#FF2626">o</font>
                                        <font color="#631F5F">g</font>
                                    </span>
                                </h2>
                                {/* <p style={{fontSize:'10px', color:'azure'}}>Welcome to our blog post</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="row d_flex">
                        {
                            post?.map((item, k) => {
                                return (
                                    <>
                                        <div class=" col-md-4">
                                            <div class="latest">
                                                <figure><img src={item.image} alt=" " /></figure>
                                                <span>{item.date}</span>
                                                <div class="nostrud">
                                                    <h3>{item.title}</h3>
                                                    <p style={{ boxSizing: 'border-box' }}>{item.body}</p>
                                                    <Link className="read_more" to={`/blogdet/${item?.id}`}>Read More</Link>
                                                </div>
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

export default Blog