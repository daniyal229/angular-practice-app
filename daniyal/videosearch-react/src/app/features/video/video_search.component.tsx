import * as React from 'react';

export class VideoSearchComponent extends React.Component<{onVideoSearch: any}> {

    state: {term: string}
    typingTimeout: any = null;
    constructor(props: any) {
        super(props);
        this.state = { 
            term: ''
        }
    }

    render() {
        return (
            <div className="input-field col s12">
                <input onChange={(event: any) => this.search(event.target.value)} placeholder="Type to search for videos ..." id="search" type="text" className="validate" />
            </div>
        );
    }

    search(term: string) {
        this.setState({ term }) 
        if(!!this.typingTimeout){
            clearTimeout(this.typingTimeout);
        }
        this.typingTimeout = setTimeout(
            () => {
                this.props.onVideoSearch(term)
            }, 1000
        )
    }
}