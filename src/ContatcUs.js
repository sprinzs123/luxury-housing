import React, { Component } from "react";
import './contactUs.css'


class ContactForm extends Component {
    constructor() {
        super()
        this.state = {
            error: "",
            inputLabel1: [{ 'label': 'First Name', 'Id': 'first' }, { 'label': 'Last Name', 'Id': 'last' }],
            inputLabel2: [{ 'label': 'Phone', 'Id': 'phone' }, { 'label': 'Email', 'Id': 'email' }],
            floorPlan: ['Studio Bed/1 bath', '1 Bed/1 bath', '2 Bed/1 bath', '3 Bed/1 bath', '4 Bed/2 bath']
        }
    }

    firstRow() {
        return this.state.inputLabel1.map(input =>
            <div className='col-6'>
                <div key={input.label} className='form-row'>
                    <label className='input-label'>{input.label}</label>
                    <input className='form-input' id={input.id}></input>
                </div>
            </div>
        )
    }

    secondRow() {
        return this.state.inputLabel2.map(input =>
            <div className='col-6'>
                <div key={input.label} className='form-row'>
                    <label className='input-label'>{input.label}</label>
                    <input className='form-input' id={input.id}></input>
                </div>
            </div>
        )
    }


    render() {
        return (
            <div className='contact-form'>
                <div className='container'>
                    <div className='input-row row d-flex pb-3'>
                        {this.firstRow()}
                    </div>
                    <div className='input-row row d-flex pb-3'>
                        {this.secondRow()}
                    </div>
                    <div className='input-row row d-flex pb-3'>
                        <div className='col-6'>
                            <div className='form-row'>
                                <label className='input-label'>Select a Floorplan</label>
                                <div className='form-input dropdown' id='floor'>
               
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default ContactForm