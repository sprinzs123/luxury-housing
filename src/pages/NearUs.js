import React, { Component } from 'react'
import BannerLogo from "../imgs/navBanner.jpg"
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Map from '../components/Map'


export default class contact extends Component {
    render() {
        return (
            <div>
                < NavBar bannerImg = {BannerLogo}  />
                <div className="content">
                    < Map />
                    < Footer />
                </div>
            </div>
        )
    }
}