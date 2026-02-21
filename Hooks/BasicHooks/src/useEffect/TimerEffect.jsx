import { useEffect, useState } from 'react'

export default function TimerEffect() {
    const [second, setSecond] = useState(0);
    const [value, setValue] = useState(0);

    // The below code creates cascading renders
    // In the initial render the useEffect runs and setSecond updates the
    // second value and triggers a re-render
    // Since the second value is updated, the useEffect again runs and
    // again setSecond updates the second value and triggers a re-render and so on.
    useEffect(() => {
        let timer = setTimeout(() => {
            setSecond(second+1);
        }, 1000)
        return () => clearTimeout(timer);
    }, [second])

    // Here since the dependency array is empty, this useEffect runs only once
    // on initial render or when the component mounts
    useEffect(() => {
        let timer = setTimeout(() => {
            setValue(value+1);
        }, 1000)
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <h1>Seconds: {second}</h1>
            <h1>Value: {value}</h1>
        </>
        
    )
}