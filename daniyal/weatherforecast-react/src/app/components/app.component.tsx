import * as React from 'react';
import { SearchBarContainer } from '../containers/search-bar.container';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
         <div className="row">
            <SearchBarContainer />
         </div>
      </div>
    );
  }
}
