// React Props
// Props stands for properties
// These are properties of the react component 
// They are like function arguments for Javascript 
// They are written as HTML attributes
// These properties are passed as an object to functional components

function SecondComponentWithProps(props) {
    return (
        <div>
            <h1>I have a {props.color} {props.brand} {props.model}</h1>
        </div>
    );
}

function SecondComponentWithArrayProps(props) {
    // Array Props destructuring
    const [f1, f2, f3] = props.basket;
    return (
        <div>
            <h2>These are some fruits in my basket!</h2>
            <ul>
                <li>{f1}</li>
                <li>{f2}</li>
                <li>{f3}</li>
            </ul>
        </div>
    );
}

function SecondComponentWithObjectProps(props) {
    //Object Props destructuring 
    const {firstname, lastname, age, position, company} = props.detail;
    // props.detail is an object
    // Hence the property names should be exactly the same
    return (
        <div>
            <p>My name is {firstname} {lastname}</p>
            <p>I am {age} years old</p>
            <p>I work as a {position} at {company}</p>
        </div>
    );
}

// This is how we can export multiple components using named exports
export { SecondComponentWithProps, SecondComponentWithArrayProps, SecondComponentWithObjectProps };
// Note that react functional components can have only one argument and that is the 
// props object. Props maintain individuality between parent and child components 
// as we can change the props passed to the child component in the parent component 
// without affecting how the child component deals with those props and similarly 
// we can alter the use of props in the child component without affecting the parent
// component and the original props

// We can also pass default values to a prop
// These values are used if no value for that prop is specified in the parent component
// or when value = undefined. But if value = null or 0, the default value is not used
