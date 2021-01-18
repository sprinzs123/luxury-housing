import React, { Component } from 'react';
import img1 from '../imgs/carousel1.jpg';
import img2 from '../imgs/carousel2.jpg'
import img3 from '../imgs/carousel3.jpg'

import '../styles/carousel.css'


export default class carousel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             images : [{"image": img1, "index": 0},
                        {"image": img2, "index": 1},
                        {"image": img3, "index": 2},
            ],
            currentImg: 0
        }
    }

    iterateImages = () =>{
        const images = this.state.images
        const currentImg = images[this.state.currentImg]
        return <img key={currentImg} src={currentImg.image}  alt='not found'/>
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
        setTimeout(this.slideForwards, 10000)
        console.log('changed')
    }
    
    render() {
        return (
            <div>   
                <div className="carousel-parent">
                <h1 onClick={this.slideBack} className='left-slider text-success'>x</h1>
                <h1 onClick={this.slideForwards} className='right-slider text-success'>x</h1>

                <div className="img-row">
                    {this.automaticScrolling()}
                    {this.iterateImages()}
                </div>    
                </div>
         
            </div>
        )
    }
}
