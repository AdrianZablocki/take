import React from 'react';

const button= (props) => (
  <button type={props.btnType} 
          onClick={props.clicked}
          className={props.buttonClass} >{props.text}
  </button>
);

export default button;