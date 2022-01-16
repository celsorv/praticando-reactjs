import React from "react"
import ReactDOM from "react-dom"
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import "./styles.css"

const soma = (a, b) => {
    alert(a + b)
}

const App = () => {
    return (
        <div className="App">
            Hello World!<br/><br/>
            <Button onClick={() => soma(10, 20)} name="Annelise" />
            <br/><br/>
            <ComponentA>
                <ComponentB>
                    <Button onClick={() => soma(40, 20)} name="Giovana" />
                </ComponentB>
            </ComponentA>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
