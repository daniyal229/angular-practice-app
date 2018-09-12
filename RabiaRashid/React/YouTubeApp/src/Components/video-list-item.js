import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    return(
        <li className="list-group-item media" onClick={()=>onVideoSelect(video)}>
            <div className="media-left">
            <img src={video.snippet.thumbnails.default.url} />
            </div>
            <div className="media-body">
                <div className="media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </li>
        
    );
}

export default VideoListItem;