import React  , { Component } from 'react';
import { View ,Text , StyleSheet, Image,} from 'react-native';
import { Header } from 'react-native-elements';
import {Icon,Button} from 'native-base';
import IMAGES from '../../assets/images';
export default class CopyrightsScreen extends Component{
static navigationOptions = {
    drawerLabel: 'Copyrights',
    
  };
	render(){
    console.log(this.props.navigation.toggleDrawer);
		return (
			<View style={{flex:1,marginTop:-20}}>
				<Header backgroundColor='fff' >
				<Button transparent onPress={this.props.navigation.toggleDrawer}>
					<Icon name='menu' />
				</Button>
				<Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> Copyrights </Text>
				</Header>  

				<View style={styles.container}>
			  
			  <Image
				source={IMAGES.dclogo}
				style={{ width: 300, height: 96 }}
			  />
			  <Text style={{padding:20,fontSize:14}}>Version 1.0.0 </Text>
			  <Text style={{padding:10}}> www.dduconnect.in </Text>
				
			</View>
			<View
            style={{
              position: 'relative',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.0)',padding:7,borderRadius:10
            }}>
			  <Text style={{padding:10}}> {'\u00A9'} DDU Connect All rights reserved</Text>
			
            <Text style={{ color: 'Black',fontSize:10 }}>Developed By DDU Connect</Text>
          </View>

			</View>
			
		  );
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: 20,
    backgroundColor: '#fff',
    padding: 8,
  },
  
});
