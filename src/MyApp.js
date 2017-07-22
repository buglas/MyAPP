/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class MyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./img/poster.jpg')}/>
		<Text style={styles.title} numberOfLines={1}>
			金刚狼3：殊死你大爷
		</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    width:150,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  box1:{
    width:90,
    height:60,
    backgroundColor:'orange',
    borderWidth:1,
    borderColor:'black',
  },
  image:{
  	width:150,
  	height:215,
  	marginBottom:10
  },
  title:{
	fontSize:16,
	fontWeight:'bold',
	textAlign:'center',
  }
});


