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
    state={
        movies:movies.subjects,
        refreshing:false
    }
    refreshing=false;
    start=0;
    count=12;
    fetchData=(start=0,count=12)=>{
        if(this.refreshing){
            return
        }
        this.setState({
            refreshing:true
        })
        this.refreshing=true;
        fetch('https://api.douban.com/v2/movie/in_theaters')
            .then((response)=>response.text())
            .then((responseText)=>{
                const resJson=JSON.parse(responseText);
                this.setState({
                    movies:resJson.subjects,
                    refreshing:false
                })
                this.refreshing=false;
            })
            .catch((error)=>{
                console.error(error);
            })
    }

    componentDidMount(){
        /*setTimeout(()=>{
            this.fetchData();
        },2000)*/
    }
    render() {
        const {movies,refreshing}=this.state;
        return (
            <View style={styles.items}>
                <FlatList
                    numColumns={3}
                    columnWrapperStyle={styles.row}
                    keyExtractor={item=>item.id}
                    data={movies}
                    onRefresh={this.fetchData}
                    refreshing={refreshing}
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