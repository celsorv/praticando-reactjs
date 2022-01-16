import React from "react"
import ReactDOM from "react-dom"
import HelloWorldA from './HelloWorldA'
import HelloWorldB from './HelloWorldB'
import "./styles.css"

const App = () => {
  return (
    <div>
      <HelloWorldA color='red' />
      <HelloWorldB color='blue' />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
