import React  , { Component ,PropType } from 'react';
import { View ,Text ,Button,Image,ImageBackground } from 'react-native';


export default class SplashScreen extends Component{
	 constructor(props) {
        super(props);
        
    }
	componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Main');
        }, 2000);
    }


	render(){
	return(
		<View style={{flex:1,flexDirection: 'column',height:'100%' ,alignItems:'center',justyfyContent:'center'}}> 
			 <Image style={{width:'100%',height:'100%',justyfyContent:'center',alignItems:'center'}}
		source={require('../../assets/images/splash_bg.png')} />
		 {/* <ImageBackground 
		 source={require('../../assets/images/splash_bg1.jpg')} 
		 	style={{width:'100%',height:'100%',justyfyContent:'center',alignItems:'center'}}>
			 <Image style={{height:80,width:'70%',left: '0%', top: '40%'}} 
		source={require('../../assets/images/splash_bg.png')} />
			
		</ImageBackground> */}
	
		</View>
	);
	}
}