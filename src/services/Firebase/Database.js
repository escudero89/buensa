const firebase = require('firebase');

module.exports = function readFromDB () {
  const database = firebase.database();
  const schedule = database.ref('schedule');

  schedule.on('value', (snapshot) => {
      console.log('value', snapshot.toJSON());
  });
}
