import * as React from 'react';
let $ = require('jquery');
import { YoutubeVideo } from '../../shared/models/youtube_video.model';

export class VideoListItemComponent extends React.Component<{video: YoutubeVideo, onVideoSelected: any}> {
    render() {
        const video = this.props.video;
        return (
            <li onClick={(event: any) => this.selectVideo(event)} className="collection-item avatar videolisting-item animated slideInRight _1">
                <img src={video.getThumbnail()} alt="" className="circle"/>
                <span>{video.getTitle()}</span>
            </li>
        )
    }

    selectVideo(event: any){
        this.props.onVideoSelected(this.props.video);
    }
}