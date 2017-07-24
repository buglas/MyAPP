import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList
} from 'react-native';

import Item from './components/Item';
import movies from '../movies.json'

const styles = StyleSheet.create({
  row: {
    padding:5,
    marginTop:10,
  }
});

export default class MyApp extends Component {
  render() {
    return (
      <View style={styles.items}>
		<FlatList
			numColumns={3}
			columnWrapperStyle={styles.row}
			keyExtractor={item=>item.id}
			data={movies.subjects}
			renderItem={({item})=> 
				<Item 
					title={item.title} 
					image={item.images.medium}
					stars={item.rating.stars} />
			}
		/>
      </View>
    );
  }
}


