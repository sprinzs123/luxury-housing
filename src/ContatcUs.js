import React, { Component } from "react";
import "./contactUs.css";

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
			firstName: newValue,
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
			firstName: newValue,
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
			firstName: newValue,
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
			firstName: newValue,
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

	checkForErrors = () => {
        let errors = []
        if(!this.state.firstName){
            errors.push('Invalid Name')
        }



        return errors
	}

	submitForm = (e) => {
        e.preventDefault();
        let foundErrors = this.checkForErrors()     
        console.log(foundErrors)  
	};

	render() {
		return (
			<div className="contact-form">
				<form>
					<div className="container">
						<h3 className="text-danger">{this.state.error}</h3>

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
