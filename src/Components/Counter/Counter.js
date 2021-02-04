import React, { useState } from 'react'
import classes from './Counter.module.css'
import Button from './../UI/Button/Button'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }
    const decrease = () => {
        setCounter(counter - 1)
    }

    return (
        <div className={classes.Counter}>
            {/* <h1>counter</h1> */}
            <div className={classes.CounterElements}>
                <Button btnType={['danger', 'left']} clicked={decrease}>-</Button>
                <p className={classes.Number}>{counter}</p>
                <Button btnType={['success', 'right']} clicked={increase}>+</Button>
            </div>
        </div>
    )
}


export default Counter
