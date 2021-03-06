import React from 'react';
import "../styles/maps.css";


function Options(props) {
    return (
        <div>
            <div className="title-category">
                <div className="map-category green">
                    <object type="image/svg+xml" data={props.data.logoUrl} className="logo-title">
                    </object>
                    <h3 className="mb-0 ml-3">{props.data.title}</h3>
                </div>
            </div>
            <div className="places-list  container">
                <ul className="parent-list-locations">
                    {props.data.locations.map(location =>
                        <li key={location.name} className="location-list">{location.name}</li>)}
                </ul>
            </div>
        </div>

    )
}

export default Options
