// useReducer is a hook that is similar to useState, but it is designed 
// for more complex state objects and state transitions that involves 
// multiple sub-values. It allows us to manage state in a functional and
// immutable way

// Syntax
// const [currentState, dispatch] = useReducer(reducer, InitialState, Init)
// The useReducer hook accepts 3 arguments
// The reducer functions contains the custom state logic
// The InitialState argument is the initial value of state which is generally an object
// The Init argument is optional and is used to initialize the state

// The useReducer hook returns the current state and a dispatch method
// The reducer function describes how the current State should change based on actions.
// It takes the current state and an action as arguments and returns a new state
// The dispatch method is called to send actions to the reducer, which then updates the state

import { useReducer } from "react";


const initialScore = [
    {
        id: 1,
        name: 'sid',
        score: 0
    },
    {
        id: 2,
        name: 'prags',
        score: 0
    }]

const reducer = (state, action) => {
    switch(action.type) {
        case 'Increase':
            return state.map((player) => {
                if(player.id === action.id) {
                    return {...player, score: player.score+1}
                } else {
                    return player
                }
            });

        case 'Decrease':
            return state.map((player) => {
                if(player.id === action.id) {
                    return {...player, score: player.score-1}
                } else {
                    return player
                }
            });

        case 'Reset':
            return state.map((player) => {
                if(player.id === action.id) {
                    return {...player, score: 0}
                } else {
                    return player
                }
            });

        default:
            return state;
    }
}


const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialScore);

  return (
    <>
        {state.map((player) => (
            <div>
                <h2>{player.name}:{' '}{player.score}</h2>
                <button onClick={() => dispatch({type: 'Increase', id: player.id})}>+</button>
                <button onClick={() => dispatch({type: 'Decrease', id: player.id})}>-</button>
                <button onClick={() => dispatch({type: 'Reset', id: player.id})}>Reset</button>
            </div>
        ))}
    </>
  )
}

export default Reducer