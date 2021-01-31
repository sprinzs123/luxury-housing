import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

import Options from '../components/UnderMap'
import mapStyles from '../data/mapStyles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBicycle, faUtensils, faTag } from '@fortawesome/free-solid-svg-icons'


import coffee from '../logos/coffee.svg'





function MapWrapper() {
    const allPlaces = [
        [{ "name": "Oasis Grill", "addres": "address1", 'location': [37.78346141612193, -122.39977064569881] },
        { "name": "Ristorante Milano", "addres": "address1.1", "location": [37.79525853673037, -122.4203700215186] },
        { "name": "Quince", "addres": "address1.1", "location": [37.79797144289688, -122.40251723737924] },
        { "name": "Mourad", "addres": "address1.1", "location": [37.78793319230151, -122.39925567106314] },
        { "name": "Blackwood", "addres": "address1.1", "location": [37.801091161838734, -122.434532085024] },
        { "name": "Sweet Maple", "addres": "address1.1", "location": [37.78644090345005, -122.42843810585444] }
        ],

        [{ "name": "Caffe Union", "addres": "address1", 'location': [37.798782705531636, -122.42483322221106] },
        { "name": "Caffe Capricio", "addres": "address1.1", "location": [37.80454723711336, -122.40938369755577] },
        { "name": "Caffe Greco", "addres": "address1.1", "location": [37.799800008502125, -122.4112719727914] },
        { "name": "illy Caffe", "addres": "address1.1", "location": [37.79206815455429, -122.40500633223677] },
        { "name": "R Caffe", "addres": "address1.1", "location": [37.78331797550752, -122.41728012126848] },
        { "name": "Caffe Bianco", "addres": "address1.1", "location": [37.79057594923993, -122.39977065999248] }
        ]
    ]

    const [placeCategory, setPlace] = useState(allPlaces[0]);
    const placesIcons = [ faUtensils, faCoffee, faBicycle, faTag]


    function Map() {
        const [selectedPlace, setSelectedPlace] = useState(null);
        return (
            <GoogleMap
                defaultZoom={13.5}
                defaultCenter={{ lat: 37.7944, lng: -122.4021 }}
                defaultOptions={{styles: mapStyles}}
            >
                {placeCategory.map(place => (
                    <Marker
                        key={place.name}
                        position={{
                            lat: place.location[0],
                            lng: place.location[1] 
                    }}
                    onClick={() => {setSelectedPlace(place) }}
                    icon={{
                        url: '/coffee.png',
                        scaledSize: new window.google.maps.Size(20, 20)
                        
                    }}
                     />
                ))}
                {selectedPlace && (
                    <InfoWindow
                        position={{
                            lat: selectedPlace.location[0],
                            lng: selectedPlace.location[1] 
                        }}
                        onCloseClick={() => {
                            setSelectedPlace(null)
                        }}
                        >
                            <h3>{selectedPlace.name}</h3>
                    </InfoWindow>
                )}
            </GoogleMap>
        )
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map))


    function App() {
        return (
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
            < Options data={placeCategory} logo={placesIcons[allPlaces.indexOf(placeCategory)]} />
        </div>
    );
}

export default MapWrapper

// HOW MAP COMPONENTS WORK

// this is parent of component for the map
// it manage what shows on map and through setState and pass it to children by props

// MapMarkers maps over list of places as well initializes map

// Map.js gathers info from MapMarkers wraps it and returns final map