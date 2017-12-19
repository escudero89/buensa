import firebase from 'firebase';

let singleton = null;

class Database {
  singleton = null
  schedule = null

  callbacks = {
    schedule: []
  }

  constructor() {
    if (singleton != null) {
      return singleton;
    }

    const main = firebase.database();
    const schedule = main.ref('schedule');

    schedule.on('value', function (snapshot) {
      this.schedule = this.parseSchedule(snapshot.toJSON());
      this.trigger('schedule');
    }.bind(this));

    singleton = this;
  }

  instance() {
    return singleton;
  }

  parseSchedule(schedule) {
    const parsed = {};
    const today = new Date();

    Object.keys(schedule).forEach((idx) => {
      const element = schedule[idx];
      element.datetime = new Date(element.datetime);

      // Avoid adding old elements
      if (element.datetime < today) { return; }

      parsed[idx] = element;
    });

    return parsed;
  }

  trigger(key) {
    switch (key) {
    case 'schedule':
      this.callbacks.schedule.forEach((cb) => { cb(this.schedule); });
      break;
    default: // do nothing
    }
  }

  onSchedule(cb) {
    if (this.schedule) {
      cb(this.schedule);
    } else {
      this.callbacks.schedule.push(cb);
    }
  }

}

export default Database;
