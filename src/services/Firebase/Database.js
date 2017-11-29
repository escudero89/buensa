const firebase = require('firebase');
const database = firebase.database();

module.exports = function readFromDB () {
  const schedule = database.ref('schedule');

  schedule.on('value', (snapshot) => {
      console.log('value', snapshot.toJSON());
  });
}
