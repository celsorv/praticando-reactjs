import React from 'react'

// Modo componente funcional (tendência de uso atualmente)

const HelloWorldA = (props) => {
    return (
        <div
            style={{ color: props.color || 'black' }} 
            className="HelloWorld"
        >
            Hello, World!
        </div>
    )
}

export default HelloWorldA

//
// Obs: props.color OR 'black'
//
// se props.color undefined, assume black
// -------------------------------------------
// color: props.color || 'black'
// -------------------------------------------
//