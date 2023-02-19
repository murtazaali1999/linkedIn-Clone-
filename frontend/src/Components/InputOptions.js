import React from 'react'
import "./InputOptions.css"

const InputOptions = ({ Icon, title, color }) => {
    return (
        <div className='input-options'>
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions
