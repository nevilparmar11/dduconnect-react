import React  , { Component ,PropType } from 'react';
import { View ,Text ,Button} from 'react-native';

export default class GalleryScreen extends Component{
	static navigationOptions = {
    drawerLabel: 'Gallery',
    
  };
	render(){
		return <Text> GalleryScreen </Text>
	}

}