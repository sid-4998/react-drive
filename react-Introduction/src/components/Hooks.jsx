// Hooks allow react functional components to have access to state and 
// other react features without using classes.
// 3 rules to keep in mind while defining Hooks
// * Hooks can only be used inside react functional components and not class components
// * Hooks can only be called at the top of the react functional component
// * Hooks cannot be used conditionally

// State: A component's memory
// Components often need to change what's on the screen as a result of an interaction
// In order to change the UI, the component should be able to remember the new updates
// This component specific memory is called state

import { useState } from 'react';

export default function Values() {
    let index = 0;

    function handleClick() {
        index++;
    }
    return (
        <>
            <div>{index}</div>
            <button onClick = {handleClick}>+</button>
        </>
    )
}

// The above function constantly keeps the value of index as 0
// even if the + button is clicked and the handleClick event handler is
// updating the local variable index.

// 2 things prevent this update
// Local variables do not persist between renders: When react renders this component,
// a second time, it does it from scratch. It does not consider any changes made to the
// local variables

// Changes to the local variables do not trigger re-renders: React does not realize it
// needs to render the component again with new data.

// In order to render a component with new data,
// The component must retain the data between renders
// A re-render must be triggered with new data

// The useState hook provides these 2 features in react.
// A state variable to retain the data between renders
// A state setter function to update the data and trigger re-render with new data

// Hooks are special functions which are only available when react is rendering something
// When we call useState, we are telling react to remember something in that component

// Everytime a component renders, the useState hook return an array with 2 values
// 1. The state varibale with current value or initial value specified in the
// useState as an argument(If the component is rendering for the first time.)
// 2. A state setter function which updates the current value of the state 
// variable and triggers a re-render of the entire component

export function UpdateValues() {
    // Hook is declared at the top of the react functional component
    const [index, setIndex] = useState(0); // array destructuring

    function handleClick() {
        setIndex(index+1);
    }
    return (
        <>
            <div>{index}</div>
            <button onClick = {handleClick}>update</button>
        </>
    )
}

// Updating objects in state

// We can store any kind of value in state.
// So far we have stored numbers, strings and booleans which are immutable or read-only
// We can only trigger a re-render for replacing the current value of state to a new value

// When it comes to storing objects in state, we can change the properties and methods
// of that object, making it mutable. But in practice, we consider objects as immutable
// or read-only and only replace it with a copy without changing the original object

export function MovePointer() {
    const [position, setPosition] = useState({x : 0, y : 0});

    return (
        <div 
        onPointerMove={(event) => {
            setPosition({
                x : event.clientX, // Create a new object and update the position state variable
                y: event.clientY
            })
        }} 
        style={{
            position: 'relative',
            width: '100vw',
            height: '100vh'
        }}>
            <div 
            style={{
                position: 'absolute',
                transform: `translate(${position.x}px, ${position.y}px)`,
                borderRadius: '50%',
                backgroundColor: 'red',
                width: 20,
                height: 20,
                left: -10,
                top: 10,
            }}>
            </div>
        </div>
    )
}

// Copying objects with spread syntax

// Often we need to include existing data in a object
// along with an addition or updation to it

export function Form() {
    const [person, setPerson] = useState({
        firstname: 'Siddhant',
        lastname: 'Jha',
        email: 'siddhantjha34@gmail.com',
        location: {
            city: 'Jamshedpur',
            state: 'Jharkhand'
        }
    });

    return (
        <>
            <label>
                First name:
                <input type='text'
                placeholder='Enter your first name'
                value={person.firstname}
                aria-label='Your first name'
                onChange={(event) => {
                    setPerson({
                        ...person,
                        firstname: event.target.value
                    });
                }}/>
            </label>
            <label>
                Last name:
                <input type='text'
                placeholder='Enter your last name'
                value={person.lastname}
                aria-label='Your last name'
                onChange={(event) => {
                    setPerson({
                        ...person,
                        lastname: event.target.value
                    });
                }}/>
            </label>
            <label>
                Email:
                <input type='text'
                placeholder='Enter your email'
                value={person.email}
                aria-label='Your email'
                onChange={(event) => {
                    setPerson({
                        ...person,
                        email: event.target.value
                    });
                }}/>
            </label>
            <label>
                City:
                <input type='text'
                placeholder='Enter your city'
                value={person.location.city}
                aria-label='Your city'
                // Using spread syntax to update nested objects.
                // There is no such thing as nested objects
                // The person object is pointed at the location object
                onChange={(event) => {
                    setPerson({
                        ...person, // Spread person and update location
                        location: {
                            ...location, // Spread location and update city
                            city: event.target.value
                        }
                    });
                }}/>
            </label>
            <p>
                {person.firstname}{' '}{person.lastname}{' '}({person.email})
            </p>
        </>
    )
}
// When dealing with deeply nested states, we might consider using Immer.
// It helps in flattening the nested state.
// With this we can use the mutating syntax and Immer handles creating a copy 
// of the nested state for us.
// run npm install use-immer
// replace the useState import with the following
// import { useImmer } from 'use-immer';

// Updating arrays in state without mutation

// Just like objects, arrays are also mutable in javaSript
// But when we store them in state, we should consider them as immutable
// As in react the state should always be immutable.

// There are some methods in array which mutates it.
// For adding at beginning or end: push, unshift (Avoid these) and concat, [...arr] (Use these)
// For removing or inserting: pop, shift, splice (Avoid these) and filter, slice (Use these)
// For replacing or transforming: splice, arr[i] = (Avoid these) and map (Use these)
// For sorting: reverse, sort (Avoid these) and copy the array first

// The second argumemt of the map callback is always the index of the array element

// Inserting at a specific position in the array in state without mutation

// Inserting at index 2
export function ArtList() {
    const initialList = [
        {id: 1, name: 'Siddhant'},
        {id: 2, name: 'Sarthak'},
        {id: 3, name: 'Seema'},
        {id: 4, name: 'Shailendra'}
    ]

    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialList);

    function handleClick() {
        const newList = [
            ...artists.slice(0,2),
            {id: Math.max(...artists.map(artist => artist.id)) + 1, name: name},
            ...artists.slice(2)
        ];
        setArtists(newList);
        setName('');
    }
    
    return (
        <>
            <input type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
            <button onClick={handleClick}>Insert</button>
            <ul>
                {artists.map(artist => {
                    <li key={artist.id}>{artist.name}</li>
                })}
            </ul>
        </>
    )
}