import React from 'react';

const input = (props) => (
  <input type={props.type} id={props.id} onChange={props.changed}/>
)

export default input;