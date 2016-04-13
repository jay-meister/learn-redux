import React, { Component } from 'react';
import Counter from '../containers/Counter.js'
import MapCounters from '../containers/MapCounters.js'
import CounterButtons from '../containers/CounterButtons.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <MapCounters />
        <CounterButtons />
      </div>
    );
  }
}
