import React, { Component } from "react"
import "../styles/aboutUs.css";



class AboutUs extends Component {
    constructor() {
        super()
        this.state = {
            aboutBtn: 'Read More',
            smallText : "Welcome to Etta, here at our pet-friendly apartments in San Francisco you are sure to find your statement of style and sophistication. Choose from a studio, one, two, and three bedroom apartments or one of our penthouse suites for the ultimate lifestyle experience. Each apartment features European-style kitchens that highlight custom cabinetry and quality contemporary finishes, while floor to ceiling windows frame masterful city skyline and bay views. True to our classic movie theatre roots, Et..."
        }
    }


    changeText = () => {
        const currentBtn = this.state.aboutBtn
        if(currentBtn === "Read More"){
            this.setState({
                aboutBtn : 'Read Less',
                smallText : 'Welcome to Etta, here at our pet-friendly apartments in San Francisco you are sure to find your statement of style and sophistication. Choose from a studio, one, two, and three bedroom apartments or one of our penthouse suites for the ultimate lifestyle experience. Each apartment features European-style kitchens that highlight custom cabinetry and quality contemporary finishes, while floor to ceiling windows frame masterful city skyline and bay views. \n \n True to our classic movie theatre roots, Etta invites you to celebrate the area’s unique history—from cable cars and hidden lanes to pristine streetscapes filled with a mix of upscale and vintage boutiques, bars and restaurants. Located minutes away from Polk Street and minutes from Lafayette Park, you’ll enjoy easy access to the Financial District, public transportation and a pedestrian-friendly lifestyle bursting with local character and an authentic sense of community. \n \n Take center stage in this signature Nob Hill neighborhood in the heart of San Francisco. Call and schedule your tour of our luxury apartments in San Francisco, CA.'
            })
        } else {
            this.setState({
                aboutBtn : 'Read More',
                smallText : 'Welcome to Etta, here at our pet-friendly apartments in San Francisco you are sure to find your statement of style and sophistication. Choose from a studio, one, two, and three bedroom apartments or one of our penthouse suites for the ultimate lifestyle experience. Each apartment features European-style kitchens that highlight custom cabinetry and quality contemporary finishes, while floor to ceiling windows frame masterful city skyline and bay views. True to our classic movie theatre roots, Et...'
            })
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
                            <div className='about-us-parent'>
                                <p className='long-text'>{this.state.smallText}<a onClick={this.changeText} className='expand-text-btn'>{this.state.aboutBtn}</a></p>
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