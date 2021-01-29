import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
// import MapInit from '../components/MapMarkers'

function Map(locationObjects) {

    return (     
        // console.log(locationObjects.map(location =>(location)
  
        <GoogleMap 
            defaultZoom={14}
            defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        >
            {/* {locationObjects.map(location =>( */}
                <Marker position={{ lat: 37.7749, lng: -122.4194 }} />

            {/* ))} */}
    </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))


export default function App(props) {
    const [selectedPlace, setSelectedPlace] = useState(null);
    Map(props.data)

    return  (
        <div>
           <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
        </div>
    )
    
}