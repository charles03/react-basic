import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import youtube search
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";


// google api
// const API_KEY = 'AIzaSyDUs3oApnLzZ38WcMYFCVPd5cFKYtuLe3M';

/*quick example for YTSearch, still use similar jQuery call back func*/
// then move this func into class component App
/*YTSearch({key : API_KEY, term : 'surfboards'}, function (data) {
    console.log(data);
})*/

// old version, before convert app from functional based to class component
/*const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
}*/

import App from './components/app';
import reducers from './reducers';

// Downward Data Flow
const createStoreWithMiddleware = applyMiddleware()(createStore);

// take this component's generated HTML and put it on page (in DOM)
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
