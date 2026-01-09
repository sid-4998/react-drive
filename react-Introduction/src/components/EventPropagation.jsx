// Event propagation is process in which an event of a child jsx element
// or component is picked up by its parent.

// This propagation starts where the event first occured then moves up
// the element or componenet tree triggerring event handlers of the ancestor
// elements or components

// All events propagate in react except the onScroll event

const ElementEventPropagation = () => {

    return (
        // Here this div is the parent jsx element
        // And the two buttons are its children
        <div className="Toolbar" onClick={() => {
            alert('You initiated an event propagation');
        }}>
            <button onClick={() => alert('You Clicked button 1')}>
              button 1
            </button>
            <button onClick={() => alert('You Clicked button 2')}>
              button 2
            </button>
        </div>
    );
}

const ParentComponent = () => {
    return (
        <div onClick={() => alert('You again initiated an event propagation!')}>
            <Button onSmash = {() => alert('You smashed me!')}>
                smash
            </Button>
        </div>
    )
}

const Button = ({onSmash, children}) => {
    return (
        <button onClick={onSmash}>
            {children}
        </button>
    )
}



export { ElementEventPropagation, ParentComponent };