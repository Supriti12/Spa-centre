import React from 'react'
import BlogCategory from './BlogCategory'
import BlogRecentPosts from './BlogRecentPosts'
import Blogs from './Blogs'

const Blog = () => {
    return (
        <>
            <main id="main">

                <section id="blog" className="blog">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-10 entries">
                                <Blogs />
                            </div>

                            <div className="col-lg-2">

                                <div className="sidebar"  data-aos="fade-left">
                                    <BlogCategory />
                                    <br />
                                    <BlogRecentPosts />
                                </div>

                            </div>

                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Blog