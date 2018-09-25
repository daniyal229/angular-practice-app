import * as React from 'react';
import moment from 'moment';
import ChartView from 'react-native-highcharts';

export class RatesChartComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!!this.props.rates) {
            var Highcharts = 'Highcharts';
            var conf = {
                chart: {
                    type: 'line'
                },
                xAxis: {
                    type: 'datetime',
                    title: {
                        text: 'Date'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Rate'
                    },
                    min: 0
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x:%e. %b}: {point.y:.2f}'
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
                    data: this.props.rates.getDataForChart()
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
            return <ChartView style={{ height: 300 }} config={conf} options={options}></ChartView>
        } else {
            return null;
        }
    }
}