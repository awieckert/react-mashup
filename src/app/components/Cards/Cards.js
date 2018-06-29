import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  render () {
    const cardsArray = this.props.firebaseCards;
    const cardsToPrint = cardsArray.map((item) => {
      return (
        <div className='col-sm-4'>
          <img className='img-responsive' src={item.imgUrl} alt='stupid required alt tag'/>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      );
    });

    return (
      <div className='col-sm-6 cardz-container'>
        {cardsToPrint}
      </div>
    );
  }
}

export default Cards;
