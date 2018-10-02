import * as React from 'react';
import SearchBarContainer from '../containers/search-bar.container';
import WeatherDataContainer  from '../containers/weather-data.container';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
         <div className="row search-bar-container">
            <SearchBarContainer />
         </div>
         <div className="row">
            <div className="col m12 s12 l12">
              <WeatherDataContainer />
            </div>
         </div>
      </div>
    );
  }
}
