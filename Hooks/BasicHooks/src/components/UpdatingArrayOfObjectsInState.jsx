// Objects elements may seem to be inside an array but they are seperate objects
// which the array is pointing at.

// Even if we create a copy of the original array, mutating the element of the
// copy array also changes the original array because both of them are pointing
// to the same object.

// This is shown in the example below
// In this example, two state variables have the same initial state,
// but due to mutation in one state, the other state variable is also affected
// Due to this both the lists get changed on toggling any of the lists

import { useState } from 'react';

export function BuggyTodoLists() {
    const initialList = [
        {id : 1, task: 'Learn react hooks', done: false},
        {id : 2, task: 'Prepare for frontend interview', done: false},
        {id : 3, task: 'Apply to jobs and internships', done: false},
        {id : 4, task: 'Send follow up mails', done: false}
    ]

    const [todayList, setTodayList] = useState(initialList);
    const [tommorrowList, setTommorrowList] = useState(initialList);

    function handleTodayListToggle(taskId, status) {
        const newTodayList = [...todayList];
        const item = newTodayList.find(a => a.id === taskId);
        // Causes a bug by changing the original state variable
        item.done = status; 
        setTodayList(newTodayList);
    }

    function handleTommorrowListToggle(taskId, status) {
        const newTommorrowList = [...tommorrowList];
        const item = newTommorrowList.find(a => a.id === taskId);
        // Causes a bug by changing the original state variable
        item.done = status;
        setTommorrowList(newTommorrowList);
    }

    return (
        <>
            <h1>Today's tasks</h1>
            <List 
            tasks = {todayList}
            onToggle = {handleTodayListToggle}
            />
            <h1>Tommorrow's tasks</h1>
            <List 
            tasks = {tommorrowList}
            onToggle = {handleTommorrowListToggle}
            />
        </>
    )
}

function List({tasks, onToggle}) {
    return (
        <ul>
           {tasks.map(t => (
               <li key={t.id}>
                   <input 
                   type='checkbox'
                   checked={t.done}
                   onChange={(event) => {
                       onToggle(
                           t.id,
                           event.target.checked
                       );
                   }}/>
                   {t.task}
               </li>
           ))}
        </ul>
    )
}

// The above component causes a mutation in state
// Even if we create a copy of todayList as newTodayList
// The elements in the newTodayList point to the same task objects
// as in todayList
// Those task objects are also present in tommorrowList
// hence when we change the elements of any of the lists (newTodayList) 
// or (newTommorrowList) the original todayList and tommorrowList
// also get changed causing the bug 

// To solve this we can map through entire lists and substitute 
// the old item with the new updated item without causing a mutation


export function TodoLists() {
    const initialList = [
        {id : 1, task: 'Learn react hooks', done: false},
        {id : 2, task: 'Prepare for frontend interview', done: false},
        {id : 3, task: 'Apply to jobs and internships', done: false},
        {id : 4, task: 'Send follow up mails', done: false}
    ]

    const [todayList, setTodayList] = useState(initialList);
    const [tommorrowList, setTommorrowList] = useState(initialList);

    function handleTodayListToggle(taskId, status) {
        setTodayList(todayList.map(tl => {
            if(tl.id === taskId) {
                return {...tl, done: status}
            } else {
                return tl;
            }
        }))
    }

    function handleTommorrowListToggle(taskId, status) {
        setTommorrowList(tol => {
            if(tol.id === taskId) {
                return {...tol, done: status};
            } else {
                return tol;
            }
        })
    }

    return (
        <>
            <h1>Today's tasks</h1>
            <ItemList 
            tasks = {todayList}
            onToggle = {handleTodayListToggle}
            />
            <h1>Tommorrow's tasks</h1>
            <ItemList 
            tasks = {tommorrowList}
            onToggle = {handleTommorrowListToggle}
            />
        </>
    )
}

function ItemList({tasks, onToggle}) {
    return (
        <ul>
           {tasks.map(t => (
               <li key={t.id}>
                   <input 
                   type='checkbox'
                   checked={t.done}
                   onChange={(event) => {
                       onToggle(
                           t.id,
                           event.target.checked
                       );
                   }}/>
                   {t.task}
               </li>
           ))}
        </ul>
    )
}

// We can also use Immer for handling deeply nested objects and array of objects
// We can use the special draft object provided by Immer to use mutating operations
// on it. Behind the scenes Immer constructs a new state from scratch according
// to the changes made in the draft object.
// This makes event handlers consise without ever causing a mutation in the state