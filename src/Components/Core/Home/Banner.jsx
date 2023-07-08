//<----------------------------------------------STATIC--------------------------------------------------------------->


// import React from 'react'

// import { Link } from "react-router-dom";

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// const Banner = () => {

//     return (
//         <>

//             <div class="full_bg">

//                 <div className="slider_main">
//                     {/* carousel code */}
//                     <div id="banner1" className="carousel slide">
//                         {/* <ol className="carousel-indicators">
//                             <li data-target="#banner1" data-slide-to={0} className="active" />
//                             <li data-target="#banner2" data-slide-to={1} />
//                             <li data-target="#banner3" data-slide-to={2} />
//                         </ol> */}
//                         <div className="carousel-inner-owl">
//                             <OwlCarousel className='owl-theme'  center={true} nav={true} items={1} margin={20} dots={false} loop={true} autoplay={true} smartSpeed={1500} navText={['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>']}>
//                                 {/* first slide */}
//                                 <div className="carousel-item active">
//                                     <div className="container">
//                                         <div className="carousel-caption relative">
//                                             <div className="row d_flex">
//                                                 <div className="col-md-5">
//                                                     <div className="creative">
//                                                         <h1>
//                                                             <span style={{ color: ' #d5c91d' }}>A</span> <span>D</span>elightful<br />
//                                                             <span>E</span>xperience{" "}
//                                                         </h1>
//                                                         <p>
//                                                             Indulge in a world of relaxation and rejuvenation at Tranquil Haven Spa, your ultimate escape from the stresses of everyday life. Nestled in the heart of serene surroundings, our spa offers a haven of tranquility where you can pamper yourself and restore your mind, body, and soul.
//                                                         </p>

//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-7">
//                                                     <div className="row mar_right">
//                                                         <div className="col-md-6">
//                                                             <div className="agency">
//                                                                 <figure>
//                                                                     <img src="images/img1.png" alt="#" />
//                                                                 </figure>

//                                                             </div>
//                                                         </div>
//                                                         <div className="col-md-6">
//                                                             <div className="agency">
//                                                                 <figure>
//                                                                     <img src="images/img2.png" alt="#" />
//                                                                 </figure>

//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* second slide */}
//                                 <div className="carousel-item active">
//                                     <div className="container">
//                                         <div className="carousel-caption relative">
//                                             <div className="row d_flex">
//                                                 <div className="col-md-5">
//                                                     <div className="creative">
//                                                         <h1>
//                                                             <span style={{ color: ' #d5c91d' }}>A</span> <span>D</span>elightful<br />
//                                                             <span>E</span>xperience{" "}
//                                                         </h1>
//                                                         <p>
//                                                             Indulge in a world of relaxation and rejuvenation at Tranquil Haven Spa, your ultimate escape from the stresses of everyday life. Nestled in the heart of serene surroundings, our spa offers a haven of tranquility where you can pamper yourself and restore your mind, body, and soul.
//                                                         </p>

//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-7">
//                                                     <div className="row mar_right">
//                                                         <div className="col-md-6">
//                                                             <div className="agency">
//                                                                 <figure>
//                                                                     <img src="images/img1.png" alt="#" />
//                                                                 </figure>

//                                                             </div>
//                                                         </div>
//                                                         <div className="col-md-6">
//                                                             <div className="agency">
//                                                                 <figure>
//                                                                     <img src="images/img2.png" alt="#" />
//                                                                 </figure>

//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* third slide*/}
//                                 <div className="carousel-item active">
//                                     <div className="container">
//                                         <div className="carousel-caption relative">
//                                             <div className="row d_flex">
//                                                 <div className="col-md-5">
//                                                     <div className="creative">
//                                                         <h1>
//                                                             <span style={{ color: ' #d5c91d' }}>A</span> <span>D</span>elightful<br />
//                                                             <span>E</span>xperience{" "}
//                                                         </h1>
//                                                         <p>
//                                                             Indulge in a world of relaxation and rejuvenation at Tranquil Haven Spa, your ultimate escape from the stresses of everyday life. Nestled in the heart of serene surroundings, our spa offers a haven of tranquility where you can pamper yourself and restore your mind, body, and soul.
//                                                         </p>

//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-7">
//                                                     <div className="row mar_right">
//                                                         <div className="col-md-6">
//                                                             <div className="agency">
//                                                                 <figure>
//                                                                     <img src="images/img1.png" alt="#" />
//                                                                 </figure>

//                                                             </div>
//                                                         </div>
//                                                         <div className="col-md-6">
//                                                             <div className="agency">
//                                                                 <figure>
//                                                                     <img src="images/img2.png" alt="#" />
//                                                                 </figure>

//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </OwlCarousel>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </>
//     )
// }

// export default Banner





//<-------------------------------------------------DYNAMIC--------------------------------------------------------->


import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchBanner, banner_data } from '../../../redux/Slice/BannerSlice';

const Banner = () => {
    const dispatch = useDispatch();
    const { banner_data } = useSelector((state) => state?.banner);
    useEffect(() => {
        dispatch(fetchBanner())
    }, [dispatch])
    //console.log(banner_data);
    
    return (
        <>
            <div className="full_bg">
                <div className="slider_main">
                    <div id="banner1" className="carousel slide">
                        <ol className="carousel-indicators">
                            <li data-target="#banner1" data-slide-to={0} className="active" />
                            <li data-target="#banner2" data-slide-to={1} />
                            <li data-target="#banner3" data-slide-to={2} />
                        </ol>
                        <div id="banner1" className="carousel slide">
                            <div className="carousel-inner-owl">
                                <OwlCarousel className='owl-theme' center={true} nav={true} items={1} margin={20} dots={false} loop={true} autoplay={true} smartSpeed={1500} navText={[' <a class="carousel-control-prev"</a><i class="fa fa-angle-left"></i>','<a class="carousel-control-next"</a><i class="fa fa-angle-right"></i>']}>
                                    {
                                        banner_data && banner_data.map((obj) => {
                                            return (
                                                <>
                                                    <div className="carousel-item active">
                                                        <div className="container">
                                                            <div className="carousel-caption relative">
                                                                <div className="row d_flex">
                                                                    <div className="col-md-5">
                                                                        <div className="creative">

                                                                            <h1>
                                                                                <span style={{ color: '#E7C33D' }}>{obj?.title}</span>
                                                                            </h1>
                                                                            <p>{obj.body}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-7">
                                                                        <div className="row mar_right">
                                                                            <div className="col-md-6">
                                                                                <div className="agency">

                                                                                    <figure>
                                                                                        <img src={obj.image} alt="#" />
                                                                                    </figure>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <div className="agency">
                                                                                    <figure>
                                                                                        <img src={obj.img} alt="#" />
                                                                                    </figure>

                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )

                                        })
                                    }

                                </OwlCarousel>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Banner