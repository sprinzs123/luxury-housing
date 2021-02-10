import "../styles/amenities.css";

import React, { Component } from "react";
import pic1 from "../imgs/galery2.jpg";
import pic2 from "../imgs/galery3.jpg";



export default class Amenities extends Component {
	constructor(props) {
		super(props);
		this.state = {
			btnOne: "SHOW MORE",
			btnTwo: "SHOW MORE",
		};
	}

	// toggle first amenities box to changing its height
	btnToggle = () => {
		let hiddenMenu = document.querySelector(".hidden-amenities");
		if (this.state.btnOne === "SHOW MORE") {
			hiddenMenu.classList.toggle("height-0");
			this.setState({
				btnOne: "SHOW LESS",
			});
		} else {
			hiddenMenu.classList.toggle("height-0");
			this.setState({
				btnOne: "SHOW MORE",
			});
		}
	};

	btnToggleTwo = () => {
		let hiddenMenu = document.querySelector(".hidden-amenities-two");
		if (this.state.btnOne === "SHOW MORE") {
			hiddenMenu.classList.toggle("height-0");
			this.setState({
				btnTwo: "SHOW LESS",
			});
		} else {
			hiddenMenu.classList.toggle("height-0");
			this.setState({
				btnTwo: "SHOW MORE",
			});
		}
	};

	render() {
		return (
			<div className="container mt-4">
				<div className="all-amenities">
					<div className="show-amenities-pic">
						<div className="amenities-header">
							<div className="amenity-img">
								<img src={pic1} alt="img" />
							</div>
							<div className="amenity-text second-item">
								<h3 className="green">Community Amenities</h3>
							</div>
						</div>
					</div>
					<div className="show-amenities">
						<ul className="amenities-items">
							<li className="first-item">
								Indoor/Outdoor Lounge
							</li>
							<li className="first-item">Fitness Center</li>
							<li className="first-item">Conference Room</li>
							<li className="first-item">
								12th Floor Outdoor Seating Areas
							</li>
							<li className="second-item">
								Barbeque/Picnic Area
							</li>
							<li className="second-item">Dog Run </li>
							<li className="second-item">Prime location</li>
							<li className="second-item">
								24-Hour Emergency Maintenance
							</li>
						</ul>
					</div>
					<div className="hidden-amenities height-0">
						<ul className="amenities-items">
							<li className="first-item">Bike Parking</li>
							<li className="first-item">Package Lockers</li>
							<li className="first-item">
								Apartment Parking (w/ Fee)
							</li>

							<li className="second-item">
								Online Payments Accepted
							</li>
							<li className="second-item">EV Chargers on Site</li>
							<li className="second-item">
								Indoor/Outdoor Lounge
							</li>
						</ul>
					</div>
					<div className="d-flex justify-content-center">
						<button
							onClick={this.btnToggle}
							className="btn-green mt-4"
						>
							{this.state.btnOne}
						</button>
					</div>
				</div>
				{/* new amenities */}
				<div className="all-amenities">
					<div className="show-amenities-pic">
						<div className="amenities-header-two">
							<div className="amenity-img pl-3">
								<img src={pic2} alt="img" />
							</div>
							<div className="amenity-text-two second-item">
								<h3 className="green">Apartment Amenities</h3>
							</div>
						</div>
					</div>
					<div className="show-amenities">
						<ul className="amenities-items">
							<li className="first-item">City and Bay Views</li>
							<li className="first-item">
								Floor to Ceiling Windows
							</li>
							<li className="first-item">Hardwood Floors</li>
							<li className="first-item">European Kitchen</li>
							<li className="second-item">
								Stainless Steel Appliances
							</li>
							<li className="second-item">Tile Bathroom </li>
							<li className="second-item">Walk-In Closets</li>
							<li className="second-item">Digital Thermostat</li>
						</ul>
					</div>
					<div className="hidden-amenities-two height-0">
						<ul className="amenities-items">
							<li className="first-item">
								In-Unit Washer + Dryer
							</li>
							<li className="first-item">
								Full Coverage Cellular Blinds
							</li>
							<li className="first-item">
								Built-In Microwave & Oven
							</li>

							<li className="second-item">
								Online Payments Accepted
							</li>
							<li className="second-item">EV Chargers on Site</li>
							<li className="second-item">Patio/Balcony</li>
						</ul>
					</div>
					<div className="d-flex justify-content-center">
						<button
							onClick={this.btnToggleTwo}
							className="btn-green mt-4"
						>
							{this.state.btnTwo}
						</button>
					</div>
				</div>
			</div>
		);
	}
}
