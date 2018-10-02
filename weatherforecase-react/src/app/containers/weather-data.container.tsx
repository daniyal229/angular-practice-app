import * as React from 'react';
import { connect } from 'react-redux';
import { WeatherMap } from '../models/weather-map.model';
import { WeatherChart } from '../components/weather-chart.component';
import { MapComponent } from '../components/map.component';

class WeatherDataContainer extends React.Component<{weather: WeatherMap[]}> {

    render() {
        console.log(this.props.weather);
        let cities = this.props.weather.map((data: WeatherMap) => {
            return <tr>
                <td><MapComponent coords={data.getCoords()}/><div className="center-align">{data.getCity()}</div></td>
                <td><WeatherChart entity={'temperature'} units={'K'} weatherData={data}/></td>
                <td><WeatherChart entity={'pressure'} units={'hPa'} weatherData={data}/></td>
                <td><WeatherChart entity={'humidity'} units={'%'} weatherData={data}/></td>
            </tr>;
        })
        return (
            <table className="highlight">
                <thead>
                    <tr>
                        <th>City</th>
                        <th className="center-align">Temperature</th>
                        <th className="center-align">Pressure</th>
                        <th className="center-align">Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {cities}
                </tbody>
            </table>
        );
    }
}

let mapStateToProps = (state: any) => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherDataContainer)