// The famous problem of prop-drilling

import ComponentD from "./ContextAPI/ComponentD";
import ComponentA from "./PropDrilling/ComponentA"

// Prop-drilling refers to passing props from a parent component to a 
// child component through intermediate components in the tree none of 
// which require that prop but they just serve as a pathway towards the 
// child component

// The problem arises when their are a large number of intermediate components
// To solve this and avoid passing the prop to each level of the component tree,
// Context API, Zustand and Redux Toolkit can be employed

// Hence with the help of context API the state or prop can be held by 
// the highest parent component and then passed to any level of the component 
// tree using the useContext Hook

const PropDrilling = () => {
    return (
        <ComponentA />
    )
}

// Context API is a feature that allows us to manage and share state 
// across the component tree without having to pass props down manually to each level

// It is useful in scenarios where we want to pass data and functions to 
// multiple components, especially when they are deeply nested.

// import createContext object from react-dom package
// Create an instance of createContext object

import { createContext } from "react";


// The instance below has two methods (Provider(To send Data) and Consumer(To receive data))
const DataContext = createContext();
const DataContext1 = createContext();

const Context = () => {
    const data = {
        name: 'Sid',
        age: 23
    }

    const data1 = {
        name: 'Sarthak',
        age: 20
    }

    return (
        <DataContext.Provider value={data}>
            <DataContext1.Provider value={data1}>
                <ComponentD />
            </DataContext1.Provider>
        </DataContext.Provider>
    )
}

// But when we want to pass different data, we'll have to create different contexts.

export { PropDrilling, DataContext, Context, DataContext1 };