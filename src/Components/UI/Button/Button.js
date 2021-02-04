import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button
            onClick={props.clicked}
            className={[classes.Button, props.btnType.map(cls => classes[cls]).join(' ')].join(' ')}
        >{props.children}</button>
    )
}


export default Button