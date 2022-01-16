import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

// Assim
// ---------------------------------------------------------------
// function App() {
//
//   return
//       <div className="classe-css">
//          Hello World
//       </div>
//
// }
// ---------------------------------------------------------------


// Ou assim
// ---------------------------------------------------------------
// const App = () => {
//
//   return
//       <div className="classe-css">
//          Hello World
//       </div>
//
// }
// ---------------------------------------------------------------


// Ou Assim
// ---------------------------------------------------------------
// const App = () => <div className="classe-css">Hello World</div>
// ---------------------------------------------------------------

// Ou também sem a classe CSS
// ---------------------------------------------------------------
const App = () => <div>Hello World</div>



const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
