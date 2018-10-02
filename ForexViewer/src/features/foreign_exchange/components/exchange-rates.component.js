import * as React from 'react';
import * as currencyCodes from 'currency-codes';
import { ScrollView, View, Text, StyleSheet, Picker} from 'react-native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { getRates } from '../actions/get-rates.action';
import { TimeSeriesDataComponent } from '../../../shared/components/time-series-data.component';
import { DataTableComponent } from '../../../shared/components/data-table.component';

const borders = {
    borderColor: "#000000",
    borderWidth: 0.5
}

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
})

class ExchangeRatesComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            from_currency: this.props.from_currency || 'USD',
            to_currency: this.props.to_currency || 'PKR',
            retrievingRates: true
        }
    }

    componentDidMount() {
        this.retrieveRates()
    }

    retrieveRates() {
        this.setState({retrievingRates: true})
        this.props.getRates(this.state.from_currency, this.state.to_currency, () => {
            this.setState({retrievingRates: false})
        })
    }

    renderCurrencies() {
        return currencyCodes.codes().map(
            (currency) => {
                return <Picker.Item key={currency} label={currency} value={currency} />
            }
        )
    }

    renderResult(){
        if(!!!this.state.retrievingRates && !!this.props.rate_list) {
            return (
                <View>
                    <DataTableComponent columns={[
                        {
                            title: 'Date',
                            dataIndex: 'Date',
                            width: 150
                        },
                        {
                            title: 'Rate',
                            dataIndex: 'Rate',
                            width: 250
                        }
                    ]} style={{height: 320}} data={this.props.rate_list.getTableData()} />
                    <TimeSeriesDataComponent data={this.props.rate_list.getDataForChart()}/>
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
                        <Text>From Currency</Text>
                        <Picker
                            onValueChange={(value, index) => {
                                this.setState({ from_currency: value })
                            }}
                            selectedValue={this.state.from_currency}
                        >
                            {this.renderCurrencies()}
                        </Picker>
                        <Text>To Currency</Text>
                        <Picker
                            onValueChange={(value, index) => {
                                this.setState({ to_currency: value })
                            }}
                            selectedValue={this.state.to_currency}
                        >
                            {this.renderCurrencies()}
                        </Picker>
                    <ScrollView style={{ flex: 1, flexDirection: 'column', height: 800}}>
                        {this.renderResult()}
                    </ScrollView>
                </View>
                <Button onPress={() => {
                    this.retrieveRates()
                }} mode="contained" color="green">Get Rates</Button>
            </View>
        );
    }
}

let mapStateToProps = (state = {}) => {
    return {
        from_currency: state.exchange_rates.from_currency,
        to_currency: state.exchange_rates.to_currency,
        rate_list: state.exchange_rates.rate_list
    }
}

export default connect(mapStateToProps, { getRates: getRates })(ExchangeRatesComponent)