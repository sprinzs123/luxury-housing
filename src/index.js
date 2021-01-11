import React from 'react';
import ReactDOM from 'react-dom';
import ImageRow from './ImageRow';
import Footer from './Footer'
import NavBar from './NavBar'
import AboutUs from './AboutUs'

ReactDOM.render(
<div>
  <ImageRow />
</div>,
  document.getElementById('root')
);

ReactDOM.render(
  <div>
    <Footer />
  </div>,
      document.getElementById('footer')

);


ReactDOM.render(
  <div>
    <NavBar />
  </div>,
      document.getElementById('nav-bar')

);


ReactDOM.render(
  <div>
    <AboutUs />
  </div>,
      document.getElementById('about')

);