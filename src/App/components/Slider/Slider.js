import React, { Component } from 'react';

import './Slider.css'
import Aux from '../../hoc/Aux/Aux';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Article_bg_01 from '../../../assets/images/bg_article_01.jpg';
import Article_bg_02 from '../../../assets/images/bg_article_02.jpg';

class Slider extends Component {
  state = {
    articlesTop: [
      {
        id: '1',
        title: 'Design quality',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in',
        btnText: 'Find Out more',
        style: {
          backgroundColor: '#f5989d'
        }
      },
      {
        id: '2',
        title: 'Built to last',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in',
        btnText: 'Find Out more',
        style: {
          backgroundColor: '#615f7d'
        }
      },
      {
        id: '3',
        title: 'Our clients',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in',
        btnText: 'Get insights',
        style: {
          backgroundImage: `url(${Article_bg_01})`
        }
      },
      {
        id: '4',
        title: 'How to shop great',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in',
        btnText: 'Find Out more',
        style: {
          backgroundColor: '#bd8cbf'
        }
      }
    ],
    articleBottomBig: {
      title: 'Sing up & see why',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in',
      btnText: 'Get Started Now',
      style: {
        backgroundImage: `url(${Article_bg_02})`
      }
    },
    articlesBottom: [
      {
        id: '1',
        title: 'Perfect pictures',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in',
        btnText: 'Find Out more',
        style: {
          backgroundColor: '#82ca9c'
        }
      },
      {
        id: '2',
        title: 'Start somethnig new',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est nibh, hendrerit in',
        btnText: 'Get Started Now',
        style: {
          backgroundImage: `url(${Article_bg_01})`
        }
      }
    ],
    coordinates: {
      x: null
    },
    positionerWidth: null,
    style: ['slider-positioner']
  }

  setArticleClickedHandler =  (event) => {
    let $parent = event.target.parentNode;
    $parent.classList.toggle('transform')
  }

  mouseCoordinateHandler = (event) => {   

    const $positioner = document.querySelector('.slider-positioner');
    const positionerWidth = $positioner.offsetWidth;
    let newStyle = [...this.state.style];
    const bounds = $positioner.getBoundingClientRect();

    this.setState({
      coordinates: {
        x: event.clientX - bounds.left
      },
      positionerWidth: positionerWidth
    });

    if((this.state.positionerWidth / 2) < this.state.coordinates.x) {
      if(newStyle.length === 1) {
        newStyle.push('slider-positioner-move');
        this.setState({style: newStyle})        
      }
    }
    if((this.state.positionerWidth / 2) > this.state.coordinates.x) {
      if(newStyle.length ===  2) {
        newStyle.splice(1,1);
        this.setState({style: newStyle})        
      }
    }
  }

  render () {
    const articlesTop = this.state.articlesTop.map(item => {
      return  <Aux 
                styleClass="article" 
                style={item.style} 
                key={item.id} >
                <div className="layer">Coming soon</div>
                <Title title={item.title} 
                      titleClass="Title" />
                <Text text={item.text} 
                      textClass="Text" />
                <Button 
                  text={item.btnText}
                  clicked={this.setArticleClickedHandler} />
              </Aux>
    });

    const articlesBottom = this.state.articlesBottom.map(item => {
      return  <Aux 
                styleClass="article" 
                style={item.style} 
                key={item.id} >
                <div className="layer">Coming soon</div>
                <Title title={item.title} 
                      titleClass="Title" />
                <Text text={item.text} 
                      textClass="Text" />
                <Button 
                  text={item.btnText}
                  clicked={this.setArticleClickedHandler} />
              </Aux>
    });

    return ( 
      <Aux styleClass="Container Slider">
        <Aux styleClass={this.state.style.join(' ')} move={this.mouseCoordinateHandler}>
          <Aux styleClass="top">
            {articlesTop}
          </Aux>
          <Aux styleClass="bottom">
            <div 
              style={this.state.articleBottomBig.style} 
              className="article article-big" >
              <div className="layer">Coming soon</div>
              <Title title={this.state.articleBottomBig.title} 
                      titleClass="Title" />
              <Text text={this.state.articleBottomBig.text} 
                    textClass="Text" />
              <Button 
                text={this.state.articleBottomBig.btnText}
                clicked={(event) => this.setArticleClickedHandler(event)} />
            </div>
            {articlesBottom}
          </Aux> 
        </Aux>  
      </Aux>
    );
  }
}

export default Slider;