import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={(event) => console.log(event.target.value)} />; // bu event handler, onChange de React event, onu this.onInputChange ile override ediyoruz
    }
}

export default SearchBar;