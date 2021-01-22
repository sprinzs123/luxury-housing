import React, { Component } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

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
		const navbar = document.querySelector('#nav-bar-all');

		if (toggleState === "X") {
			this.setState({
				toggleButton: "Y",
				showModal: true,
			});
			notNavBar.style.display = "inline";
			modal.style.display = "none";
			navbar.classList.toggle('bg-nav')
		}
		// hide everything and show nav modal
		if (toggleState === "Y") {
			this.setState({
				toggleButton: "X",
				showModal: false,
			});
			notNavBar.style.display = "none";
			modal.style.display = "inline";
			navbar.classList.toggle('bg-nav')
		}
	};


	render() {
		return (
			<div className="">
				<nav
					className="nav-only"
					id='nav-bar-all'
					style={{ backgroundImage: `url(${this.props.bannerImg})` }}
				>
					<div className="nav-items">
						<div className="log-nav">
							<h1><Link to='/'></Link>Logo</h1>
						</div>
						<div className="nav-links">
							<ul className="d-flex align-items-center">
								<li className="small-text"><Link to='/gallery'>Virtual Tours</Link></li>
								<li className="small-text"><Link to='/contact'>Book Your Tour</Link></li>
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
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/amenities">Amenities</Link>
								</li>
								<li>
									<Link to="/gallery">Gallery</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ShowNav;
