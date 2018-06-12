import React, { Component } from 'react';

import './Start.css';
import Aux from '../../hoc/Aux/Aux';
import Title from '../Title/Title';
import Text from '../Text/Text';;

class Start extends Component {
  state = {
    header: 'Start something new',
    content: {
      articleLeft: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae, gravida placerat lorem. Suspendisse ut urna a lorem sodales aliquam. Morbi quis enim nibh. Quisque scelerisque pharetra mauris.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae, gravida placerat lorem. Suspendisse ut urna a lorem sodales aliquam. Morbi quis enim nibh. Quisque scelerisque pharetra mauris et convallis. In sit amet elementum elit. Proin consequat tempus pharetra. In ex dolor.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae, gravida placerat lorem. Suspendisse ut urna a lorem sodales aliquam. Morbi quis enim nibh. Quisque scelerisque pharetra mauris.'
      ],
      articleRight: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae, gravida placerat lorem. Suspendisse.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae, gravida placerat lorem. Suspendisse ut urna a lorem sodales aliquam. Morbi quis enim nibh. Quisque scelerisque pharetra mauris.'
      ]
    },
    style: ['Container', 'Start']
  }

  render () {
    const articleLeft = this.state.content.articleLeft.map((item, index) => {
      return <Text text={item} key={index} textClass="Text"/>
    });
    
    const articleRight = this.state.content.articleRight.map((item, index) => {
      return <Text text={item} key={index} textClass="Text"/>
    });
    
    return (
      <Aux styleClass={this.props.styleClass}>
          <Title title={this.state.header} titleClass="Title"/>
          <div className="Article-wrapper">        
            <div>
              {articleLeft}
            </div>  
            <div>
              {articleRight}
            </div>
          </div>
      </Aux>
    );
  }
}

export default Start;