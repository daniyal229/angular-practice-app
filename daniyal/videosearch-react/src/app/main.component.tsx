import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import YTSearch from 'youtube-api-search';
import { VideoSearchComponent } from './features/video/video_search.component';

class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <VideoSearchComponent />
            </div>
        )
    }
}

ReactDOM.render(<MainComponent />,document.querySelector('.main'))