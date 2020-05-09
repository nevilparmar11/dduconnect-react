import React  , { Component ,PropType } from 'react';
import { View ,Text ,Button, ImageBackground,Image} from 'react-native';

export default class The8thVolumeScreen extends Component{

	
	render(){
		return(
            <View>
                    <ImageBackground style={{width:'100%',height:'100%',justifyContent:'center'}} imageStyle={{width:'100%',resizeMode:'cover'}} source={require('../../assets/images/eth_bg.jpeg')}>
                        <Image style={{height:215,width:'100%',alignSelf:'center',justifyContent:'center'}}  source={require('../../assets/images/eth.png')}/>
                        
                        <Text style={{color:'#fff',marginTop:70,marginLeft:40,padding:15,shadowRadius:100}}> 
                        DDU Connect is Dharamsinh Desai University’s official online platform entirely run by students. It provides DDUians a platform to showcase their creativity and help enhance the connectivity amongst students from various faculties of DDU.
                        
                        After completing seven glorious years, DDU Connect has evolved to explore the venture of creativity. Presenting to you the 8th volume, a step to transcend creativity to greater heights.
                        We are soon launching a diverse application that would connect us better than ever before. So stay tuned, stay updated. 
                        </Text>
                        

                        </ImageBackground>
            </View>

        ) }

}