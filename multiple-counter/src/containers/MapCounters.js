import React from 'react'
import Counter from './Counter.js'
import { connect } from 'react-redux'

class MapCounters extends React.Component {
  render () {
    return (
      <ul>
        {this.props.counters.map((counter, index) => {
          return (
            <li key={index}>
              <Counter index={index}/>
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counters: state.counter
  }
}

export default connect(mapStateToProps)(MapCounters)
