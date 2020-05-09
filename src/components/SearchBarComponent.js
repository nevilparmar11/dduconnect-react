import React  , { Component ,PropType } from 'react';
import { View ,StyleSheet,Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';
import { Button, Icon,Text  ,Item} from 'native-base';
import { Header,SearchBar } from 'react-native-elements';

export default class SearchBarComponent extends Component{

	constructor(){
		super();
		this.state={search:''}
	}
	updateSearch = search =>{
		this.setState({search});
	}
	render(){
	
	
		return (
			<View style={{backgroundColor: '#000000'}}>
			<SearchBar lightTheme="true"
				placeholder="Search Here ..."
				value={this.state.search}
				onChangeText={this.updateSearch}
				inputStyle={{backgroundColor: '#ececec'}}
				containerStyle={{backgroundColor: '#fff'}}
				inputContainerStyle={{backgroundColor: '#ececec',borderRadius: 20}}
			 />
	
			</View>
			
		);
		
	}

}


