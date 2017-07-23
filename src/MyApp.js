import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import Item from './components/Item';

const styles = StyleSheet.create({
  items: {
    flexDirection:'row',
    padding:5,
    marginTop:5
  }
});

export default class MyApp extends Component {
  render() {
    return (
      <View style={styles.items}>
		<Item/>
		<Item/>
		<Item/>
      </View>
    );
  }
}


