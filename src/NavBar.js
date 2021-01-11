import React, { Component } from "react";
import "./NavBar.css";
import "./index.css";


class ShowNav extends Component{
    constructor(){
        super()
        this.state = {
            showModal: false,
            toggleButton : 'X'
        }
    }   

    changeView =() => {
        this.setState({
            toggleButton: 'Y'
        })
        console.log(this.state.toggleButton)
    }


    render(){
        return(
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
                    <li onClick={this.changeView} className='toggle-btn'>{ this.state.toggleButton }</li>
                </ul>
            </div>
        </nav>
        )
    }
}




export default ShowNav;
