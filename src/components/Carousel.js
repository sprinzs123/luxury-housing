import React, { Component } from 'react';
import Slider from "react-slick";


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



   
    test() {
        const test = <h1>test</h1>
        return test
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
            autoplaySpeed: 3000,
            cssEase: "linear"
        };


        return (
            <div>
                {/* <h1>Test</h1> */}
                <Slider {...settings}>
                    <div>
                        <div className="carousel-parent">
                            <img  src={img1} />
                            <div className="banner-text">
                                <h4>Make It Your Home</h4>
                                <h1>Living Begins Here</h1>
                                <div className="btn-green">CHECK AVAILABILITY</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="carousel-parent">
                            <img  src={img2} />
                            <div className="banner-text">
                                <h4>Make It Your Home</h4>
                                <h1>Surround with the Best</h1>
                                <div className="btn-green">Style Everywhere You Look</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="carousel-parent">
                            <img  src={img3} />
                            <div className="banner-text">
                                <h4>Make It Your Home</h4>
                                <h1>Find Your Home Today</h1>
                                <div className="btn-green">Luxury for a Lifetime</div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}