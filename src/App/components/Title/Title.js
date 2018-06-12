import React from 'react';

import './Title.css';

const title = (props) => (
  <h2 
    className={props.titleClass}
    id={props.id} 
    onLoad={props.onload}
    onScroll={props.onscroll} > {props.title} 
  </h2>
);

export default title;