import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';

const {width,height} = Dimensions.get('window');
const itemW=(width-10)/3;
const imgW=itemW-10;
const imgH=imgW/0.7;

const styles = StyleSheet.create({
  item: {
    width:itemW,
    alignItems:'center'
  },
  image:{
    width:imgW,
    height:imgH,
    marginBottom:10
  },
  title:{
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
  }
});

const Item = (props) =>{
  const {title,image}=props;
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri:image}}/>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}

export default Item



