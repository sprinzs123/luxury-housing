import './amenities.css';
import React, { Component } from 'react'

export default class Amenities extends Component {
    constructor(props) {
        super(props)        
        this.state = {
             hidden : true,
             btnOne: 'show more'
        }
    }
    
    btnToggle = () => {
        let hiddenMenu = document.querySelector('.hidden-amenities')
        if(this.state.btnOne === 'show more'){
            hiddenMenu.classList.toggle('height-0')
            this.setState({
                btnOne : 'show less'
            })

        } else {
            hiddenMenu.classList.toggle('height-0')
            this.setState({
                btnOne : 'show more'
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='all-amenities'>
                    <div className='show-amenities'>
                        <ul className='hide'>
                            <li>Test</li>
                            <li>test2</li>
                        </ul>
                    </div>
                    <div className='hidden-amenities height-0'>
                        <ul>
                            <li>hidden</li>
                            <li>hidden2</li>
                        </ul>
                    </div>
                    <button onClick={this.btnToggle} className='mt-4'>{this.state.btnOne}</button>
                </div>
            </div>
        )
    }
}
