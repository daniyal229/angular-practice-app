import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css'
import { VideoSearchComponent } from './features/video/video_search.component';
import { VideoListComponent } from './features/video/video_list.component';
import { YoutubeService } from './shared/services/youtube.service';
import { YoutubeVideo } from './shared/models/youtube_video.model';
import VideoPlayerComponent from './features/video/video_player.component';

class MainComponent extends React.Component {
    
    state: {videos: YoutubeVideo[], selectedVideo?: YoutubeVideo}

    constructor(properties: object){
        super(properties)
        this.state = {
            videos: []
        }
        YoutubeService.getVideos('Microcontroller').then(
            (videos: YoutubeVideo[]) => {
                this.setState({ videos: videos, selectedVideo: videos[0]});
            }
        )
    }

    fetchVideos(search: string = 'Microcontroller') {
        YoutubeService.getVideos(search).then(
            (videos: YoutubeVideo[]) => {
                this.setState({ videos });
            }
        )
    }

    render() {
        if(this.state.videos.length == 0) {
            return (
                <div className="loader-container">
                    <div className="preloader-wrapper big active loader">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                    <h6 className="center-align">Fetching Videos ....</h6>
                </div>
            )
        }
        else {
                return (
                <div>            
                    <div className="row">
                        <VideoSearchComponent onVideoSearch={(search: string) => {this.fetchVideos(search || 'Microcontroller')}} />
                    </div>
                    <div className="row">
                        <div className="col m8 player-container">
                            <VideoPlayerComponent video={this.state.selectedVideo} />
                        </div>
                        <div className="col m4 height">
                            <VideoListComponent onVideoSelected={(selectedVideo: YoutubeVideo) => this.setState({selectedVideo})} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

ReactDOM.render(<MainComponent />,document.querySelector('.main'))