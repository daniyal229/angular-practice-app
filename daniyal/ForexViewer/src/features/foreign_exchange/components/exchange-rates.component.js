import * as React from 'react';
import { ScrollView, View, Text, StyleSheet, Picker} from 'react-native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { getRates } from '../actions/get-rates.action';
import { RatesChartComponent } from './rates-chart.component';
import Axios from 'axios';
import { RatesListComponent } from './rates-list.component';

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
 
    constructor(props){
        super(props)
        this.state = {
            from_currency: this.props.from_currency || 'USD',
            to_currency: this.props.to_currency || 'PKR',
            currencies: []
        }
    }

    componentDidMount(){
        this.retrieveRates()
        Axios.get("https://openexchangerates.org/api/currencies.json").then(
            (success) => {
                currencies = Object.keys(success.data).map(
                    (currency) => {
                        return { label: currency, value: currency }
                    }
                )
                this.setState({
                    currencies: currencies
                })
            }
        )
    }

    retrieveRates(){
        this.props.getRates(this.state.from_currency,this.state.to_currency)
    }

    renderCurrencies(){
        return this.state.currencies.map(
            (currency) => {
                return <Picker.Item label={currency.label} value={currency.value} />
            }
        )
    }

    render() {
        return (
            <ScrollView style={{flex: 1, flexDirection: 'column', height: 500}}>
                <Text>From Currency</Text>
                <Picker
                    onValueChange={(value,index) => {
                        this.setState({from_currency: value})
                    }}
                    selectedValue={this.state.from_currency}
                    >
                    {this.renderCurrencies()}
                </Picker>
                <Text>To Currency</Text>
                <Picker
                     onValueChange={(value,index) => {
                        this.setState({to_currency: value})
                    }}
                    selectedValue={this.state.to_currency}
                    >
                    {this.renderCurrencies()}
                </Picker>
                <Button onPress={() => {
                    this.retrieveRates()
                }} mode="contained" color="green">Get Rates</Button>
                <View style={{flex: 1, flexDirection: 'column', ...borders}}>
                    <RatesChartComponent rates={this.props.rate_list} />
                </View>
                <View style={{flex: 1, flexDirection: 'column', ...borders}}>
                    <RatesListComponent rates={this.props.rate_list} />
                </View>
            </ScrollView>
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

export default connect(mapStateToProps, {getRates: getRates})(ExchangeRatesComponent)