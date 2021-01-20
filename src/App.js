import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../src/styles/index.css'


import Contact from './pages/Contact';




function App() {
    return (
        <Router>
            <Route exact path='/contact' component={Contact} />
        </Router>
    )

}

export default App