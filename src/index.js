import React from 'react';
import ReactDOM from 'react-dom';

// create component
const App = () => {
    return <div> YO </div>;
}

// take it and put it into DOM
ReactDOM.render(<App />, document.querySelector('.container'));