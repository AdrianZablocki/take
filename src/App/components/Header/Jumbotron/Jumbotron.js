import React, { Component } from 'react';

import './Jumbotron.css';
import Title from '../../Title/Title';
import Text from '../../Text/Text';

class Jumbotron extends Component {

  state = {
    content: {
      title: 'Picture perfect',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae...'
    }
  }
  
  render () {
    return (
      <div className="Jumbotron">
        <Title title={this.state.content.title} titleClass="Title"/>
        <Text text={this.state.content.text} textClass="Text"/>
      </div>
    );
  }
}

export default Jumbotron;