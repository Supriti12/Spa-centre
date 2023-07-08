import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Apifetch, filteredAction } from '../../redux/Slice/BlogSlice';

const BlogCategory = () => {
    const { post, filteredData, catagoryData } = useSelector((state) => state?.blog)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Apifetch())
    }, [dispatch])
    // console.log(filteredData, "hgdhagjd");

    const handleClick = (catagory) => {
        let filtData = [];
        filtData = catagoryData?.filter((item) => item?.catagories === catagory);
        dispatch(filteredAction(filtData))
    }

    const CatagoryNumber = (catagory) => {
        let filtData = [];
        filtData = catagoryData?.filter((item) => item?.catagories === catagory);
        return filtData?.length
    }

    return (
        <>
            <h2 className="sidebar-title">Categories</h2>
            <div className="sidebar-item categories">
                <ul >
                    <li><button onClick={() => dispatch(filteredAction(catagoryData))} className='btn btn-light' style={{"font-size" : "20px"}}>All Catagory <span> ({post?.length}) </span></button></li>
                    <li><button onClick={() => handleClick("American")} className='btn btn-light' style={{"font-size" : "20px"}}>American <span>({CatagoryNumber('American')})</span></button></li>
                    <li><button onClick={() => handleClick("Indian")} className='btn btn-light' style={{"font-size" : "20px"}}>Indian <span>({CatagoryNumber('Indian')})</span></button></li>
                    <li><button onClick={() => handleClick("Italian")} className='btn btn-light' style={{"font-size" : "20px"}}>Italian <span>({CatagoryNumber('Italian')})</span></button></li>

                </ul>

            </div>
        </>
    )
}

export default BlogCategory