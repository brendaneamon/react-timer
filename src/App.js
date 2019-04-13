import React, { Component } from 'react'
import './main.css'
class StopWatch extends Component {
  static defaultProps = {
    buttons: {
      start: { action: 'toggleTimer', label: 'start' },
      stop: { action: 'toggleTimer', label: 'stop' },
      reset: { action: 'resetTimer', label: 'reset' }
    }
  }

  state = {
    counter: 0
  }

  render() {
    const { buttons } = this.props
    const { counter } = this.state
    return (
      <div>
        <div>
          Counter: {counter}
        </div>
        <div className="buttons">
          {Object.keys(buttons).map(btnKey => (
            <button key={btnKey}>
              {btnKey}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

const App = () => (
  <StopWatch />
)

export default App
