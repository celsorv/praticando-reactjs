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

    const renderCustomers = (customer, index) => {
        return (

            /* 
            Aviso React no console do navegador:
                Warning: Each child in a list should have a unique "key" prop.
            
            Solução: precisa incluir key única. Se tem id, melhor usá-lo, pois
            dependendo da lógica, index pode se repetir.
            */
            <div key={`customer-${customer.id}`}>
                <li>{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>

        )
    }

    const renderSkills = (skill, index) => {
        return (

            // como não tem id, tem que usar o index mesmo como key
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
