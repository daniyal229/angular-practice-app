import * as React from 'react';
import { connect } from 'react-redux';

export class SearchBarContainer extends React.Component {

    state: {term: string}
    constructor(props: any) {
        super(props);
        this.state = { term: '' }
        this.onInputChange = this.onInputChange.bind(this);
        this.searchPlaces = this.searchPlaces.bind(this);
    }

    render(){
        return (
            <form onSubmit={this.searchPlaces} className="col s12">
                <div className="row">
                    <div className="input-field col s10">
                        <input value={this.state.term} onChange={this.onInputChange} placeholder="Search Places .." id="search" type="text" className="validate" />
                    </div>
                    <div className="input-field col s2 search-button">
                        <input value="Search" id="search_btn" type="submit" className="btn btn-search" />
                        <i className="material-icons icon-search">search</i>
                    </div>
                </div>
            </form>
        )
    }

    searchPlaces(event: any) {
        event.preventDefault();
        /* Ask redux to get places */
    }

    onInputChange(event: any) {
        this.setState({ term: event.target.value })
    }
}