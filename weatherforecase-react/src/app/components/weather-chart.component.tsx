import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import * as HighCharts from 'highcharts';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { WeatherMap } from '../models/weather-map.model';

export class WeatherChart extends React.Component<{weatherData: WeatherMap, entity: string, units: string}> {

    constructor(props: {weatherData: WeatherMap, entity: string, units: string}){
      super(props)
    }

    // componentDidMount(){
    //     let element: any = ReactDOM.findDOMNode(this);
    //     HighCharts.chart({
    //         chart: {
    //             renderTo: element,
    //             backgroundColor: null,
    //             borderWidth: 0,
    //             type: 'area',
    //             margin: [2, 0, 2, 0],
    //             width: 120,
    //             height: 120,
    //             style: {
    //                 overflow: 'visible'
    //             }
    //         },
    //         title: {
    //             text: ''
    //         },
    //         plotOptions: {
    //             series: {
    //                 animation: true
    //             }
    //         },
    //         xAxis: {
    //             categories: [1,2,3,4,5]
    //         },
    //         series: [{
    //             name: 'Temp',
    //             data: this.state.values
    //         }]
    //     })
    // }

    // componentDidUpdate(prevProps: {values: number[]}, prevState: {values: number[]}, snapshot: any){
    //     let element: any = ReactDOM.findDOMNode(this);
    //     HighCharts.chart({
    //         chart: {
    //             renderTo: element,
    //             backgroundColor: null,
    //             borderWidth: 0,
    //             type: 'area',
    //             margin: [2, 0, 2, 0],
    //             width: 120,
    //             height: 120,
    //             style: {
    //                 overflow: 'visible'
    //             }
    //         },
    //         title: {
    //             text: ''
    //         },
    //         plotOptions: {
    //             series: {
    //                 animation: true
    //             }
    //         },
    //         xAxis: {
    //             categories: [1,2,3,4,5]
    //         },
    //         series: [{
    //             name: 'Temp',
    //             data: this.state.values
    //         }]
    //     })
    // }

    render(){
        return (
            <div>
            <Sparklines data={this.props.weatherData.getValuesFor(this.props.entity)} limit={40} width={100} height={20} margin={5}>
                <SparklinesLine color="red" />
            </Sparklines>
                <div className="center-align">{this.props.weatherData.getAverageFor(this.props.entity)} ({this.props.units})</div>
            </div>
        );
    }

}