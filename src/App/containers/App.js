import React, { Component } from 'react';

import './App.css';
import Header from '../components/Header/Header';
import Start from '../components/Start/Start';
import Details from '../components/Details/Details';
import Slider from '../components/Slider/Slider';
import More from '../components/More/More';
import Onboard from '../components/Onboard/Onboard';
import Buy from '../components/Buy/Buy';
import Footer from '../components/Footer/Footer';

class App extends Component {
  state = {
    onBoardClasses: ['Onboard'],
    detailsClasses: ['Container', 'Details'],
    startClasses: ['Container', 'Start']
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setOnScrollHandler );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setOnScrollHandler );
  }

  setOnScrollHandler = (event) => {
    const windowHeight = window.innerHeight + 80;
    const boundsStart = document.querySelector('.Start').getBoundingClientRect();
    const boundsDetails = document.querySelector('.Details').getBoundingClientRect();
    const boundsOnBoard = document.querySelector('.Onboard').getBoundingClientRect();
    
    
    let newStartClasses = [...this.state.startClasses];
    let newDetailsClasses = [...this.state.detailsClasses];
    let newOnBoardClasses = [...this.state.onBoardClasses];
    
    const topPosition = {
      startPosition: {
        top: boundsStart.top + boundsStart.height
      },
      detailsPosition: {
        top: boundsDetails.top + boundsDetails.height
      },
      onBoardPosition: {
        top: boundsOnBoard.top + boundsOnBoard.height
      },
    };
    
    if(window.innerWidth > 992) {
      //Start component animation
      if(windowHeight >= topPosition.startPosition.top && newStartClasses.length === 2) {
        newStartClasses.push('animation');
        this.setState({startClasses: newStartClasses});        
      }
      if(windowHeight < topPosition.startPosition.top && newStartClasses.length === 3) {
          newStartClasses.splice(2, 1);
          this.setState({startClasses: newStartClasses});        
      }
      //Details component animation
      if(windowHeight >= topPosition.detailsPosition.top && newDetailsClasses.length === 2) {
        newDetailsClasses.push('animation');
        this.setState({detailsClasses: newDetailsClasses});        
      } 
      if(windowHeight < topPosition.detailsPosition.top && newDetailsClasses.length === 3) {
        newDetailsClasses.splice(2, 1);
        this.setState({detailsClasses: newDetailsClasses});
      }
      //Onboard component animation
      if(windowHeight >= topPosition.onBoardPosition.top && newOnBoardClasses.length === 1) {
          newOnBoardClasses.push('animation');
          this.setState({onBoardClasses: newOnBoardClasses});        
      }
      if(windowHeight < topPosition.onBoardPosition.top && newOnBoardClasses.length === 2) {
          newOnBoardClasses.splice(1, 1);
          this.setState({onBoardClasses: newOnBoardClasses});        
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Start styleClass={this.state.startClasses.join(' ')} />
        <Slider />
        <Details styleClass={this.state.detailsClasses.join(' ')}/>
        <More />
        <Onboard styleClass={this.state.onBoardClasses.join(' ')}/>
        <Buy />
        <Footer />
      </div>
    );
  }
}

export default App;
