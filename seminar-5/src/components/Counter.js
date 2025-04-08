import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    };
    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    }

    return (
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={increment}>Up counter</button>
            <button onClick={decrement}>Down counter</button>
        </div>
    );
};

export default Counter;
