import axios from 'axios';
import constants from '../../../constants.js';

const getCards = () => {
  return new Promise ((resolve, reject) => {
    const cardsArray = [];
    axios(`${constants.firebaseConfig.databaseURL}/mashups.json`).then((data) => {
      if (data.data !== null) {
        Object.keys(data.data).forEach((key) => {
          data.data[key].id = key;
          cardsArray.push(data.data[key]);
        });
      }
      resolve(cardsArray);
    }).catch((err) => {
      reject(err);
    });
  });
};

export default getCards;
