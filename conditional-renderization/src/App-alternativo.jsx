import React from 'react'

const buttonA = <button>Histórico dos Clientes</button>
const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true

const App = () => {
    return (
        <div>
            <h1>ReactJS</h1>
            <h3>Bem-vindo à nossa aula</h3>

            { /* Condicional com && */ }
            {hasCustomer && (
                <h4>Histórico de Clientes</h4>
            )}

            <hr />

            { /* Condicional com operador ternário */ }
            {hasCustomer ? (
                <div>
                    Clique no botão abaixo para visalizar o histórico dos clientes
                    <br />
                    {buttonA}
                </div>
            ) : (
                <div>
                    Clique abaixo para cadastrar o cliente
                    <br />
                    {buttonB}
                </div>
            )}

        </div>
    )
}

export default App
