import React from 'react'

const buttonA = <button>Histórico dos Clientes</button>
const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true

/*
    Boa prática:
    Criando as constantes render, fica mais fácil de visualizar,
    entender, testar por partes e dar manutenção no código.
*/

const App = () => {

    const myStyle = {
        color: 'navy',
        border: '1px solid red'
    }

    const renderShowTitle = () => <h4>Histórico de Clientes</h4>

    const renderShowHistory = (
        <div>
            Clique no botão abaixo para visalizar o histórico dos clientes
            <br />
            {buttonA}
        </div>
    )

    const renderAddCustomer = () => (
        <div>
            Clique abaixo para cadastrar o cliente
            <br />
            {buttonB}
        </div>
    )

    const showCustomer = () => {
        if (!hasCustomer) return null

        return (
            <div>
                <h1>Nome do Cliente: Annelise</h1>
            </div>
        )
    }

    return (
        <div>
            <h1 style={myStyle}>ReactJS</h1>
            <h3 style={myStyle}>Bem-vindo à nossa aula</h3>

            { /* Condicional com && */}
            {hasCustomer && renderShowTitle}

            <hr />
            Valor da variável <span style={{backgroundColor: '#53a510'}}><b>hasCustomer</b></span>: 
            <span style={{color: 'red', paddingLeft: 5}}>{hasCustomer ? 'true' : 'false'}</span>
            <hr/>

            { /* Condicional com operador ternário */}
            {hasCustomer ? renderShowHistory : renderAddCustomer}

            { /* Condição tratada dentro de showCustomer() */ }
            {showCustomer()}
        </div>
    )

}

export default App
