import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
       super(props)
       this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        var searchInput = document.querySelectorAll('input')[0];
        this.props.fetchWeather(searchInput.value);
        searchInput.value = '';
    }
    render() {
        return (
            <form className="row m-4" onSubmit={this.onFormSubmit}>
                <div className="col-8">
                    <input type="text" 
                    className="form-control"
                    name = 'searchBar'
                    placeholder="Get a five-day forecast in your favourite cities" 
                    />
                </div>
                <button className="btn btn-primary mx-2 col-2">Search</button>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather: fetchWeather}, dispatch)
} 

export default connect(null , mapDispatchToProps)(SearchBar)