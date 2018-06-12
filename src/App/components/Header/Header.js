import React, { Component } from 'react';

import './Header.css';
import Aux from '../../hoc/Aux/Aux';
import Logo from './Logo/Logo';
import Jumbotron from './Jumbotron/Jumbotron';
import Phone from './Phone/Phone';
import Background from '../../../assets/images/bg_header.jpg';

class Header extends Component {

  setAnimationHandler () {
    document.getElementById('iPhone').classList.add('Phone-show');
    document.querySelector('.Jumbotron .Title').classList.add('Title-show');
    document.querySelector('.Jumbotron .Text').classList.add('Text-show');
    document.querySelector('.Logo-shape').classList.add('Logo-shape-show');
  }

  render () {
    const headerBackground = {
      backgroundImage: `url(${Background})`
    };

    return (
      <header style={headerBackground} className="Header-bg">
        <Aux styleClass="Container">
          <Logo loaded={this.setAnimationHandler} logo={'take'}/>
          <Jumbotron loaded={this.setAnimationHandler}/>
        </Aux>
        <Phone loaded={this.setAnimationHandler}/>
      </header>
    );
  }
}

export default Header;