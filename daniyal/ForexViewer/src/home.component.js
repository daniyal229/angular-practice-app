/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


export class HomeComponent extends Component {

  static navigationOptions = {
    title: 'Forex Viewer',
    headerStyle: {
      "text-align": 'center'
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Button
            title="Compare Rates"
            onPress={() => {
              this.props.navigation.navigate('ForexRates')
            }}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    width: '100%'
  }
});
