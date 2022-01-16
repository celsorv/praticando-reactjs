import React from 'react'

const ComponentA = (props) => {
    return (
        <span>
            <h1>Esse é o Componente A!</h1>
            @@@ {props.children} @@@
        </span>
    )
}

export default ComponentA
