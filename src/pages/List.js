import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';

import Item from '../components/Item';
//import movies from '../movies.json'

const styles = StyleSheet.create({
    row: {
        padding:5,
        marginTop:10,
    },
    loading:{
        marginTop:120
    }
});
const api='https://api.douban.com/v2/movie/in_theaters';
export default class List extends Component {
    static navigationOptions={
        title:'list',
    };
    state={
        movies:[],
        refreshing:false,
        ready:false,
        childState:''
    }
    refreshing=false;
    start=0;
    count=12;
    fetchData=(start=0,count=12)=>{
        if(this.refreshing){
            return
        }
        //这是一个异步操作，不会立即生效，所以才有了上面的this.refreshing
        this.setState({
            refreshing:true
        })
        this.refreshing=true;
        return fetch(api+'?start='+start+'&count='+count)
            .then((response)=>response.text())
            .then((responseText)=>{
                const json=JSON.parse(responseText);
                this.setState({
                    //movies:resJson.subjects,
                    refreshing:false
                })
                this.refreshing=false;
                return json;
            })
            .catch((error)=>{
                console.error(error);
            })
    };

    freshData =async()=>{
        const json=await this.fetchData();
        this.setState({
            movies:json.subjects
        })
    };

    fetchMore=async()=>{
        const  json=await this.fetchData(this.start,this.count);
        if(json){
            this.start+=this.count-1;
            this.setState({
                movies:this.state.movies.concat(json.subjects),
            })
        }
    }

    async componentDidMount(){
        await this.fetchMore();
        this.setState({
            ready:true
        })
    }
    render() {
        const {movies, refreshing, ready,childState} = this.state;
        const {navigate}=this.props.navigation;
        return (
            <View style={styles.items}>
                <Text>子组件传回的数据：{childState}</Text>
                {
                    ready ?
                    <FlatList
                        numColumns={3}
                        columnWrapperStyle={styles.row}
                        keyExtractor={item => item.id}
                        data={movies}
                        onRefresh={this.freshData}
                        refreshing={refreshing}
                        onEndReached={this.fetchMore}
                        onEndReachedThreshold={0}
                        ListFooterComponent={() => {
                            return refreshing &&
                                <ActivityIndicator size="large"/>
                        }}
                        renderItem={({item}) => {
                            return (<Item
                                onPress={()=>navigate(
                                    'Detail',
                                    {
                                        id:item.id,
                                        callBack:(data)=>{
                                            this.setState({
                                                childState:data
                                            })
                                        }
                                    },

                                )}
                                title={item.title}
                                image={item.images.medium}
                                stars={item.rating.stars}/>)}
                        }
                    />
                    :
                    <ActivityIndicator size="large" style={styles.loading}/>
                }
            </View>
        );
    }
}