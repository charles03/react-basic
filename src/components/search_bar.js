/**
 * Created by charles on 03/12/2017.
 */

import React from 'react';


/* instead of using functional component based as return */
// const SearchBar = () => {
//     return <input />
// }

/* we can use class extend React component */
class SearchBar extends React.Component {
    /* add constructor with prop and state */
    /* function components do not have state
    * only class based components have state */
    constructor(props) {
        super(props); // need super invoke
        // term is properties recorded on the state
        this.state = {term : ''};
    }



    // call render function
    render() {
        // return jsx
        // prop on event with curly brace
        /*return <input onChange = {this.onInputChange}/>;*/

        // instead of using curly function and separate onInputChange function,
        // we give fat arrow function
        /*return <input onChange = {(event) => console.log(event.target.value)}/>;*/

        // how to update to set state for property <term>
        /* init set value using state of term (empty string)
        * then when trigger event while inputting changes,
        * the state get updated, so as value of input */
        // notice return is following with bracket instead of parenthesis
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    /*instead, wrap event func in onChange prop into separate func*/
                    /*onChange={event => this.setState({term : event.target.value})}*/
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }
    // event handler with input element
    onInputChange(term) {
        // use setState func
        this.setState({term}); // react var binding
        this.props.onSearchTermChange(term);
    }
}


/* export component */
export default SearchBar;