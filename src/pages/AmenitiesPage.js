import React, { Component } from 'react'
import BannerLogo from "../imgs/navBanner.jpg"
import Footer from '../components/Footer'
import Amenities from '../components/Amenities'
import NavBar from '../components/NavBar'


export default class contact extends Component {
    render() {
        return (
            <div>
                < NavBar bannerImg = {BannerLogo}  />
                <div className="content">
                    < Amenities />
                    < Footer />
                </div>
            </div>
        )
    }
}
