import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index.js'

class CounterButtons extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addCounter}>Add Counter</button>
        <button onClick={this.props.removeCounter}>Remove Counter</button>
      </div>
    )
  }
}

export default connect(null, actions)(CounterButtons)
