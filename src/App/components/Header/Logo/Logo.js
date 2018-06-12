import React from 'react';

import './Logo.css';

const logo = (props) => (
  <h1 className="Logo"><span className="Logo-shape" onLoad={props.loaded}></span>{props.logo}</h1>
);

export default logo;