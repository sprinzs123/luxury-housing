import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

import Options from '../components/UnderMap'
import Map from '../components/Map'
import MapMarkers from '../components/MapMarkers'


function MapWrapper() {
    const allPlaces = [
        [{ "name": "place1", "addres": "address1" },
        { "name": "place1.1", "addres": "address1.1" }],

        [{ "name": "place2", "addres": "address2" },
        { "name": "place2.1", "addres": "address2.1" }]
    ]

    const [placeCategory, setPlace] = useState(allPlaces[0]);



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
    
    
    function App(props) {
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

    return (
        <div>
            <button onClick={() => setPlace(allPlaces[0])}>Click me</button>
            <button onClick={() => setPlace(allPlaces[1])}>Click me</button>
            <div>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
            {/* < Map data={placeCategory} /> */}
            < Options data={placeCategory} />

        </div>
    );
}

export default MapWrapper

// HOW MAP COMPONENTS WORK

// this is parent of component for the map
// it manage what shows on map and through setState and pass it to children by props

// MapMarkers maps over list of places as well initializes map

// Map.js gathers info from MapMarkers wraps it and returns final map