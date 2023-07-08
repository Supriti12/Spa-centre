import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const BlogRecentPosts = () => {
    const { post } = useSelector(state => state?.blog);
    const filterData = post?.filter((e)=>{
        return(
            e.date >= "15-06-2023"
        )
    })
    console.log(filterData);

    return (
        <>
            <div>
                <h2 className="sidebar-title">Recent Posts</h2>
            </div>
            <div className="sidebar-item recent-posts">

                {
                   filterData && filterData?.slice(0,3)?.map((item) =>
                        <div className="post-item clearfix" key={item.id}>
                            <img src={item.image} alt="" />
                            <h4><Link to={`/blogdet/${item.id}`}>{item.title}</Link></h4>
                            <time dateTime="15-06-2023">{item.date}</time>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default BlogRecentPosts
