/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Fa from 'react-native-vector-icons/FontAwesome5';
import { green900 } from 'react-native-paper/src/styles/colors';

const borders = {
  borderWidth: 1.0,
  borderColor: "#000000" 
}
const button = {
    alignItems: 'center',
    backgroundColor: green900,
    padding: 10,
    ...borders
}
export class HomeComponent extends Component {

  gotToScreen(screen){
    this.props.navigation.navigate(screen)
  }

  render() {
    return (
      <View style={{flex: 1}}>
         <View style={{flex: 8, alignItems: 'center', justifyContent: 'center'}}>
            <MIcon color={green900} name='attach-money' size={100}  /> 
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Welcome to Forex Viewer</Text>
            <Text  style={{fontSize: 16, fontWeight: 'bold'}}>Your number one resource for fiscal information</Text>
         </View>
         <View style={{flex: 2, flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => {
                this.gotToScreen('ExchangeRates')
              }} style={{flex: 1, ...button}}>
                  <Image source={require('./shared/assets/images/exchange.png')} style={{flex: 3, height: 20, width: 50}} /> 
                  <Text style={{flex: 2, textAlign: 'center'}}>Exchange Rates</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                this.gotToScreen('StockTrends')
              }}  style={{flex: 1, ...button}}>
                  <Image source={require('./shared/assets/images/stock.png')} style={{flex: 3, height: 20, width: 50}} /> 
                  <Text style={{flex: 2, textAlign: 'center'}}>Stock Trends</Text>
              </TouchableOpacity>
         </View>
      </View>
    );
  }
}
