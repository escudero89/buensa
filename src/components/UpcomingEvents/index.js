import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import colorHash from 'color-hash';
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

const Place = (props) => {
  const className = 'ui label tiny horizontal';
  if (props.place.indexOf('http') !== -1) {
    return (
      <a href={props.place} className={`${className } orange`} target='_blank'>
        <i className="marker icon"></i>{props.place}
      </a>
    );
  }

  return (
    <div className={`${className } grey`}>
      <i className="marker icon"></i>{props.place || 'A definir'}
    </div>
  );
};


const Event = (props) => {
  const datetime = dateFormat(props.datetime, 'dddd dd mmmm yyyy | HH:MM');
  const bg = (new colorHash()).hex(props.name).substr(1);
  const mayusc = props.name.split(/\s/).map((word) => word.substr(0, 1)).join('');

  return (
    <Item>
      <Item.Image
        size='tiny'
        src={`http://via.placeholder.com/100/${bg}/ffffff?text=${mayusc}`}
      />
      <Item.Content>
        <Item.Header as='a'>{props.name}</Item.Header>
        <Item.Meta>
          <span>{datetime}</span>
        </Item.Meta>
        <Item.Description>{props.description}</Item.Description>
        <Item.Extra>
          <Place place={props.place} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default class UpcomingEvents extends Component {
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
    return (
      <Item.Group divided>
        {Object.keys(events).map((key) => {
          const event = events[key];
          return <Event key={key} {...event} />;
        })}
      </Item.Group>
    );
  }
}