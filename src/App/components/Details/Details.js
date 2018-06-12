import React, { Component } from 'react';

import './Details.css';
import Aux from '../../hoc/Aux/Aux';
import Title from '../Title/Title';
import Text from '../Text/Text';

class Details extends Component {
  state ={
    title: 'A look at the ideas',
    content: [
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae, gravida placerat lorem. Suspendisse ut urna a lorem sodales aliquam. Morbi quis enim nibh. Quisque scelerisque pharetra mauris et convallis.',
        subTitle: 'Web based',
        id: 1        
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae, gravida placerat lorem. Suspendisse ut urna a lorem sodales aliquam. Morbi quis enim nibh. Quisque scelerisque pharetra mauris et convallis.',
        subTitle: 'Web based',
        id: 2        
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae, gravida placerat lorem. Suspendisse ut urna a lorem sodales aliquam. Morbi quis enim nibh. Quisque scelerisque pharetra mauris et convallis.',
        subTitle: 'Web based',
        id: 3       
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae, gravida placerat lorem. Suspendisse ut urna a lorem sodales aliquam. Morbi quis enim nibh. Quisque scelerisque pharetra mauris et convallis.',
        subTitle: 'Web based',
        id: 4        
      }
    ],
  }

  render () {
    const articles = this.state.content.map((item, index) => {
      return  <div className="article-details" key={index}>
                <Title title={item.subTitle} titleClass="Title Title-details"/>
                <Text text={item.content} textClass="Text"/>
              </div>
    })
 
    return (
      <Aux styleClass={this.props.styleClass}>
        <Title title={this.state.title} titleClass="Title"/>
        <div className="Article-wrapper">
          {articles}
        </div>
      </Aux>
    );
  }
}

export default Details;