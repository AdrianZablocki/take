import React, { Component } from 'react';

import './Buy.css';
import Aux from '../../hoc/Aux/Aux';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Icons from './Icons/Icons';

class Buy extends Component {
  state = {
    itemsContent: [
      {
        topBtn: 'Legacy',
        title: 'Go it solo',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae, gravida placerat lorem. Suspendisse ut urna a lorem sodales aliquam. Morbi quis enim nibh. Quisque scelerisque pharetra mauris et convallis.',
        bottomBtn: 'Buy now $9',
        id: 1
      },
      {
        topBtn: 'Most popular',
        title: 'Team Plan',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae, gravida placerat lorem. Suspendisse ut urna a lorem sodales aliquam. Morbi quis enim nibh. Quisque scelerisque pharetra mauris et convallis.',
        bottomBtn: 'Buy now $18',
        id: 2
      }
    ]
  }

  render () {
    const buyCard = this.state.itemsContent.map(item => {
      return  <Aux styleClass="Buy-card-wrapper" key={item.id}>
                <Button btnType="button" 
                        text={item.topBtn}
                        buttonClass="Buy-card-button__top" />
                <Title title={item.title}
                       titleClass="Title" />
                <Text text={item.text}
                      textClass="Text" />
                <Button btnType="button"
                        text={item.bottomBtn} />
                <Icons styleClass="Buy-osIcons"/>
              </Aux>
    })

    return (
      <Aux styleClass="Buy">
        <Aux styleClass="Container">
          {buyCard}
        </Aux>
      </Aux>
    );
  }
}

export default Buy;