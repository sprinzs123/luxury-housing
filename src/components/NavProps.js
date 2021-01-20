import React from "react";
import '../styles/NavBar.css'

function NavBar(props) {
    return(
        <div className='nav-bar-all'>
        <h1>{props.title}</h1>
        <nav className='nav-only'>
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
                    <li className='toggle-btn'>X</li>
                </ul>
            </div>
        </nav>
        <div className='modal-parent'>

        </div>
    </div>
    )

}

export default NavBar