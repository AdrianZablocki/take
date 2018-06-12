import React from 'react';

import Icon from './Icon/Icon';
import apple from '../../../../assets/icons/apple.png';
import win from '../../../../assets/icons/win.png';

const icons = (props) => (
  <div className={props.styleClass}>
    <Icon src={apple} alt="Apple" title="Apple logo"/>
    <Icon src={win} alt="Win" title="Microsoft logo"/>
  </div>    
);

export default icons;