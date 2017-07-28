import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';


export default class MyMovies extends Component {
    static navigationOptions={
        title:'myMovies'
    };
    render() {
        return (
            <View>
                <Text>myMovies</Text>
            </View>
        );
    }
}