import React from 'react'

const App = () => {

    const name = 'Annelise'
    
    const handleChange = (e) => {
        const { value } = e.target
        console.log(value)
    }
    
    const showEvent = (e) => {
        console.log('evento clicado')
        console.log(e)
        alert(name)
    }

    const Button = <button onClick={showEvent}>Mostrar Evento</button>
  
    return (
        <div>
            <h1>ReactJS</h1>
            <h3>Bem-vindo à nossa aula</h3>
            <br/>
            <input onChange={handleChange} />
            {Button}
        </div>
    )

}

export default App
