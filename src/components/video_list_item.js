/**
 * Created by charles on 11/12/2017.
 */

import React from 'react';

/*const VideoListItem = (props) => {
    const video = props.video;
    return <li>video</li>
}*/
// it is equal to above, using curly braces as data binding
// and it allow multiple props
const VideoListItem = ({video, onVideoSelect}) => {
    // console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        // we pass onVideoSelect function into li click event
        <li onClick={() => onVideoSelect(video)}
            className = "list-group-item">
            <div classNmae = "video-list media">
                <div className = "media-left">
                    <img className = "media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;