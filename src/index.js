import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCf4JsMgCpiofErRsns3Hg9_QhcDXhHZn4';

// create component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// take it and put it into DOM
ReactDOM.render(<App />, document.querySelector('.container'));