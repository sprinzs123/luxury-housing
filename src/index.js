import React from 'react';
import ReactDOM from 'react-dom';
import ImageRow from './ImageRow';
import Footer from './Footer'


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