import * as React from 'react';
import { YoutubeVideo } from '../../shared/models/youtube_video.model';
import { VideoListItemComponent } from './video_list_item.component';

export class VideoListComponent extends React.Component<{videos: YoutubeVideo[], onVideoSelected: any}> {
    render(){
        const videoListItemComponents = this.props.videos.map((video: YoutubeVideo) => {
            return <VideoListItemComponent onVideoSelected={this.props.onVideoSelected} key={video.getEtag()} video={video} />
        })
        return (
            <ul className="videolisting collection">
                {videoListItemComponents}
            </ul>
        );
    }
}