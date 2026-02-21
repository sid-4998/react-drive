// The useEffect hook is used to perform side effects in a functional component

// Some of the side effects and use cases of useEffect hook are:

// 1. Fetching data from an API when a component mounts or when some
// parameter changes

// 2. Setting up subscriptions to an external data source (a chat service 
// or redux store) and cleaning them up when no longer needed

// 3. Adding and removing event listeners (for window resize, scroll or keyboard
// events) with proper cleanup in return function

// 4. Manually manipulating the DOM, such as managing focus, add CSS classes
// for animations or preventing body scroll for modals, especially when integrating
// with react libraries

// 5. Managing timers and intervals and ensuring their cleanup to avoid 
// any memory leaks

// 6. Updating the document title and other parts of the Browser API based
// on component state and props

// 7. Synchronizing component state with local storage to persist user
// preferences such as dark mode.

// 8. Interacting with third party libraries that need to initialize 
// or update based on react component's lifecycle

// Syntax
// useEffect(callback function, dependency array)

// When we do not provide the dependency array
// the effect runs on each render of the react component

// When we provide an empty dependency array, the effect runs
// only once when the component gets rendered for the first time
// (similar to componentDidMount) lifecycle method in class component

// When we specify some dependencies [prop, state], the effect runs on 
// initial render and when any of the dependency changes