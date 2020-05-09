import React  , { Component ,PropType } from 'react';
import { View ,StyleSheet,Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';
import { Button, Icon,Text } from 'native-base';
import { Header } from 'react-native-elements';

export default class AcademicCalenderScreen extends Component{

	render(){
		const d = this.props.navigation.state.params.d;
		console.log(d);
		var source = ''
		if(d==1){
			source = {uri:'https://kiranbhanushali.github.io/DDUConnect/ac1.pdf',cache:true};
		}
		else{
			source = {uri:'https://kiranbhanushali.github.io/DDUConnect/academiccalender.pdf',cache:true};
		}

		return (
			<View style={styles.container}>
				 {/* <Header backgroundColor='fff' >
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
            <Icon name='menu' />
          </Button>
          <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> Academic Calender </Text>
          </Header>   */}
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
