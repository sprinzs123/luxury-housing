import React, { Component } from 'react';
import Slider from "react-slick";
import NavBar from '../components/NavBar'


import img1 from '../imgs/carousel1.jpg';
import img2 from '../imgs/carousel2.jpg'
import img3 from '../imgs/carousel3.jpg'

import '../styles/carousel.css'


export default class carousel extends Component {
    constructor() {
        super()

        this.state = {
            images: [{ "image": img1, "index": 0, 'smallText': 'Make It Your Home', 'largeText': 'Living Begins Here', 'btnText': 'CHECK AVAILABILITY' },
            { "image": img2, "index": 1, 'smallText': 'Make It Your Home', 'largeText': 'Surround with the Best', 'btnText': 'Style Everywhere You Look' },
            { "image": img3, "index": 2, 'smallText': 'Make It Your Home', 'largeText': 'Find Your Home Today', 'btnText': 'Luxury for a Lifetime' },]
        }
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 30000,
            cssEase: "linear",
            adaptiveHeight: true
        };

        // use react slick for carousel
        return (
            <div className='home-slider'>
                <div className='all-carousel'>
                    <Slider {...settings}>
                        <div>
                            <div className="carousel-parent">
                                <img src={img1} />
                                <div className="banner-text">
                                    <h4>Make It Your Home</h4>
                                    <h1>Living Begins Here</h1>
                                    <div className="btn-green">CHECK AVAILABILITY</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="carousel-parent">
                                <img src={img2} />
                                <div className="banner-text">
                                    <h4>Make It Your Home</h4>
                                    <h1>Surround with the Best</h1>
                                    <div className="btn-green">Style Everywhere You Look</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="carousel-parent">
                                <img src={img3} />
                                <div className="banner-text">
                                    <h4>Make It Your Home</h4>
                                    <h1>Find Your Home Today</h1>
                                    <div className="btn-green">Luxury for a Lifetime</div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className='nav-bar-front'>
                    < NavBar />
                </div>
                <div className='under-carousel content'>
                    <div className='carousel-footer-parent'>
                        <div className='carousel-footer border-right'>
                            <div className="under-carousel-text">
                                <h5>MAKE IT YOUR HOME</h5>
                                <h>Surround with the Best</h>
                            </div>
                        </div>
                        <div className='carousel-footer border-right'>
                            <div className="under-carousel-text">
                                <h5>VIEW AMENITIES</h5>
                                <h>Indulgent Details</h>
                            </div>
                        </div>    
                        <div className='carousel-footer border-right'>
                            <div className="under-carousel-text">
                                <h5>VIEW THE GALLERY</h5>
                                <h>Luxury Living</h>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}