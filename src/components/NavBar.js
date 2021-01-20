import React, { Component } from "react";
import "../styles/NavBar.css";


class ShowNav extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            toggleButton: 'Y'
        }
    }


    changeView = () => {
        const toggleState = this.state.toggleButton
        const notNavBar = document.querySelector('.content')
        const modal = document.querySelector('.nav-modal')

        if (toggleState === 'X') {
            this.setState({
                toggleButton: 'Y',
                showModal : true
            })
            notNavBar.style.display = 'inline'

        }
        if (toggleState === 'Y') {
            this.setState({
                toggleButton: 'X',
                showModal : false
            })
            notNavBar.style.display = 'none'
            console.log(modal)
        }
    }


    render() {
        return (
            <div className='nav-bar-all'>
                <nav className='nav-only' style={{backgroundImage: `url(${this.props.bannerImg})`}}>
                    <div className="nav-items">
                        <div className="log-nav">
                            <h1>Logo</h1>
                        </div>
                        <div className='nav-links'>
                            <ul className="d-flex">
                                <li className='small-text'>Virtual Tours</li>
                                <li className='small-text'>Book Your Tour</li>
                                <li className='small-text'>(874) 204-1589</li>
                            </ul>
                        </div>

                    </div>
                    <div className="nav-toggle">
                        <ul className="nav-btn">
                            <li className='lease-text'>LEASE NOW</li>
                            <li onClick={this.changeView} className='toggle-btn'>{this.state.toggleButton}</li>
                        </ul>
                    </div>
                </nav>
                <div className='modal-parent'>
                </div>
                <h1 styles={{background: 'red'}}>test</h1>
            </div>
        )
    }
}







export default ShowNav;
