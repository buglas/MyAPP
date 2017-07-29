import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    FlatList,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';

const styles=StyleSheet.create({
    image:{
        width:150,
        height:222
    },
    loading:{
        marginTop:100
    }
})

const api='https://api.douban.com/v2/movie/subject/'

export default class Detail extends Component {
    static navigationOptions={
        title:'detail'
    };
    state={
        data:{},
        ready:false
    };
    async componentDidMount(){
        const {state:{params:{id}}}=this.props.navigation;
        let textData,jsonData;
        textData=await AsyncStorage.getItem(id);
        if(textData){
            console.log('数据来自本地！');
        }else{
            const rawData=await fetch(api+''+id);
            textData=await rawData.text();
            console.log('数据来自远程服务器！');
        }


        jsonData=JSON.parse(textData);
        jsonData.image=jsonData.images.large.replace('webp','jpg');

        // const textData=JSON.stringify(jsonData);
        AsyncStorage.setItem(id,textData);
        this.setState({
            data:jsonData,
            ready:true
        })
    }
    render() {
        const {data:{title,summary,image},ready} =this.state;
        //const {state,goBack}=this.props.navigation;
        return (
            <View>
                {
                    ready?
                        <View>
                            <Image source={{uri:image}} style={styles.image}/>
                            <Text>{title}</Text>
                            <Text>{summary}</Text>
                            {/*<Text onPress={()=>{
                                state.params.callBack('Child info...');
                                goBack();
                            }}>返回</Text>*/}
                        </View>
                    :
                        <ActivityIndicator size="large" style={styles.loading}/>
                }

            </View>
        );
    }
}