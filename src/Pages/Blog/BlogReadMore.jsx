import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogReadMore = () => {
    const [moreData, setMoreData] = useState([]);
    const { id } = useParams();

    const getMoreData = async () => {
        const res = await axios.get(`http://127.0.0.1:3007/blogdata/${id}`);
        setMoreData(await res?.data);
    }

    useEffect(() => {
        getMoreData();
    }, []);

    return (
        <div class="about">
            <div class="container_width">
                <div class="row d_flex grig">
                    <div class="col-md-6">
                        <div class="about_img">
                            <figure><img src={moreData.image} alt=" " />
                            </figure>
                        </div>
                    </div>
                    <div class="col-md-6 order">
                        <div class="titlepage text_align_left">
                            <h2>{moreData.title}</h2>
                            <p>{moreData.body}</p>
                            <p>{moreData.ReadMore}</p>
                            <div className='row'>
                                <div>
                                    <Link to='/' className='read_more' style={{marginRight: "100px"}}>Back to Home</Link>
                                </div>
                                <div>
                                    <Link to='/blog' className='read_more' style={{marginLeft:"100px"}}>Go to Blogs</Link>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogReadMore
