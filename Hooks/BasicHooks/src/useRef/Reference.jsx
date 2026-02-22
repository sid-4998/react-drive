// useRef hook provides a way to access and interact with 
// DOM elements directly or to persist mutable values across
// renders when they are updated, without causing a re-render

// The useRef hooks returns a single object called current and its value
// is specified as a parameter to the useRef hook

// When we provide a reference to a DOM element using the useRef hook, 
// we get access to all object properties associated with that DOM node in the
// current object of its reference.

// useRef hook also helps to keep track of the previous state.

// Showing the number of renders in a component

import { useRef, useState, useEffect } from 'react';

export default function RefComponent() {
    const count = useRef(0);
    const [value, setValue] = useState('');

    useEffect(() => {
        count.current = count.current + 1;
        console.log(count.current);
    })

    return (
        <>
            <input 
            type="text" 
            value={value} 
            onChange={(event) => setValue(event.target.value)}/>
        </>
    )
}

// Accessing DOM elements

const DOMelements = () => {
    const elementReference = useRef(null);

    const focusInput = () => {
        elementReference.current.focus();
        elementReference.current.value = 'Kya reh?'
    }

    return (
        <>
            <input 
            type="text" 
            ref={elementReference} 
            onClick={focusInput}/>
        </>
    )
}

// Tracking state changes
const Timer = () => {
    const interval = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        interval.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000)

        return () => clearInterval(interval.current);
    }, [])

    return (
        <>
            <h1>Timer</h1>
            <h2>Seconds: {count}</h2>
            <button onClick={() => clearInterval(interval.current)}>Stop</button>
        </>
    )
}

export { DOMelements, Timer }

