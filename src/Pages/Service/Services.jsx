import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from '../../redux/Slice/ServiceSlice';
import { Link } from 'react-router-dom';
import Lazyloading from './Lazyloading';

const Services = () => {
    const dispatch = useDispatch();
    const { serv } = useSelector((state) => state?.service)
    const [visible, setVisible] = useState(3);

    useEffect(() => {
        dispatch(fetchdata())
    }, [dispatch]);
    console.log(serv);

    const showMore = () => {
        setVisible((prevValue) => prevValue + 3);
    }
    return (
        <>
            {
                serv && serv?.length ?

                    <div className="services">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="titlepage text_align_center ">
                                        <h2 >Our Massage Services</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {
                                    serv?.slice(0, visible)?.map((s, index) => {
                                        return (
                                            <>
                                                <div className="col-md-4" key={index}>
                                                    <div id="ho_shad" className="services_box text_align_left">
                                                        <h3>{s.service}</h3>
                                                        <figure><img src={s.image} alt=" " /></figure>
                                                        <p>{s.servicedata}</p>
                                                        <Link className="read_more" to={`/servicedet/${s.id}`}>Read More</Link>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }


                            </div>
                            <br />
                            <div>
                                <button type="button" class="btn btn-warning btn-lg btn-block" style={{fontSize:'20px'}} onClick={showMore}>Load More</button>
                            </div>

                        </div>
                    </div>
                    : <Lazyloading sdata={serv} />
            }
        </>
    )
}

export default Services