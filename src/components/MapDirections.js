import React from "react";
import "../styles/contactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


function MapDirections() {
    return (
        <div className="container directions-parent">
            <div className="contact-directions">
                <ul className="contact-details">
                    <li>
                        <ul className="p-4 border-bot">
                            <li className="green">DTR RESIDENTIAL</li>
                            <li>1432 Main Street</li>
                            <li>San Francisco, CA 94109</li>
                        </ul>
                    </li>
                    <li className='p-4 border-bot'>Email Us</li>
                    <li className='p-4 border-bot'>Phone: (844) 202-8256</li>
                </ul>
                <div className="map-banner">
                    <div className='direction-btn'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="map-pin mb-2" />
                        <h3 className='map-banner-text'>GET DIRECTIONS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapDirections
