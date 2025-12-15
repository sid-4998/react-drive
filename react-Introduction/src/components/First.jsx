// React components are reusable UI parts.
// They are basically functions that return HTML
// Their are 2 types of react components 
// 1. Class components (used in older react versions)
// 2. Function components

function FirstComponent() {
    return (
        <div className="container">
            <h1>This is the first component</h1>
        </div>
    );
}

export default FirstComponent;

// This is a component file
// Note that while creating such a component file the first letter of the filename 
// should always be in uppercase format

