import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherItem from '../components/weather-item';
class WeatherList extends Component {
    render() {

        if(this.props.weather.length === 0)
            return( <div>Please search a city</div> );

        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                        {this.props.weather.map((data, index)=><WeatherItem cityData={data} key={data.city.name}/>)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return(
        {weather}
    );
}

export default connect(mapStateToProps)(WeatherList)

