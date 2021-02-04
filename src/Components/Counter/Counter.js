import React from 'react'
import classes from './Counter.module.css'
import Button from './../UI/Button/Button'

const Counter = () => {
    return (
        <div className={classes.Counter}>
            <p>counter</p>
            <p>number</p>
            <Button btnType='success'>+</Button>
            <Button btnType='danger'>-</Button>
        </div>
    )
}


export default Counter
