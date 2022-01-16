import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

class App extends React.Component {

   constructor(props) {
      console.log('constructor called')

      super(props)

      this.state = {
         clock: 1000,
         copo: 'água'
      }

   }

   alterarCopo = () => {
      this.setState({
         copo: 'refrigerante'
      })
   }

   render() {
      console.log('render called')

      const { clock, copo } = this.state

      return (
         <div>
            <h1>{clock}</h1>
            <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
         </div>
      )

   }

   // ----------------------------------------------
   // Montando
   // ----------------------------------------------

   componentDidMount() {
      console.log('componentDidMount called')

      window.setTimeout(() => {

         this.setState({
            copo: 'suco'
         })

      }, 5000)

   }


   // ----------------------------------------------
   // Atualizando
   // ----------------------------------------------

   static getDerivedStateFromProps() {
      console.log('getDerivedStateFromProps called')
      return null
   }

   shouldComponentUpdate() {
      console.log('shouldComponentUpdate called')
      return true
   }

   getSnapshotBeforeUpate() {
      console.log('getSnapshotBeforeUpate called')
   }

   componentDidUpdate() {
      console.log('componentDidUpdate called')
   }


   // ----------------------------------------------
   // Desmontando
   // ----------------------------------------------

   componentWillUnmount() {
      console.log('componentWillUnmount called');
   }


   // ----------------------------------------------
   // Chamado quando existir um erro durante a renderização
   // ----------------------------------------------

   componentDidCatch() {
      console.log('componentDidCatch called');
   }

   static getDerivedStateFromError() {
      console.log('getDerivedStateFromError called');
   }

}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
