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

root.render(newElement);