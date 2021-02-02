import React from 'react';
import "../styles/maps.css";


function Options(props) {
    console.log(props.data.title)
    return(
        <div>
        <div className="title-category">
            <div className="map-category green">
                <object type="image/svg+xml" data={props.data.logoUrl} class="logo-title">
                </object>
                
                {props.data.title}
            </div>
        </div>
        {/* {props.data.map(home => <div key={home.name}>{home.name}</div>)} */}
        </div>

    )    
}

export default Options
