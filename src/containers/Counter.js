import React, { Component } from 'react'
import * as actions from '../actions/'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter[this.props.index]}</h1>
        <button
          onClick={() => {this.props.increase(this.props.index)}}
        >
          +
        </button>
        <button
          onClick={() => {this.props.decrease(this.props.index)}}
        >
          -
        </button>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ increase: actions.increase, decrease: actions.decrease}, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(Counter)
