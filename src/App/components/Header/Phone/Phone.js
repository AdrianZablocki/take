import React from 'react';

import iphone from '../../../../assets/images/phone.png';
import './Phone.css';

const phone =(props) => {
  return (
    <figure className="Phone" id="iPhone" onLoad={props.loaded}>
      <img src={iphone} alt="iPhone"/>
    </figure>
  );
}

export default phone;