import React, { Component } from 'react';
import img1 from '../imgs/carousel1.jpg';
import img2 from '../imgs/carousel2.jpg'
import img3 from '../imgs/carousel3.jpg'

import '../styles/carousel.css'


export default class carousel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             images : [{"image": img1, "index": 0, 'smallText': 'Make It Your Home', 'largeText': 'Living Begins Here', 'btnText': 'CHECK AVAILABILITY'},
                        {"image": img2, "index": 1, 'smallText': 'Make It Your Home', 'largeText': 'Surround with the Best', 'btnText': 'Style Everywhere You Look'},
                        {"image": img3, "index": 2, 'smallText': 'Make It Your Home', 'largeText': 'Find Your Home Today', 'btnText': 'Luxury for a Lifetime'},
            ],
            currentImg: 0
        }
    }

    iterateImages = () =>{
        const images = this.state.images
        const currentImg = images[this.state.currentImg]
        return <div className="carousel-parent">
                    <h1 onClick={this.slideBack} className='left-slider text-success'>x</h1>
                    <h1 onClick={this.slideForwards} className='right-slider text-success'>x</h1>
                    <img key={currentImg} src={currentImg.image} className='carousel-img' alt='not found'/>
                    <div className="banner-text">
                        <h4>{currentImg.smallText}</h4>
                        <h1>{currentImg.largeText}</h1>
                        <div className="btn-green">{currentImg.btnText}</div>
                    </div>
                </div> 
    }

    slideBack = () =>{
        const currentIndex = this.state.currentImg
        if(currentIndex === 0){
            this.setState({
                currentImg : 2
            })
        } else {
            const newImage = currentIndex - 1
            this.setState({
                currentImg : newImage
            })
        }
    }

    slideForwards = () =>{
        const currentIndex = this.state.currentImg
        if(currentIndex === 2){
            this.setState({
                currentImg : 0
            })
        } else {
            const newImage = currentIndex + 1
            this.setState({
                currentImg : newImage
            })
        }
    }

    automaticScrolling = () =>{
        setTimeout(this.slideForwards, 100000)
    }
    
    render() {
        return (
            <div> 
                     <div className="img-row">
                        {this.automaticScrolling()}
                        {this.iterateImages()}
                </div>
         
            </div>
        )
    }
}
