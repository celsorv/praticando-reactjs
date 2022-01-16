import React from 'react'
import mock from './mock'
import Button from './components/Button'

const App = () => {

    const handleClick = (id) => {
        alert(`deletar cliente id: ${id}`)
    }

    const renderCustomers = (customer, index) => (
        <div key={`customer-${customer.id}`}>
            <li>
                <span style={{ paddingRight: '10px' }}>{customer.name}</span>
                <Button onClick={() => handleClick(customer.id)}>
                    Deletar cliente {customer.id}
                </Button>
            </li>
            {customer.skills.map(renderSkills)}
        </div>
    )

    const renderSkills = (skill, index) => (
        <div key={`skill-${index}`} style={{ paddingLeft: '30px' }}>
            <li>{skill}</li>
        </div>
    )

    return (
        <div>
            <h1>ReactJS</h1>
            <h3>Bem-vindo à nossa aula</h3>
            <div>
                <ul>
                    {mock.map(renderCustomers)}
                </ul>
            </div>
        </div>
    )

}

export default App
