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
    marginBottom:4
  },
  stars:{
    width:66,
    height:10,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  star:{
    width:10,
    height:10
  }
});

const renderStars=(stars)=>{
  if (stars=='00') {
    return;
  }
  const starCount=5;
  let full,half,empty;
  full=parseInt(stars[0]);
  if (stars[1]=='5') {
    half=0;
    empty=starCount - full;
  }else{
    full-=1;
    half=1;
    empty=starCount-full-1;
  }

  const starArr=[];
  let i;
  for(i=0;i<full;i++){
    starArr.push(
      <Image
        key={i}
        style={styles.star}
        source={require('../img/star-full.png')}
      />
    )
  }
  if(half){
    starArr.push(
      <Image
        key={i}
        style={styles.star}
        source={require('../img/star-half.png')}
      />
    )
  }
  for(var j=0;j<empty;j++){
    starArr.push(
      <Image
        key={i+j+1}
        style={styles.star}
        source={require('../img/star-empty.png')}
      />
    )
  }
  return(
    <View style={styles.stars}>
      {starArr}
    </View>
  )
}

const Item = (props) =>{
  const {title,image,stars}=props;
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri:image}}/>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      {renderStars(stars)}
    </View>
  );
}

export default Item



