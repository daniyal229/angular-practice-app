import * as React from 'react';
import { YoutubeVideo } from '../../shared/models/youtube_video.model';

const VideoPlayerComponent = (properties: {video: YoutubeVideo}) => {
    const video: YoutubeVideo = properties.video;
    return (
        <div className="animated zoomIn _1">
            <div className="row player">
                <div className="col m12 player-frame">
                    <iframe src={video.getUrl()} className="responsive-video frame" />
                </div>
            </div>
            <div className="row details">
                <div className="col s12 m12">
                    <h5>{video.getTitle()}</h5>
                    <p>{video.getDescription()}</p>
                </div>
            </div>
        </div>
    )
    
}

export default VideoPlayerComponent;