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
        <button onClick={e => {
            e.stopPropagation();// Comment this line to simulate event propagation
            onSmash();
        }}>
            {children}
        </button>
    )
}
// Note that each react event as one and only object called the event object.
// It is denoted by e.
// Now when we click on the button, 
// React calls the triggers the onClick event and its handlers
// then calls the e.stopPropagation() method which prevents 
// any event bubbling to its parent component.
// And then the handlers calls the onSmash handler function passed 
// as a prop to the Button component by the ParentComponent.

// With this the onClick event of the ParentComponent does not gets triggered
// on triggering the onClick event of the onSmash event of the Button component.


export { ElementEventPropagation, ParentComponent };