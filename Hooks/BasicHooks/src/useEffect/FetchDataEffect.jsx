import { useState, useEffect } from "react";

export default function FetchDataEffect() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://dummyjson.com/quotes');
            const data = await response.json();
            setData(data.quotes);
        }
        getData();
    }, [])

    return (
        <ul>
            {data.map((q) => (
                <section key={q.id}>
                    <li>Quote: {q.quote}</li>
                    <li>Author: {q.author}</li>
                </section>
            ))}
        </ul>
    )
}