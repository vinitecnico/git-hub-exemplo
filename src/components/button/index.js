import React from 'react'
import './styles.scss'

function Button({ type, variant, onClick, children, ...props}) {
    return (
        <button className={`btn btn-${variant}`} onClick={onClick} type={type}>{children}</button>
    )
}

export default Button