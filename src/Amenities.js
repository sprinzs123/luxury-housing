import "./amenities.css";
import React, { Component } from "react";

export default class Amenities extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true,
			btnOne: "SHOW MORE",
		};
	}

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

	render() {
		return (
			<div className="container mt-4">
				<div className="all-amenities">
					<div className="show-amenities">
						<ul className="amenities-items">
                            <li className="first-item">
								 Indoor/Outdoor Lounge
							</li>                            
                            <li className="first-item">
								 Indoor/Outdoor Lounge
							</li>
                            <li className="first-item">
								 Indoor/Outdoor Lounge
							</li>
                            <li className="first-item">
								 Indoor/Outdoor Lounge
							</li>
                            <li className="second-item">
								Indoor/Outdoor Lounge
							</li>
                            <li className="second-item">
								Indoor/Outdoor Lounge
							</li>                          
                            <li className="second-item">
								Indoor/Outdoor Lounge
							</li>                           
							<li className="second-item">
								Indoor/Outdoor Lounge
							</li>                            
						</ul>
					</div>
					<div className="hidden-amenities">
						<ul className="amenities-items">
                            <li className="first-item">
								 Indoor/Outdoor Lounge
							</li>                            
                            <li className="first-item">
								 Indoor/Outdoor Lounge
							</li>
                            <li className="first-item">
								 Indoor/Outdoor Lounge
							</li>
                            <li className="first-item">
								 Indoor/Outdoor Lounge
							</li>
                            <li className="second-item">
								Indoor/Outdoor Lounge
							</li>
                            <li className="second-item">
								Indoor/Outdoor Lounge
							</li>                          
                            <li className="second-item">
								Indoor/Outdoor Lounge
							</li>                           
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
			</div>
		);
	}
}
