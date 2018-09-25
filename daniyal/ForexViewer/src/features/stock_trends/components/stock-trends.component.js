import * as React from 'react';
import { View, StyleSheet, Text, Button, Picker } from 'react-native';

const styles = StyleSheet.create(
    {
        main: { flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }
    }
)

export class StockTrendsComponent extends React.Component {
    static navigationOptions = {
        title: 'Compare Rates',
        headerStyle: {
            "text-align": 'center'
        }
    }

    state = {
        from_currency: 'USD',
        to_currency: 'PKR'
    }
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         from_currency: 'USD',
    //         to_currency: 'PKR'
    //     }
    // }

    render() {
        return (
            <View style={styles.main}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <Text>From Currency</Text>
                        {/* <Picker
                            // selectedValue={this.state.from_currency}
                            style={{ height: 50, width: 100 }}
                            onValueChange={(itemValue, index) => {
                                this.setState({from_currency: itemValue});
                                // return itemValue, index;
                            }}>
                        >
                            <Picker.Item label={"PKR"} value={"PKR"} />
                            <Picker.Item label={"USD"} value={"USD"} />
                        </Picker> */}
                    </View>
                    <View>
                        <Text>To Currency</Text>
                        {/* <Picker
                            // selectedValue={this.state.to_currency}
                            style={{ height: 50, width: 100 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({to_currency: itemValue})}>
                        >
                            <Picker.Item label="PKR" value="PKR" />
                            <Picker.Item label="USD" value="USD" />
                        </Picker> */}
                    </View>
                </View>
                <View>
                    
                     <Button 
                    title="Go Back"
                    onPress = {() => {
                        this.props.navigation.navigate('Home')
                    }}
                />

                </View>
                
               
            </View>
        );
    }
}