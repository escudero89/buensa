const firebase = require('firebase');

const readFromDB = require('./Database');
const config = require('../../config');

module.exports = () => {
  firebase.initializeApp(config);
  readFromDB();
};
