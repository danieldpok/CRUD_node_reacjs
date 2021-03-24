import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./components/Main"

function Example() {
    return (
        <h1>I'm an component React.js</h1>
    );
}

export default Example;

if (document.getElementById('component-example')) {
    ReactDOM.render(<Example />, document.getElementById('component-example'));
}