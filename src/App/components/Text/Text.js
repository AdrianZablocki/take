import React from 'react';

import './Text.css';

const text = (props) => (
  <p className={props.textClass} onLoad={props.onload}>{props.text}</p>
);

export default text;