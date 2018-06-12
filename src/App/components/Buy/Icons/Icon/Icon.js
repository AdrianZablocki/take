import React from 'react';

const icon = (props) => (
  <figure className={props.styleClass}>
    <img src={props.src} alt={props.alt} title={props.title}/>
  </figure>
);

export default icon;