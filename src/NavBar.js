import React, { Component } from "react";
import "./NavBar.css";
import "./index.css";


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
                toggleButton: 'Y'
            })
            notNavBar.style.display = 'inline'
            modal.style.display = 'none'

        }
        if (toggleState === 'Y') {
            this.setState({
                toggleButton: 'X'
            })
            notNavBar.style.display = 'none'
            modal.style.display = 'inline'
            console.log(modal)


        }

    }


    render() {
        return (
            <div className='nav-bar-all'>
                <nav className=''>
                    <div className="nav-items">
                        <div className="log-nav">
                            <h1>Logo</h1>
                        </div>
                        <ul className="nav-links">
                            <li>Virtual Tours</li>
                            <li>Book Your Tour</li>
                            <li>(874) 204-1589</li>
                        </ul>
                    </div>
                    <div className="nav-toggle">
                        <ul className="nav-btn">
                            <li>LEASE NOW</li>
                            <li onClick={this.changeView} className='toggle-btn'>{this.state.toggleButton}</li>
                        </ul>
                    </div>
                </nav>
                <div className='nav-modal'>
                <div className='nav-modal-flex'>
                    <ul className='modal-text'>
                        <li>Home</li>
                        <li>Amenities</li>
                        <li>Neighborhood</li>
                        <li>Gallery</li>
                        <li>Residents</li>
                        <li>Contact</li>
                    </ul>
                </div>

                </div>

                
            </div>
        )
    }
}




export default ShowNav;
