import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Apifetch } from '../../redux/Slice/BlogSlice';
import { Link } from 'react-router-dom';
import { Vortex } from 'react-loader-spinner'

const Blogs = () => {
    const { post } = useSelector((state) => state?.blog);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(2);

    useEffect(() => {
        dispatch(Apifetch());
    }, [dispatch])

    console.log(post);
    const showMore = () => {
        setVisible((prevValue) => prevValue + 2);
    }
    return (
        <>
            <main id="main">
                <div className="container">
                    <div className="row">
                        <div className="titlepage text_align_center ">
                            <h2>Blogs</h2>
                            <p>Welcome to our blog post</p>
                        </div>

                        {
                            post !== null ? (
                                <>
                                    <div className="row d_flex">
                                        <div className=" col-md-8">
                                            <div className="latest">
                                                {
                                                    post?.slice(0, visible)?.map((b, key) => {
                                                        return (
                                                            <>
                                                                <div className="latest">
                                                                    <figure><img style={{fontSize:'50px'}} src={b.image} alt="#" /></figure>
                                                                    <span>{b.date}</span>
                                                                    <div className="nostrud">
                                                                        <h3>{b.title} </h3>
                                                                        <p>{b.body}</p>
                                                                        <Link className="read_more" to={`/blogdet/${b?.id}`}>Read More</Link>
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
                            ) : (
                                <>
                                    <Vortex
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="vortex-loading"
                                        wrapperStyle={{}}
                                        wrapperclassName="vortex-wrapper"
                                        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                                    />
                                </>
                            )
                        }
                        <button className='btn' onClick={showMore}>   <Vortex
                            visible={true}
                            height="45"
                            width="600"
                            ariaLabel="vortex-loading"
                            align='center'
                            wrapperStyle={{}}
                            wrapperclassName="vortex-wrapper"
                            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                        /></button>

                    </div>

                </div>

            </main>
        </>
    )
}

export default Blogs


