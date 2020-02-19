import React, { useState, useEffect } from 'react'
import './main.css'

const StopWatch = ({ interval }) => {
  const [counter, setCounter] = useState(0)
  const [timerActive, setTimerActive] = useState(false)

  const resetTimer = () => {
    if (counter === 0) return

    setTimerActive(false)
    setCounter(0)
  }

  useEffect(() => {
    let timer = null
    if (timerActive) {
      timer = window.setInterval(() => {
        setCounter(counter + 1)
      }, interval)
    } else if (!timerActive && counter !== 0) {
      window.clearInterval(timer)
    }

    return () => window.clearInterval(timer)
  }, [timerActive, counter])

  return (
    <>
      <div className="counter">
        Counter: {counter}
      </div>
      <div className="buttons">
        <button onClick={() => setTimerActive(!timerActive)}>
          {timerActive ? 'Stop' : 'Start'}
        </button>
        <button onClick={resetTimer}>
          Reset
        </button>
      </div>
    </>
  )
}

StopWatch.defaultProps = {
  interval: 1000
}

const App = () => (
  <StopWatch />
)

export default App
