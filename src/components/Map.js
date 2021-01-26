import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map() {
    return (
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{ lat:122.4194, lng:37.7749 }}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))


export default function App() {
    return  (
        <div>
           <WrappedMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
        </div>
    )
    
}