/**
 * Created by charles on 10/12/2017.
 */

import React from 'react';
import VideoListItem from './video_list_item.js';

/*const VideoList = () => {
    return (
        // we can add CSS class in UL
        <ul className="col-md-4 list-group">

        </ul>
    );
};*/

// pass prop or reference from App to video_list
// when give argument in func
const VideoList = (props) => {
    // use <VideolistItem video={}> to pass item to prop of video
    // console.log(props);
    const videoItems = props.videos.map((video) => {
        /* we may face this warning when not assign unique id to child item in list
         Warning: Each child in an array or iterator should have a unique "key" prop.
         Check the render method of `VideoList`. See https://fb.me/react-warning-keys for more information*/
        // thus we use etag prop in youtube returned json object as unique key in videolistitem prop
        return <VideoListItem
            // add one more prop for onVideoSelect
            // we taking prop that coming from App and passing down into video list item
            onVideoSelect = {props.onVideoSelect}
            key={video.etag}
            video={video}/>
    });

    return (
        // we can add CSS class in UL
        // use curly braces {videoItems} as reference a js var
        // react can recognize array of
        <ul className="col-md-4 list-group">
            {/*{props.videos.length}*/}
            {videoItems}
        </ul>
    );
};

export default VideoList;