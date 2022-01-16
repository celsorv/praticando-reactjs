import React from 'react'

const listCustomer = [
    {
        id: 1,
        name: 'Annelise',
        skills: ['React', 'Node', 'CSS', 'Webpack']
    },
    {
        id: 2,
        name: 'Emmanuely',
        skills: ['HTML', 'React Native', 'Go', 'JS']
    },
    {
        id: 3,
        name: 'Ingrid',
        skills: ['Java', 'Spring', 'Python']
    },
    {
        id: 4,
        name: 'Jasmine',
        skills: ['Reason']
    }
]

const App = () => {

    const handleClick = (e, id) => {
        alert(`deletar cliente id: ${id}`)
    }

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name}  <button onClick={(e) => handleClick(e, customer.id)}>Deletar</button></li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div key={`skill-${index}`} style={{paddingLeft: '30px'}}>
                <li>{skill}</li>
            </div>
        )
    }

    return (
        <div>
            <h1>ReactJS</h1>
            <h3>Bem-vindo à nossa aula</h3>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    )

}

export default App
