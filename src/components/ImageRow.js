import React from 'react';
import './ImageRow.css'

import pic1 from './imgs/galery1.jpg'
import pic2 from './imgs/galery2.jpg'
import pic3 from './imgs/galery3.jpg'
import pic4 from './imgs/galery4.jpg'
import pic5 from './imgs/galery5.jpg'
import pic6 from './imgs/galery6.jpg'



function App() {
  return (
    <div className="images-row">
    <ul className="small-images">   
        <li><img src={pic1} className='img-footer' alt="logo" /></li> 
        <li><img src={pic2} className='img-footer' alt="logo" /></li>   
        <li><img src={pic3} className='img-footer' alt="logo" /></li>   
        <li><img src={pic4} className='img-footer' alt="logo" /></li>   
        <li><img src={pic5} className='img-footer' alt="logo" /></li>   
        <li><img src={pic6} className='img-footer' alt="logo" /></li>     
    </ul>
    </div>
    

  );
}

export default App;
