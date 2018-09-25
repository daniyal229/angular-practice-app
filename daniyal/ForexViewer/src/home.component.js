/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export class HomeComponent extends Component {

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        borderWidth: 1.0,
        borderColor: "#000000"
      }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "stretch",
          }}
        >
          <Button
            mode='contained'
            icon='account-balance'
            color='green'
            style={{
              flex: 1,
              flexDirection: "row",
              borderWidth: 1.0,
              borderColor: "#000000"
         
            }}
            onPress={() => {
              this.props.navigation.navigate('ExchangeRates')
            }}
          >Exchange Rates</Button>
          <Button
            mode='contained'
            icon='account-balance'
            color='green'
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: "stretch",
              borderWidth: 1.0,
              borderColor: "#000000"
         
            }}
            onPress={() => {
              this.props.navigation.navigate('ForexRates')
            }}
          >Stock Trends</Button>
        </View>
          <Button
              mode='contained'
              icon='account-balance'
              color='green'
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "stretch",
                alignSelf: 'stretch',
                textAlign: 'center',
                fontSize: 20,
                borderWidth: 1.0,
                borderColor: "#000000"    
              }}
              onPress={() => {
                this.props.navigatio.navigate('ForexRates')
              }}
            >Cryptocurrency Exchange Rates</Button>
       

      </View>
    );
  }
}
