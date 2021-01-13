import React from 'react';
import ReactDOM from 'react-dom';
import ImageRow from './ImageRow';
import Footer from './Footer'
import NavBar from './NavBar'
import AboutUs from './AboutUs'
import ContactUs from './ContatcUs'

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


ReactDOM.render(
  <div>
    <ContactUs />
  </div>,
      document.getElementById('contact')

);