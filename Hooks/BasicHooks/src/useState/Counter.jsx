import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [randomNumber, setRandomNumber] = useState(() => {
        const initial = 10;
        return initial;
    })

    const generateRandomNumber = () => {
        const number = Math.floor(Math.random() * 15);
        setRandomNumber(number);
    }

    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Increase</button>
            <p>Random Number: {randomNumber}</p>
            <button onClick={generateRandomNumber}>Generate</button>
        </>
    )
}