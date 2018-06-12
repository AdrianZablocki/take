import React from 'react';

const aux = (props) => (
  <div  className={props.styleClass} 
        style={props.style} 
        onMouseMove={props.move}
        onScroll={props.onscroll}
        onClick={props.clicked} >{props.children}
  </div>
);

export default aux;