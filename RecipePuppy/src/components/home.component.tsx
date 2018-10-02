import * as React from 'react';
import { View, Text, Image } from "react-native";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

export class HomeComponent extends React.Component<{navigation: any}> {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Recipes')
        }, 3000)
    }
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 100
            }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require("../assets/grill.png")} style={{alignSelf: 'center'}}/>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-start'}}>
                    <Text style={{fontSize: 24, alignSelf: 'center'}}>Welcome To Recipe Puppy</Text>
                    <Text style={{fontSize: 16, alignSelf: 'center', flexWrap: 'wrap'}}>Your number one resource for all things cooking!!</Text>
                </View>
            </View>
        );
    }
}


