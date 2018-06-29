import firebase from 'firebase';
import constants from '../../../constants';

const initializeFirebase = () => {
  return firebase.initializeApp(constants.firebaseConfig);
};

export default initializeFirebase;
