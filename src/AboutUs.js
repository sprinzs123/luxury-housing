import React, { Component } from "react"
import "./aboutUs.css";



class AboutUs extends Component {
    constructor() {
        super()
        this.state = {
            aboutBtn: 'Read Mode',
            aboutMore: false
        }
    }


    render() {
        return (
            <div className='welcome-div'>
                <div className='inner-welcome container'>
                    <div className='welcome-items row d-flex justify-content-center'>
                        <div className='col-sm-3'>
                            <h3>Be Your Own Classic</h3>
                        </div>
                        <div className='col-sm-9'>
                            <div className=''>
                                <p className='long-text'>Welcome to Etta, here at our pet-friendly apartments in San Francisco you are sure to find your statement of style and sophistication. Choose from a studio, one, two, and three bedroom apartments or one of our penthouse suites for the ultimate lifestyle experience. Each apartment features European-style kitchens that highlight custom cabinetry and quality contemporary finishes, while floor to ceiling windows frame masterful city skyline and bay views.</p>
                                <p className='expand'>Read More</p>
                            </div>
                            <div className='welcome-btns btn-row'>
                                <div className='btn-parent'>
                                    <div className='btn-green'>VIEW AMENITIES</div>

                                </div>
                                <div className='btn-parent'>
                                    <div className='btn-green'>EXPLORE THE NEIGHBORHOOD</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}


export default AboutUs