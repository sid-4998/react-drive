// Rendering UI components based on some condition is termed as conditional rendering

import { useState } from 'react';

function Goal() {
    const [isGoal, setGoal] = useState(true);
    const MissedGoal = () => {
        alert('You missed!');
    }

    const MadeGoal = () => {
        alert('Goal!');
    }

    const handleClick = (detect) => {
        if(detect) {
            MadeGoal();
            setGoal(false);
        } else {
            MissedGoal();
            setGoal(true);
        }
    }

    if(isGoal) {

        return (
            <button onClick={() => handleClick(true)}>Take the shot</button>
        )

    } else {

        return (
            <button onClick={() => handleClick(false)}>Take the shot</button>
        )

    } 
}

export default Goal;

// Notice that when changing the state, using the setGoal method, the Goal component 
// gets re-rendered everytime it is called. So we cannot directly change the state 
// in the functional component's body. Instead we can create an eventHandler or any 
// other function which triggered the state change and use it to set the new state.

/* if(isGoal) {
        setGoal(false); // This leads to re-rendering the Goal component
                        // and the button does not gets rendered
        return (
            <button onClick={MadeGoal}>Take the shot</button>
        )

    } 
    else {
        setGoal(true); // This also leads to re-rendering of the Goal component
                       // and the button does not gets rendered
        return (
            <button onClick={MissedGoal}>Take the shot</button>
        )

    } 
    The react gets stuck in an infinite loop due to the above code */

// props vs state

/** 1. Props are used to pass configuration, data and event handlers from a 
 * parent component to a child component, making them reusable whereas state
 * is used to store and manage dynamic data within the same component that changes
 * over time maybe due to user interactions, API responses etc 
*/

/** 2. Props are immutable(read-only), meaning a child component cannot modify
 * the props it recieves from the parent component whereas a state is mutable,
 * meaning it can be modified within the same component. 
 */

/** 3. A component re-renders if its parent re-renders with new props and
 * a component with a state along with its children re-renders everytime 
 * its state gets updated.
 */

/** 4. Props are like arguments which are passed to a function and the function
 * uses these values and cannot modify the values held by the caller whereas a state 
 * is like a local variable declared within a function which can be modified and 
 * accessed only by that function to track internal changes.
 */