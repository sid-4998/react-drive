import { useState, useEffect } from "react";

export default function BasicEffect() {
    const [count, setCount] = useState(0);
    const [calculatedValue, setCalculatedValue] = useState(0);

    useEffect(() => {
        setCalculatedValue(count*count);
    }, [count])


    return (
        <>
            <h1>Value of the count variable: {count}</h1>
            <h2>Result: {calculatedValue}</h2>
            <button onClick={() => setCount(count+1)}>Increase count</button>
        </>
    )
}