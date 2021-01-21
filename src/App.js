import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import '../src/styles/index.css'


import Contact from './pages/Contact';
import Amenities from './pages/AmenitiesPage';
import Gallery from './pages/GalleryPage'
import Home from './pages/HomePage'





function App() {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/amenities' component={Amenities} />
        </Router>
    )

}

export default App