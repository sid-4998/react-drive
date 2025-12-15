// When we want to send the content between opening and closing tags 
// of a react functional component to another such component, we use 
// children property of the props object

function Son(props) {
    return (
        <div>
            <h1>I am Siddhant Jha</h1>
            <div>{props.children}</div>
        </div>  
    );
}

function Parent() {
    return (
        <Son>
            <p>My father's name is Shailendra Jha</p>
        </Son>
    );
}

export { Parent };