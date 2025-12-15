import ReactDOM from 'react-dom/client';

// react-dom is a module and client is a sub-module inside react-dom

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<h1>Fuck this shit!</h1>);

// Step 1: npm create vite@latest
// Step 2: Name your project
// Step 3: Name your package.json file
// Step 4: Choose a framework 
// Step 5: Choose the preferred language of framework


// React is a javascript frontend library used for building user interfaces
// React is used for building single page applications
// React allows us to create reusable UI components
// React was developed by a Facebook software engineer Jordan Walke
// React creates a virtual DOM instead of manipulating the browser's DOM

// The ReactDOM package
// This is a core react package that acts as a bridge between react UI components
// and Browser's DOM. It helps in synchronizing the Virtual DOM created by react 
// with the browser's DOM for optimal performance.
// It provides methods like createRoot().render() to efficiently mount, update 
// and manage the rendering of your application's UI on the web page.

// A container of all containers
// React needs a container to render the UI components on the web page
// For this it uses a div in the index.html file with an id 'root'
// This div stores all UI components

// The createRoot() method
// This method is used to create a root node of the react application
// It takes the HTML element as the argument which is supposed to be 
// the container of all UI components.

// The render() method
// This method is used to display the HTML content on the web page

// JSX
// JSX stands for Javascript XML
// JSX helps us to write HTML in react
// JSX allows us to place HTML elements in DOM 
// without using createElement() and appendChild() methods
// JSX converts HTML tags into react elements

const element = <h1>Hello, React!</h1>;
root.render(element);

// In case of multiple HTML elements, wrap them inside parenthesis

const newElement = (
  <div>
    <h1>Hello, React!</h1>
    <h1>I am learning JSX</h1>
  </div>
)


// The HTML content should always be wrapped inside one top level element
// This is done to ensure proper rendering of the HTML content as React components
// If this step is omitted JSX will throw an error
// Alternatively we can also use a react fragment to wrap multiple HTML lines
// A react fragment is nothing but HTML code enclosed in <></>

root.render(newElement);

// Behind the scenes of JSX converting a HTML tag into a react element
import { createElement } from 'react';
const heading = createElement('h1', null, 'Hello, World!');
console.log(heading);
// This createElement() react method is quite similar to the Javascript
// createElement() method. The only difference is in the syntax. 
root.render(heading);

// Because of the complexity of creating a new react element using the
// createElement() method, software engineers at meta developed JSX
// Suppose if we want to create multiple such react elements and they
// might be nested ones. Then we will have to use createElement() method
// multiple times thereby increasing the complexity and lines of code.
// To solve this problem JSX allows us to use simple HTML elements by 
// automatically converting them to react elements on the fly.

// JSX expressions
const sum = <h1>The sum of 2 and 3 is {2 + 3}</h1>;
root.render(sum);
// The curly braces are used to execute expressions in JSX

let age = 23;
root.render(<h1>I am {age} years old!</h1>);
// It can also be used to access the value of variables

function calclate(x) {
  return x*x;
}

const square = <h1>The square of 2 is {calclate(2)}</h1>;
root.render(square);

// It can also be used to execute function calls

const object = {
  color: 'black',
  car: 'mustang'
};

const vehicle = <h1>I have a {object.color} {object.car}</h1>;
root.render(vehicle);
// It can also be used to access object properties
