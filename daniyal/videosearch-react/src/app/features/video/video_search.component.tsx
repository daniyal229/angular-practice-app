import * as React from 'react';

export class VideoSearchComponent extends React.Component {

    state: {term: string}
    constructor(props: any) {
        super(props);
        console.log(props);
        this.state = { 
            term: ''
        }
    }

    render() {
        return (
            <div>
                <input onChange={this.handleVideoSearch.bind(this)} type="text" placeholder="Type to search for videos ...." />  
            </div>
        );
    }

    handleVideoSearch(event: any) {
        this.setState({ term: event.target.value})
    }
}