import React,{ Component ,PropType, Children } from 'react';
import {FlatList,ImageBackground,View,ScrollView,Image,TouchableOpacity, Dimensions,Linking} from 'react-native';
import {Header,Title,Card,Text,Left,Right,Button,Boedy,Container,Icon, Row} from 'native-base';



export default class LatestArticle extends Component{

    
    handleClick = () => {
        const cid = this.props.categoryid;
        if(cid==200){
            Linking.openURL('https://drive.google.com/open?id=1nhXCmxn7HTWP6QFCi59KP9D0JreAB3Sw');
            // this.props.navigation.navigate('PastYearPapers');
        }else{
            this.props.navigation.navigate('PostByCategory',{
                cid,navigation: this.props.navigation
            });
        }
       
    }
    render(){
        
        
    return(
        <TouchableOpacity onPress={this.handleClick}>
            
           <Image  style={{flex:1,width:Dimensions.get('window').width/4.4,height:Dimensions.get('window').width/4.4}} source={this.props.source} source={this.props.source} />

        </TouchableOpacity>
    );
	}

}