import React, { Component } from "react";
import "../styles/contactUs.css";
import MapDirections from "../components/MapDirections"
import Fade from 'react-reveal/Fade';


class ContactForm extends Component {
	constructor() {
		super();
		this.state = {
			error: [],
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			firstLabel: "First Name",
			lastLabel: "Last Name",
			phoneLabel: "Phone",
			emailLabel: "Email",
			dateLabel: "Desired Move-in Date",
			floorPlan: [
				"Studio Bed/1 bath",
				"1 Bed/1 bath",
				"2 Bed/1 bath",
				"3 Bed/1 bath",
				"4 Bed/2 bath",
			],
		};
	}

	// make label disappear when start typing
	changeFirst = (e) => {
		const newValue = e.target.value;
		this.setState({
			firstName: newValue,
		});
		if (newValue.length > 0) {
			this.setState({
				firstLabel: "",
			});
		} else {
			this.setState({
				firstLabel: "First Name",
			});
		}
	};

	changeLast = (e) => {
		const newValue = e.target.value;
		this.setState({
			lastName: newValue,
		});
		if (newValue.length > 0) {
			this.setState({
				lastLabel: "",
			});
		} else {
			this.setState({
				lastLabel: "Last Name",
			});
		}
	};

	changePhone = (e) => {
		const newValue = e.target.value;
		this.setState({
			phone: newValue,
		});
		if (newValue.length > 0) {
			this.setState({
				phoneLabel: "",
			});
		} else {
			this.setState({
				phoneLabel: "Phone",
			});
		}
	};

	changeEmail = (e) => {
		const newValue = e.target.value;
		this.setState({
			email: newValue,
		});
		if (newValue.length > 0) {
			this.setState({
				emailLabel: "",
			});
		} else {
			this.setState({
				emailLabel: "Email",
			});
		}
	};

	changeDate = (e) => {
		const newValue = e.target.value;
		this.setState({
			date: newValue,
		});
		if (newValue.length > 0) {
			this.setState({
				dateLabel: "",
			});
		} else {
			this.setState({
				dateLabel: "Desired Move-in Date",
			});
		}
	};

	selectPlan = (e) => {
		console.log(e);
	};

	// for validation return list of errors found that is going to be updated to state
	checkForErrors = () => {
		let errors = [];
		if (!this.state.firstName) {
			errors.push("Invalid Name");
		}

		if (!this.state.lastName) {
			errors.push("Invalid Last Name");
		}

		if (!this.state.email.includes("@")) {
			errors.push("Invalid Email");
		}

		if (!this.state.phone) {
			errors.push("Invalid Phone Number");
		}
		return errors;
	};

	showErrors = () => {
		if (this.state.error.length !== 0) {
			return this.state.error.map((error) => (
				<li key={error} className="text-danger">
					{error}
				</li>
			));
		}
	};

	submitForm = (e) => {
		e.preventDefault();
		let foundErrors = this.checkForErrors();
		this.setState({
			error: foundErrors,
		});
		if (foundErrors.length === 0) {
			this.setState({
				firstLabel: "First Name",
				lastLabel: "Last Name",
				phoneLabel: "Phone",
				emailLabel: "Email",
				dateLabel: "Desired Move-in Date",
			});
			let allInputs = document.querySelectorAll("input");
			allInputs.forEach((input) => {
				input.value = "";
			});
			let textArea = document.querySelector("textarea");
			textArea.value = "";
		}
	};

	render() {
		return (
			<div className="contact-page">
				{/* info with directions */}
				<Fade left>
					<MapDirections/>
				</Fade>
				{/* office hours div */}
				<Fade right>
				<div className="office-hours-parent container">
					<div className="office-hours-inner">
						<div className="office-text">
							<h4><b>Office Hours</b></h4>
						</div>
						<div className="office-is-open">
							<ul className="office-days">
								<li>Monday-Friday</li>
								<li>Saturday</li>
							</ul>
							<ul className="office-hours">
								<li>9:00 AM - 6:00 PM</li>
								<li>10:00 AM - 5:00 PM</li>
							</ul>
						</div>
					</div>
				</div>
				</Fade>
				<Fade bottom>
				<div className="contact-form">
					<form>
						<div className="container">
							<div className="form-header">
								<h3>Get in Touch!</h3>
							</div>
							{/* contact form goes here */}
							<div className="contact-fields">
								<div className="form-messages">
									<ul className=" error-message pl-0">
										{this.showErrors()}
									</ul>
								</div>
								<div className="input-row row d-flex">
									<div className="col-sm-6">
										<div className="form-row">
											<label className="input-label">
												{this.state.firstLabel}
											</label>
											<input
												onChange={this.changeFirst}
												className="form-input"
												id="move"
											></input>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-row">
											<label className="input-label">
												{this.state.lastLabel}
											</label>
											<input
												onChange={this.changeLast}
												className="form-input"
												id="move"
											></input>
										</div>
									</div>{" "}
								</div>
								<div className="input-row row d-flex">
									<div className="col-sm-6">
										<div className="form-row">
											<label className="input-label">
												{this.state.phoneLabel}
											</label>
											<input
												onChange={this.changePhone}
												className="form-input"
												id="move"
											></input>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-row">
											<label className="input-label">
												{this.state.emailLabel}
											</label>
											<input
												onChange={this.changeEmail}
												className="form-input"
												id="move"
											></input>
										</div>
									</div>{" "}
								</div>
								<div className="input-row row d-flex">
									<div className="col-sm-6">
										<div className="form-row">
											<label className="input-label">
												{this.state.dateLabel}
											</label>
											<select
												className="form-input dropdown"
												id="floor"
											>
												<option>
													Select a Floorplan
												</option>
												<option>Studio/1 Bath</option>
												<option>1 Bed/1 Bath</option>
												<option>2 Bed/1 Bath</option>
												<option>3 Bed/2 Bath</option>
											</select>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-row">
											<label className="input-label">
												{this.state.dateLabel}
											</label>
											<input
												onChange={this.changeDate}
												className="form-input"
												id="move"
											></input>
										</div>
									</div>
								</div>
								<div className="large-area row mb-3">
									<label className="input-label">
										Desired Move-in Date
									</label>
									<textarea
										id="comments"
										className=" col-12 question"
									></textarea>
								</div>
								<div className="d-flex justify-content-center">
									<button
										onClick={this.submitForm}
										className="btn-green"
									>
										SEND IT!
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
				</Fade>

			</div>
		);
	}
}

export default ContactForm;
