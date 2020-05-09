import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,ScrollView,Image,StyleSheet, Dimensions,ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview';
import {Header,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';

export default class PastYearPapers extends Component{
    static navigationOptions = ({navigation}) =>{
		return {
			headerTitle: <Text> {navigation.state.text} </Text>,
		}

	}
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }
     
    hideSpinner() {
        this.setState({ visible: false });
    }
    
	render(){
        
        const params = "https://drive.google.com/drive/folders/1nhXCmxn7HTWP6QFCi59KP9D0JreAB3Sw";
       // console.log(params);
    return(
    
        <View style={{ flex:1,justifyContent:'center',alignItems:'stretch',marginTop:-60}}>
            <WebView
              source={{uri: params}}
              onLoad={() => this.hideSpinner()}
              javaScriptEnabled={true}
             
              pagingEnabled
              scalesPageToFit={true}
              stycontainerStyle={{flex:1,alignItems:'stretch'}}
            />

        {this.state.visible && (
          <ActivityIndicator
            style={{ position: "absolute",flex:1,justifyContent:'center',alignItems:'center',alignSelf:'center' }}
            size="large"
          />
        )}
        </View>
        
        
        
    );  
}

}

const styles = StyleSheet.create({
    stylOld: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    styleNew: {
      flex: 1,
    },
    WebViewStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      marginTop: 40,
    },
    ActivityIndicatorStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
    },
  });