import React, { Component } from "react";
import "./contactUs.css";

class ContactForm extends Component {
	constructor() {
		super();
		this.state = {
			error: "",
			firstName: "",
			lastName: "",
			email: "",
			inputLabel1: [
				{ label: "First Name", Id: "first" },
				{ label: "Last Name", Id: "last" },
			],
			inputLabel2: [
				{ label: "Phone", Id: "phone" },
				{ label: "Email", Id: "email" },
			],
			floorPlan: [
				"Studio Bed/1 bath",
				"1 Bed/1 bath",
				"2 Bed/1 bath",
				"3 Bed/1 bath",
				"4 Bed/2 bath",
			],
		};
	}

	firstRow() {
		return this.state.inputLabel1.map((input) => (
			<div key={input.label} className="col-sm-6">
				<div className="form-row">
					<label className="input-label">{input.label}</label>
					<input className="form-input" id={input.id}></input>
				</div>
			</div>
		));
	}

	secondRow() {
		return this.state.inputLabel2.map((input) => (
			<div key={input.label} className="col-sm-6">
				<div className="form-row">
					<label className="input-label">{input.label}</label>
					<input className="form-input" id={input.id}></input>
				</div>
			</div>
		));
	}

	checkForErrors() {
		console.log("here");
	}

	submitForm = (e) => {
		e.preventDefault();
		const errors = this.checkForErrors();
		if (!errors) {
			this.setState({
				error: "",
			});
		}
	};

	render() {
		return (
			<div className="contact-form">
				<form>
					<div className="container">
						<h3 className="text-danger">{this.state.error}</h3>

						<div className="input-row row d-flex">
							{this.firstRow()}
						</div>
						<div className="input-row row d-flex">
							{this.secondRow()}
						</div>
						<div className="input-row row d-flex">
							<div className="col-sm-6">
								<div className="form-row">
									<label className="input-label">
										Select a Floorplan
									</label>
									<select
										className="form-input dropdown"
										id="floor"
									>
										<option>Select a Floorplan</option>
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
										Desired Move-in Date
									</label>
									<input
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
								SUBMIT FORM
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default ContactForm;
