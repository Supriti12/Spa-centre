import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux'
import { reviewdata } from '../redux/Slice/ReviewSlice';

const ReviewBanner = () => {
    const dispatch = useDispatch();
    const { banner } = useSelector((state) => state?.review);
    useEffect(() => {
        dispatch(reviewdata())
    }, [dispatch])
    console.log(banner);
    return (
        <>
            <div className="full_bg">
                <div className="slider_main">
                    <div id="banner1" className="carousel slide">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div id="banner1" className="carousel slide">
                            <div className="carousel-inner-owl">
                                <OwlCarousel className='owl-theme' center={true} nav={true} items={1} margin={20} dots={false} loop={true} autoplay={true} smartSpeed={1500} navText={[ ' <a class="carousel-control-prev"</a><i class="fa fa-angle-left"></i>','<a class="carousel-control-next"</a><i class="fa fa-angle-right"></i>']}>
                                    {
                                        banner?.map((item, k) => {
                                            return (
                                                <>
                                                    <div class="carousel-item active">
                                                        <div class="container">
                                                            <div class="carousel-caption relative">
                                                                <div class="row d_flex">
                                                                    <div class="col-md-2 col-sm-8">
                                                                        <div class="pro_file">
                                                                            <i><img src={item.image} alt="#" /></i>
                                                                            <h4>{item.name}</h4>
                                                                            <span>{item.role}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-10">
                                                                        <div class="test_box text_align_left">
                                                                            <p>{item.speech} </p>
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

export default ReviewBanner