import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

function Map(props) {    
    return (
        <GoogleMap 
            defaultZoom={14}
            defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        >
            {/* {props.data.map((place) =>( */}
                <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
            {/* ))} */}
    </GoogleMap>
    )
}

export default Map