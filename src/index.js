import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCf4JsMgCpiofErRsns3Hg9_QhcDXhHZn4';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'westworld' }, (videos) => {
            this.setState({ videos }); // this is the same as saying videos : videos (es6 syntax)
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// take it and put it into DOM
ReactDOM.render(<App />, document.querySelector('.container'));