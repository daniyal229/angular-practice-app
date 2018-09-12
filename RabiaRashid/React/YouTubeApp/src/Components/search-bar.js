import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// const SearchBar = () => {
//     return <input />;
// }

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term: ''};
        self=this;
    }
    render(){
    return (
    <div className="row">
        <input onChange={this.onInputChange} className="col-8 offset-2 my-4 form-control" placeholder="Search..."/>
    </div>);
    }  
    onInputChange(event){
        self.setState({term: event.target.value});
        self.props.onSearch(self.state.term)
    }
}

export default SearchBar;
