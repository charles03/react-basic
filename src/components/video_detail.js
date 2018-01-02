/**
 * Created by charles on 16/12/2017.
 */
import React from 'react';

const VideoDetail = ({video}) => {
    // this is safe check to avoid video is undefined
    // if request to get some more videos in between time
    // that it takes the request to finish components still attempts to render
    // it doesn't pause to say 'i am still getting data'

    /*in general it is safest to locate an AJAX spinner on a fairly high level
    * or parent level component */
    if (!video) {
        return <div>Loading...</div>;
    }
    //need to get access to embedded url
    // the trick is to change ID of video for navigation
    const videoId = video.id.videoId;
    /*const url = 'https://www.youtube.com/embed/' + videoId;*/
    // below is to use ES6 syntax for string interpolation while concatenation
    // instead of hold string in single quote
    // use ` (back tick) to wrap string and curly brace for js var
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            {/*next div is wrapping iframe that display video*/}
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item"
                    src={url}></iframe>
            </div>
            <div className="details">
                {/*curly brace is for reference of js variable*/}
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}
// we need to export as component, otherwise it won't be recognized in app.js where try to import this component
export default VideoDetail;