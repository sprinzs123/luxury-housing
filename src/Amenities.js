import './amenities.css';
import React, { Component } from 'react'

export default class Amenities extends Component {
    constructor(props) {
        super(props)        
        this.state = {
             hidden : true,
             btnOne: 'showMore'
        }
    }
    
    render() {

        
        return (
            <div className='container'>
                <div className='all-amenities'>
                    <div className='show-amenities'>
                        <ul>
                            <li>Test</li>
                            <li>test2</li>
                        </ul>
                    </div>
                    <div className='hidden-amenities'>
                        <ul>
                            <li>hidden</li>
                            <li>hidden2</li>
                        </ul>
                    </div>
                    <button className='mt-4'>{this.state.btnOne}</button>
                </div>
            </div>
        )
    }
}
