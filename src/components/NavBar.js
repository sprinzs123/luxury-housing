import React, { Component } from "react";
import "../styles/NavBar.css";

class ShowNav extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			toggleButton: "Y",
		};
	}

	changeView = () => {
		const toggleState = this.state.toggleButton;
		const notNavBar = document.querySelector(".content");
		const modal = document.querySelector(".nav-modal");

		if (toggleState === "X") {
			this.setState({
				toggleButton: "Y",
				showModal: true,
			});
            notNavBar.style.display = "inline";
            modal.style.display = 'none';

		}
		if (toggleState === "Y") {
			this.setState({
				toggleButton: "X",
				showModal: false,
			});
            notNavBar.style.display = "none";
            modal.style.display = 'inline';
		}
	};

	Modal() {
		return (
			<div className="nav-modal">
				<div className="nav-modal-flex">
					<ul className="modal-text">
						<li>Home</li>
						<li>Amenities</li>
						<li>Neighborhood</li>
						<li>Gallery</li>
						<li>Residents</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="nav-bar-all">
				<nav
					className="nav-only"
					style={{ backgroundImage: `url(${this.props.bannerImg})` }}
				>
					<div className="nav-items">
						<div className="log-nav">
							<h1>Logo</h1>
						</div>
						<div className="nav-links">
							<ul className="d-flex align-items-center">
								<li className="small-text">Virtual Tours</li>
								<li className="small-text">Book Your Tour</li>
								<li className="small-text">(874) 204-1589</li>
							</ul>
						</div>
					</div>
					<div className="nav-toggle">
						<ul className="nav-btn">
							<li className="lease-text">LEASE NOW</li>
							<li
								onClick={this.changeView}
								className="toggle-btn"
							>
								{this.state.toggleButton}
							</li>
						</ul>
					</div>
				</nav>
				<div className="modal-parent">
					<div className="nav-modal">
						<div className="nav-modal-flex">
							<ul className="modal-text">
								<li>Home</li>
								<li>Amenities</li>
								<li>Neighborhood</li>
								<li>Gallery</li>
								<li>Residents</li>
								<li>Contact</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ShowNav;
