import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';


export default class Detail extends Component {
    static navigationOptions={
        title:'detail'
    };
    render() {
        const {state,goBack}=this.props.navigation;
        return (
            <View>
                <Text>电影详情页</Text>
                <Text>电影id：{state.params.id}</Text>
                <Text onPress={()=>{
                    state.params.callBack('Child info...');
                    goBack();
                }}>返回</Text>
            </View>
        );
    }
}