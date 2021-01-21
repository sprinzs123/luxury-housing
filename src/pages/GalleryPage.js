import React, { Component } from 'react'
import BannerLogo from "../imgs/navBanner.jpg"
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Gallery from '../components/Gallery'



export default class contact extends Component {
    render() {
        return (
            <div>
                < NavBar bannerImg = {BannerLogo}  />
                <div className="content">
                    < Gallery />
                    < Footer />
                </div>
            </div>
        )
    }
}
