import React from 'react'

const ComponentB = (props) => {
    return (
        <div>
            <h2>Esse é o Componente B!</h2>
            <div>[ {props.children} ]</div>
        </div>
    )
}

export default ComponentB
