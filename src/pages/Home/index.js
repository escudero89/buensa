import React, { Component } from 'react';

import './home.css';
import imgBuensa from './assets/buensa.jpg';

import UpcomingEvents from '../../components/UpcomingEvents';
import {
  Container,
  Header,
  Segment,
} from 'semantic-ui-react';

export default class Home extends Component {
  render () {
    return (
      <div>
        <Segment
          inverted
          className='background-cover'
          textAlign='center'
          style={{
            backgroundImage: imgBuensa,
            minHeight: 700
          }}
          vertical
        >
          <Container text style={{ marginTop: '12rem' }}>
            <Header
              as='h1'
              content='Buen Samaritano'
              inverted
              style={{ fontSize: '4rem', fontWeight: 'normal', marginBottom: 0, marginTop: '3rem' }}
            />
            <Header
              as='h2'
              content='Sé la luz que ilumina al mundo.'
              inverted
              style={{ fontSize: '1.7rem', fontWeight: 'normal' }}
            />
          </Container>
        </Segment>

        <Container style={{ margin: '2rem 0' }}>
          <UpcomingEvents />
        </Container>

      </div>
    )
  }
}