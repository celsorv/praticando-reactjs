import React from 'react'

// Modo baseado em classe

class HelloWorldB extends React.Component {
    render() {
        return (
            <div
                style={{ color: this.props.color || 'black' }} 
                className="HelloWorld"
            >
                Hello, World!
            </div>
        )
    }
}

export default HelloWorldB
