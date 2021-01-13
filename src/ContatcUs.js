import React, { Component } from "react";
import './contactUs.css'


class ContactForm extends Component {
    constructor() {
        super()
        this.state = {
            error: "",
            inputLabel1: [{'label': 'First Name', 'Id': 'first'}, 
                        {'label': 'Last Name', 'Id': 'last'}],
            inputLabel2: ['First Name', 'Last Name']
        }
    }

    firstRow() {
        return this.state.inputLabel1.map(input =>
            <div key={input.label} className='form-row'>
                <label >{input.label}</label>
                <input id={input.id}></input>
            </div>
        )
    }


    render() {
        return (
            <div className='container'>
                <div className='input-row d-flex justify-content-between mt-4'>
                    {this.firstRow()}
                </div>
            </div>
        )
    }

}

export default ContactForm