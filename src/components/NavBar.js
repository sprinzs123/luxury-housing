import React, { Component } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

class ShowNav extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
		};
	}

	// shows and hides navbar modal
	changeView = () => {
		const toggleState = this.state.showModal;
		const notNavBar = document.querySelector(".content");
		console.log(notNavBar)
		const modal = document.querySelector(".nav-modal");
		const navbar = document.querySelector('#nav-bar-all');

		// hides everything and show modal
		if (toggleState === false) {
			this.setState({
				showModal: true,
			});
			notNavBar.style.display = "none";
			modal.style.display = "inline";
			navbar.classList.toggle('bg-nav')
		}
		// shows page contents again and  hides modal
		if (toggleState === true) {
			this.setState({
				showModal: false,
			});
			notNavBar.style.display = "inline";
			modal.style.display = "none";
			navbar.classList.toggle('bg-nav')
		}
	};


	// return correct button for toggle depending on state
	toggleBtn = () => {
		const currentState = this.state.showModal
		if (currentState === false) {
			return <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-justify" viewBox="0 0 16 16">
				<path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
			</svg>
		} else {
			return <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
				<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
			</svg>
		}
	}


	render() {
		return (
			<div className="">
				<nav
					className="nav-only"
					id='nav-bar-all'
					style={{ backgroundImage: `url(${this.props.bannerImg})` }}
				>
					<div className="nav-items d-flex justify-content-between">
						<div className="log-nav d-flex align-items-center">
							<h1><Link to='/'></Link>Logo</h1>
						</div>
						<div className="nav-links d-flex">
							{/* nav links */}
							<ul className="d-flex align-items-center all-links">
								<li className="small-text"><Link to='/gallery'>Virtual Tours</Link></li>
								<li className="small-text"><Link to='/contact'>Book Your Tour</Link></li>
								<li className="small-text">(874) 204-1589</li>
							</ul>
							{/* nav boggle btn */}
							<div className="nav-toggle d-flex align-item-center">
								<ul className="nav-btn d-flex align-items-center">
									<li className="lease-text mr-2">LEASE NOW</li>
									<li
										onClick={this.changeView}
										className="toggle-btn"
									>
										{this.toggleBtn()}
									</li>
								</ul>
							</div>
						</div>
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
