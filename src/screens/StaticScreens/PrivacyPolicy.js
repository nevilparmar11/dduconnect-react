import React  , { Component ,PropType } from 'react';
import { View ,StyleSheet,Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';
import { Button, Icon,Text } from 'native-base';
import { Header } from 'react-native-elements';

export default class PrivacyPolicy extends Component{

	render(){
		
		var source =  {uri:'https://kiranbhanushali.github.io/DDUConnect/privacypolicy.pdf',cache:true};
		

		return (
			<View style={styles.container}>
				 <Header backgroundColor='fff' >
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
            <Icon name='menu' />
          </Button>
          <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}>Privacy Policy </Text>
          </Header>  
			<Pdf
				source={source}
				onLoadComplete={(numberOfPages,filePath)=>{
					// console.log(`number of pages: ${numberOfPages}`);
				}}
				onPageChanged={(page,numberOfPages)=>{
					// console.log(`current page: ${page}`);
				}}
				onError={(error)=>{
					console.log(error);
				}}
				onPressLink={(uri)=>{
					console.log(`Link presse: ${uri}`)
				}}
				style={styles.pdf}/>
		</View>
		);
		
	}

}

const styles = StyleSheet.create({
    container: {
		flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop:-20,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
