import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.js';
import initializeFirebase from './components/firebaseRequests/initialize.js';
import getCards from './components/firebaseRequests/cards.js';

class App extends Component {
  state = {
    cards: [],
  }

  componentDidMount () {
    initializeFirebase();
    getCards().then((cardsArray) => {
      this.setState({cards: cardsArray});
    }).catch((err) => {
      console.error('Failed to get firebase Cards: ', err);
    });
  }

  render () {
    return (
      <div>
        <Cards firebaseCards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
