import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './Components/search-bar';
import YTsearch from 'youtube-api-search';
import VideoList from './Components/video-list';
import VideoDetail from './Components/video-detail';

const API_kEY = "AIzaSyB2I4wqliEiYK7UKb2PbOaNuI7GbF2pxe4"


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos:[],
            selectedVideo: null,
            searchTerm: 'surfboards'
        };
        this.searchVideos(this.state.searchTerm)
    }
    searchVideos(term) {
        YTsearch({key: API_kEY, term: term}, (videos)=>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            console.log(videos)
        }, function(err){
            console.log('error',err);
        });
    }
    
    render() {
    const searchVideosWithDelay = _.debounce((searchTerm)=>this.searchVideos(searchTerm),500)
    return <div>
        <SearchBar onSearch={searchVideosWithDelay}/>
        <div className="row">
            <VideoDetail video = {this.state.selectedVideo} />
            <VideoList 
            onVideoSelect = {(selectedVideo)=>this.setState({selectedVideo})}
            videos = {this.state.videos}/>
        </div>
    </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));