import * as React from 'react';
import ChartView from 'react-native-highcharts';

export class TimeSeriesDataComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!!this.props.data) {
            var Highcharts = 'Highcharts';
            var conf = {
                chart: {
                    type: 'line'
                },
                xAxis: {
                    visible: false
                },
                yAxis: {
                    title: {
                        text: 'Rate'
                    },
                    min: 0
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.y:.2f}'
                },

                plotOptions: {
                    spline: {
                        marker: {
                            enabled: true
                        }
                    }
                },
                series: [{
                    name: 'Rates',
                    data: this.props.data
                }]
            };

            const options = {
                global: {
                    useUTC: false
                },
                lang: {
                    decimalPoint: ',',
                    thousandsSep: '.'
                }
            };
            return <ChartView style={this.props.style || {height: 300}} config={conf} options={options}></ChartView>
        } else {
            return null;
        }
    }
}