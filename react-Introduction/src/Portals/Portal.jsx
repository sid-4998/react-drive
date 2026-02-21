// A Portal is a react method included in the react-dom package

import { useState } from "react";
import Modal from "./Modal";
import { createPortal } from 'react-dom'

// Portal is a feature that allows an HTML element or a react components to be rendered
// outside the DOM heirarchy of its parent HTML or react component.

// They are useful in building components like modals, tooltips, dialogs,
// notifications, floating menus and dropdowns that need to break out 
// of their container's layout

// Syntax

// import { createPortal } from 'react-dom'

// createPortal(children, domNode);
// The first argument is any renderable react content like elements,
// strings or react fragments.
// The second argument is a DOM element where the portal is inserted
// or in other words where we want the first argument to be rendered in the DOM.

export default function Portal() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <h1>Model component using react portal</h1>
            <button onClick={() => setOpen(true)}>open</button>
            <Modal isOpen={open}>
                <p>This is a modal component</p>
                <button onClick={() => setOpen(false)}>close</button>
            </Modal>
        </>
    )
}

// Event Bubbling in portals

// Even though portals render content in different parts of the DOM tree
// events in the portal content still bubble up the react component tree
// as if the portal was not there. 

// For example:

// If an onClick event is fired in the Portal content, it bubbles 
// to its parent component or react element triggering onClick events there.

export function Counter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div onClick={() => setCount1(c => c+1)}
        style={{
            padding: '1rem',
            margin: '1rem',
            border: '0.2rem solid black',
        }}>
            <h2>The container's click count is: {count1}</h2>
            <h2>The floating button's click count is: {count2}</h2>
            <p>The floating button is rendered outside this box using portal</p>
            <PortalButton onClick={(event) => {
                event.stopPropagation(); // Comment this line to simulate event bubbling
                setCount2(c => c+1)
            }}>
                Floating button
            </PortalButton>
        </div>
    )
}

function PortalButton({ onClick, children }) {
    return createPortal(
        <button onClick={onClick}>{children}</button>,
        document.body
    )
}

// This example shows that event bubbling works through react's component heirarchy
// and not through DOM content heirarchy