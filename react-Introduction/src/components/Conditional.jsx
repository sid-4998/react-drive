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