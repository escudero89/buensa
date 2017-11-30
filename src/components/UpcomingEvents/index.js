import React from 'react';
import dateFormat from 'dateformat';

import Database from '../../services/Firebase/Database';

dateFormat.i18n = {
  dayNames: [
    'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb',
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
  ],
  monthNames: [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic',
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octobre', 'Noviembre', 'Diciembre'
  ],
  timeNames: [
    'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
  ]
};


const Event = (props) => {
  const datetime = dateFormat(new Date(props.datetime));
  return (
    <li>
      <a href="#">
        <h3 className="event-title">{props.name}</h3>
        <span className="event-meta">
          <span><i className="fa fa-calendar"></i>{datetime}</span>
          <span><i className="fa fa-map-marker"></i>{props.place}</span>
        </span>
      </a>
    </li>
  );
}

class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const db = (new Database()).instance();
    db.onSchedule(function (schedule) {
      this.setState(schedule);
    }.bind(this));
  }

  render() {
    const events = this.state;
    console.log()
    return (
      <div>
        <h2 className="section-title">Upcoming events</h2>
        <ul className="event-list">
          {Object.keys(events).map((key) => {
            const event = events[key];
            return <Event key={key} {...event} />;
          })}
        </ul>
      </div>
    )
  }
}

export default UpcomingEvents;