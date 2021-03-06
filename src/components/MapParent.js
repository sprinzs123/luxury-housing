import React, { useState } from "react";
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker,
	InfoWindow,
} from "react-google-maps";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCoffee,
	faBicycle,
	faUtensils,
	faTag,
} from "@fortawesome/free-solid-svg-icons";

import Options from "../components/UnderMap";
import mapStyles from "../data/mapStyles";
import placesData from "../data/placesData.json";
import "../styles/maps.css";
import Fade from 'react-reveal/Fade';


function MapWrapper() {
	const [placeCategory, setPlace] = useState(placesData["food"]);

	function Map() {
		const [selectedPlace, setSelectedPlace] = useState(null);

		return (
			<GoogleMap
				defaultZoom={13.5}
				defaultCenter={{ lat: 37.7944, lng: -122.4021 }}
				defaultOptions={{ styles: mapStyles }}
			>
				{placeCategory["locations"].map((place) => (
					<Marker
						key={place.name}
						position={{
							lat: place.location[0],
							lng: place.location[1],
						}}
						onClick={() => {
							setSelectedPlace(place);
						}}
						icon={{
							url: placeCategory["logoUrl"],
							scaledSize: new window.google.maps.Size(20, 20),
						}}
					/>
				))}
				<Marker
					position={{
						lat: 37.78982588149873,
						lng: -122.41782149701461,
					}}

				/>
				{selectedPlace && (
					<InfoWindow
						position={{
							lat: selectedPlace.location[0],
							lng: selectedPlace.location[1],
						}}
						onCloseClick={() => {
							setSelectedPlace(null);
						}}
					>
						<div>
							<h5 className="green"><b>{selectedPlace.name}</b></h5>
							<h6>{selectedPlace.addres}</h6>
						</div>

					</InfoWindow>
				)}
			</GoogleMap>
		);
	}

	const WrappedMap = withScriptjs(withGoogleMap(Map));

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
		);
	}

	return (
		<div>
			<div>
				<div className='page-description container'>
					Enjoy our San Francisco apartments for rent that are perfectly located near Polk Street, Lafayette Park and more. We're centrally located in the city with great shopping & dining nearby as well. Schedule a tour today and see why our Etta homes are the home for you!
			</div>
				<Fade left>
					<div className='map-div'>
					<WrappedMap
						googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `400px` }} />}
						mapElement={<div style={{ height: `100%` }} />}
					/>
					</div>

				</Fade>

			</div>
			<Fade right>
				<div className="maps-btns">
					<div className="maps-btn-parent">
						<div className="border-right">
							<div
								className="map-btn"
								onClick={() => setPlace(placesData["food"])}
							>
								<FontAwesomeIcon icon={faUtensils} size="lg" />
								<h5 className="ml-3">Restaurants </h5>
							</div>
						</div>
						<div className="border-right">
							<div
								className="map-btn"
								onClick={() => setPlace(placesData["coffee"])}
							>
								<FontAwesomeIcon icon={faCoffee} size="lg" />
								<h5 className="ml-3">Coffee</h5>
							</div>
						</div>
						<div className="border-right">
							<div
								className="map-btn"
								onClick={() => setPlace(placesData["shopping"])}
							>
								<FontAwesomeIcon icon={faTag} size="lg" />
								<h5 className="ml-3">Shopping</h5>
							</div>
						</div>
						<div className="pr-0">
							<div
								className="map-btn"
								onClick={() => setPlace(placesData["recreation"])}
							>
								<FontAwesomeIcon icon={faBicycle} size="lg" />
								<h5 className="ml-3">Recreation</h5>
							</div>
						</div>
					</div>
				</div>
			</Fade>

			<Fade bottom>
				< Options data={placeCategory} />
			</Fade>
		</div>
	);
}

export default MapWrapper;
