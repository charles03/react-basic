import React, {Component} from 'react';
/** we need relative path for custom imported file */
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
/*import video list class by using relative path*/
import VideoList from './video_list.js';
import VideoDetail from './video_detail.js';

import _ from 'lodash';

const API_KEY = 'AIzaSyDUs3oApnLzZ38WcMYFCVPd5cFKYtuLe3M';

export default class App extends Component {
    // add constructor
    // class based component props are available anywhere in any method we define in constructor
    // and keep in mind, within class, use this.props to call this
    // if in functional based component, use props instead of this.props in method where having args
    constructor(props) {
        super(props);
        // give state with json, key videos, val is array object
        this.state = {
            videos: [],
            /*in order to show selected video, add prop into state*/
            selectedVideo: null
        };

        // args in call back func can be any name like 'data', 'videos'
/*        YTSearch({key : API_KEY, term : 'surfboards'}, function (videos) {
            // console.log(data);
            // pass object to state
            // shortcut for rename 'fn + shift + F6'
            this.setState({videos: videos});
        })*/

        // move original YTSearch() into videoSearch func
        this.videoSearch('surfboards')
    }

    // create video search callback accept term arg
    // and then move YTSearch from constructor method into it
    videoSearch(term) {
        /*ES6 syntax to convert above one
         * using fat arrow func, and curly data binding in setState method */
        YTSearch({key : API_KEY, term : term}, (videos) => {
            this.setState({
                videos : videos,
                // instead of only setting list of videos, we also set selected video
                selectedVideo : videos[0]
                /*since we are setting state here, it causes component to re-render
                 * which means video details is going to be rendered again with state.selectedVideo
                 * which is now equal to first video in array*/
            })
        })
    }

    /* since videolist need reference list of data from video state in class app*/
    // so basically we need pass some data from parent component into child component
    // passing data when use curly bracket is referred to pass prop
    // so in VideoList class or functional component, it will pass from argument in method
    render() {
        /*we will use lodash lib #debounce func to take care throttling*/
        //which is to allow user type full word in the search, instead of each typing
        //we get version of this inner func that can only be called once every 300 milliseconds
        const videoSearchLag = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                {/*after having videoSearch callback, add event onSearchTermChange with func*/}
                {/*<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>*/}
                <SearchBar onSearchTermChange={videoSearchLag}/>
                {/*put video detail in to render function and pass correct props */}

                {/* we may face this error 'video is undefined' which is because
                when app first render and go through constructor func which set list of videos
                to an empty array and then kicks off request to get some more videos in between time
                that it takes the request to finish components still attempts to render
                it doesn't pause to say 'i am still getting data'
                at that point, videos is still empty array, so that video is undefined

                we will always face this kind of issue because react always want to render instantly
                as of no need to wait
                some parent objects just can't fetch info fast enough to satisfy the needs of child obj
                so to handle this case we'll go ahead and add a check inside component to make sure
                obj has been provided in prop before it attempts to render
                */}
                {/*<VideoDetail video={this.state.videos[0]}/>*/}
                <VideoDetail video = {this.state.selectedVideo}/>

                {/*we need to implement call-back from app -> video_list -> video.items -> video_detail*/}
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
                {/* we gonna pass another func in video list
                it takes a video and it defines it on apps state
                if video list call this function with a video the selected video which an app is going to update
                we are pass selectedVideo as property to video list component */}
            </div>

        );
    }

    // because sofaras React only application without Redux
    // we need a number of callbacks to pass param
    // in next session will use redux to replace and take care of
    // parent-child communications
}
