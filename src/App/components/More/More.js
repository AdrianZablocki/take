import React, { Component } from 'react';

import './More.css';
import Aux from '../../hoc/Aux/Aux';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Background from '../../../assets/images/bg_section.jpg';

class More extends Component {
  state = {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae, gravida placerat lorem. Suspendisse ut urna a lorem sodales aliquam. Morbi quis enim nibh. Quisque scelerisque pharetra mauris et convallis.',
    title: 'More power',
    subTitle: 'behind every pixel',
    style: {
      backgroundImage: `url(${Background})`
    }
  }

  render () {
 
    return (
      <div className="More" style={this.state.style} >
        <Aux styleClass="Container">
            <Title title={this.state.title} titleClass="Title" />
            <Title title={this.state.subTitle} titleClass="Title" />
            <Text text={this.state.content} textClass="Text" />
        </Aux>
      </div>
    );
  }
}

export default More;