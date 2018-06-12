import React,  { Component } from 'react';

import './Footer.css';
import Aux from '../../hoc/Aux/Aux';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Input from './Input/Input';
import Button from '../Button/Button';

class Footer extends Component {
  state = {
    articleTop: {
      id: 1,
      title: 'Get in touch',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae, gravida placerat lorem. Suspendisse ut urna a lorem sodales aliquam. Morbi quis enim nibh. Quisque scelerisque'
    },
    articlesList: [
      {
        id: 1,
        title: 'Resources',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae'
      },
      {
        id: 2,
        title: 'Features',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae'
      },
      {
        id: 3,
        title: 'How To\'s',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in libero vitae'
      }
    ],
    inputContent: {
      title: 'Stay in touch',
      text: 'We don\'t send spam. Actualy, who are we kiding, we\'ll spam the shit out of you\'r inbox'
    }
  }
  
  render() {
    const articlesList = this.state.articlesList.map( item => {
      return  <Aux styleClass="footer-article-item" key={item.id}>
                <Title titleClass="Title" title={item.title}/>
                <Text textClass="Text" text={item.text}/>
              </Aux>
    })

    return (
      <Aux styleClass="Footer">
        <Aux styleClass="Container">
          <Aux styleClass="section-wrapper">
            <Aux styleClass="footer-article-wrapper">
              <Title titleClass="Title" title={this.state.articleTop.title}/>
              <Text textClass="Text" text={this.state.articleTop.text}/>
            </Aux>
            <Aux styleClass="footer-articles-wrapper">
              {articlesList}
            </Aux>
          </Aux>  
          <Aux styleClass="section-wrapper">
            <Title titleClass="Title" title={this.state.inputContent.title} />
            <Aux styleClass="input-wrapper">
              <Input type="input" id="mail"/>
              <Button btnType="submit" buttonClass="input-btn"/>
            </Aux>
            <Text textClass="Text text-input" text={this.state.inputContent.text}/>
          </Aux> 
        </Aux>
      </Aux>
    )
  }
}

export default Footer;