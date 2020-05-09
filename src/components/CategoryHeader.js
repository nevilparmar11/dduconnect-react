import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,ScrollView,Image,StyleSheet, Dimensions,ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview';
import {Header,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row, Item} from 'native-base';

export default class PostScreen extends Component{
  
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

	render(){
        const CATEFORY_NAMES  ={
            "79":"'Tech' it easy",
            "111":"Dentistry arround the gloabe",
            "129":"Pharmacy: Then & Now",
            "82":"Connect-ions",
            "83":"Fiction",
            "90":"Open Letter",
            "91":"Verses",
            "81":"Writers' Lounge ",
            "133":"Alumni Speaks",
            "134":"DDU Speaks",
            "135":"Hall of Fame",
            "132":"Interview",
            "121":"More Content",
            "84":"Non-Tech",
            "80":"Tech",
            "173":"આપણી-ગુજરાતી-આપણું-ગૌરવ",
        };
        global.CATEFORY_NAMES=CATEFORY_NAMES;
        const data = this.props.data;
        global.data = data;
       
        return( 
            <View style={{flex:1,flexDirection:'row-reverse',alignItems:'flex-start'}}>
              { data.categories.map((item) => (
                        <Text style={{fontSize:8,paddingRight:4,color:'#ddd',fontFamily:'Montserrat-Bold',fontWeight:'bold'}}
                        key={item}>{CATEFORY_NAMES[item.toString()]}</Text>
             ))
              }
            </View>

        );
   
}

}

