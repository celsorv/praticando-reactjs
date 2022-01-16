import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const element = <h1>Oi</h1>
const element2 = <h1>Olá</h1>

function App() {
  return <span>{element}{element2}</span>
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
