import { useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(task.trim()) {
            setTodos([...todos, task.trim()]);
            setTask('');
        } else {
            return;
        }
    }

    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="todo" id="list" 
                placeholder='Your task' 
                value={task} onChange={handleChange}
                aria-label='Enter your task'/>
                <button type='submit'>Submit</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </> 
    )
}