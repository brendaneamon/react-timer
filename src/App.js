import React, { Component } from 'react'
import './main.css'

class StopWatch extends Component {
  static defaultProps = {
    interval: 1000
  }

  state = {
    toggleButtonText: 'Start',
    counter: 0
  }

  incrementCounter = () => {
    this.setState(prev => ({ counter: prev.counter + 1 }))
  }

  resetTimer = () => {
    if (this.state.counter === 0) return null

    this.setState(prev => {
      if (prev.timer) {
        window.clearInterval(prev.timer)
      }
      return { timer: null, counter: 0, toggleButtonText: 'Start' }
    })
  }

  toggleTimer = () => {
    this.setState((prev) => {
      const { timer } = prev
      if (!timer) {
        return {
          timer: window.setInterval(this.incrementCounter, this.props.interval),
          toggleButtonText: 'Stop'
        }
      } else {
        window.clearInterval(prev.timer)
        return {
          timer: null,
          toggleButtonText: 'Start'
        }
      }
    })
  }

  render() {
    const { toggleButtonText, counter } = this.state
    return (
      <div>
        <div className="counter">
          Counter: {counter}
        </div>
        <div className="buttons">
          <button onClick={this.toggleTimer}>
            {toggleButtonText}
          </button>
          <button onClick={this.resetTimer}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

const App = () => (
  <StopWatch />
)

export default App
