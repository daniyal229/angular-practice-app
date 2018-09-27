import * as React from 'react';
import { ScrollView, View, Text, StyleSheet, Picker} from 'react-native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { getStocks } from '../actions/get-stocks.action';
import { TimeSeriesDataComponent } from '../../../shared/components/time-series-data.component';
import { spdr } from '../../../shared/assets/spdr';

class StockTrendsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            company: this.props.company || 'MSFT',
            retrievingTrends: true
        }
    }

    componentDidMount() {
        this.retrieveTrends()
    }

    retrieveTrends() {
        this.setState({retrievingTrends: true})
        this.props.getStocks(this.state.company, () => {
            this.setState({retrievingTrends: false})
        })
    }

    renderCompanies() {
        return spdr.map(
            (company) => {
                return <Picker.Item key={company.symbol} label={`${company.name} (${company.symbol})`} value={company.symbol} />
            }
        )
    }

    renderResult(){
        debugger
        if(!this.state.retrievingTrends && !!this.props.trend) {
            return (
                <View>
                    <TimeSeriesDataComponent data={this.props.trend.getDataForChart()}/>
                </View>
            )
        } else {
            return <Text style={{alignSelf: 'center'}}>Loading ...</Text>
        }
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 8, flexDirection: 'column' }}>
                        <Text>Company</Text>
                        <Picker
                            onValueChange={(value, index) => {
                                this.setState({ company: value })
                                this.retrieveTrends()
                            }}
                            selectedValue={this.state.company}
                        >
                            {this.renderCompanies()}
                        </Picker>
                    <ScrollView style={{ flex: 1, flexDirection: 'column', height: 800}}>
                        {this.renderResult()}
                    </ScrollView>
                </View>
                <Button onPress={() => {
                    this.retrieveTrends()
                }} mode="contained" color="green">Get Stock Trend</Button>
            </View>
        );
    }
}

let mapStateToProps = (state = {}) => {
    return {
        company: state.stock_trends.company,
        trend: state.stock_trends.trend
    }
}

export default connect(mapStateToProps, { getStocks: getStocks })(StockTrendsComponent)