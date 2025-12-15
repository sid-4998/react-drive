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

// This is how we can export multiple components 
export { SecondComponentWithProps, SecondComponentWithArrayProps, SecondComponentWithObjectProps };