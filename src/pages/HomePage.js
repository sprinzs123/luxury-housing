import React, { Component } from 'react'
import AboutUs from '../components/AboutUs'
import ImageRow from '../components/ImageRow'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                < Carousel />
                < AboutUs />
                < ImageRow />
                < Footer />
            </div>
        )
    }
}


