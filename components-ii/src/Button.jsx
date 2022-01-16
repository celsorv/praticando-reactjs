import React from 'react'

const Button = (props) => {

    // Javascript - Desestruturação
    const { name, onClick } = props

    // seria o mesmo que...
    // -----------------------------
    // const name = props.name
    // const onClick = props.onClick

    return (
        <button onClick={onClick}>{name}</button>
    )
}

export default Button
