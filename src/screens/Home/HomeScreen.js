import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,Modal,ActivityIndicator,TouchableHighlight,ScrollView,Image,Alert, Dimensions,StyleSheet,Picker} from 'react-native';
import {Header,Separator,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row,} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import Buzz from '../../components/Buzz'
import LatestArticle from '../../components/LatestArticle'
import Category from '../../components/Category'
import OneSignal from 'react-native-onesignal';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SearchBarComponent from '../../components/SearchBarComponent.js'
  
export default class HomeScreen extends Component{
	static navigationOptions = ({navigation}) =>{
		return {
			headerTitle: <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> DDUConnect </Text>,
			headerLeft: (
				<Button transparent  onPress={navigation.toggleDrawer}>
					<Icon name='menu'  />
				</Button>
			),
			
		}

	}
	constructor(properties) {
		super(properties);
		this.state ={ isLoading: true, modalVisible: false,firstTime:true,link_for_vote:"https://docs.google.com/forms/d/e/1FAIpQLSdiNAAuB_EzclqTiq3qX5DvtW7GxZzdsqeJmTEiXYfc1GUU5Q/viewform"}
		
		OneSignal.init("a049d642-1cbe-4905-9167-2fd53771083a", {kOSSettingsKeyAutoPrompt : true});// set kOSSettingsKeyAutoPrompt to false prompting manually on iOS

		OneSignal.addEventListener('received', this.onReceived);
		OneSignal.addEventListener('opened', this.onOpened);
		OneSignal.addEventListener('ids', this.onIds);

		// this.timer = setInterval(()=> this.getMovies(), 10000)
	  }
	  componentDidMount(){
		// Start counting when the page is loaded

			// uncomment below line for vote now .
			// this.timer = setInterval(()=> this.getMovies(), 5000)
	

		// AsyncStorage.getItem('firstTime').then(
		// 	value =>{
		// 		console.log(value);
		// 	  if(value == null){
		// 		this.timer = setInterval(()=> this.getMovies(), 5000)
		// 		AsyncStorage.setItem('firstTime',JSON.stringify(true)); // No need to wait for `setItem` to finish, although you might want to handle errors
		// 		   }
		// 		else if(value=="true"){
		// 			this.timer = setInterval(()=> this.getMovies(), 5000)
		// 			 this.setState({firstTime:true});
		// 		   }else{
		// 		//	AsyncStorage.setItem('firstTime',JSON.stringify(true)); // No need to wait for `setItem` to finish, although you might want to handle errors
				
		// 		   }
	  
		// 	}
		//   )	
	
   }
	  componentWillUnmount() {
		OneSignal.removeEventListener('received', this.onReceived);
		OneSignal.removeEventListener('opened', this.onOpened);
		OneSignal.removeEventListener('ids', this.onIds);
	  }
	
	  onReceived(notification) {
		console.log("Notification received: ", notification);
	  }
	
	  onOpened(openResult) {
		console.log('Message: ', openResult.notification.payload.body);
		console.log('Data: ', openResult.notification.payload.additionalData);
		console.log('isActive: ', openResult.notification.isAppInFocus);
		console.log('openResult: ', openResult);
	  }
	
	  onIds(device) {
		console.log('Device info: ', device);
	  }
	  setModalVisible(visible) {
		this.setState({modalVisible: visible});
	  }
	  goforvote=(x)=>{
		  
		Alert.alert(
		'Star Of DDU',
		'Vote to your favourite contestant',
		[
		 
		  { 
			  text:'Vote Now!',
			   onPress: () => { 
				   this.setState({firstTime:false})
					// this.storeData();
				   x.props.navigation.navigate('AlertWebView',{link:x.state.link_for_vote});
				}
		 },
		],
		{cancelable: true},
	  );
	  }
	  
	//   storeData = async () => {
	// 	try {
	// 	  await AsyncStorage.setItem('firstTime',JSON.stringify(false))
	// 	} catch (e) {
	// 	  // saving error
	// 	}
	//   }
	  async getMovies(){
		  
		if(this.state.firstTime==true){
			console.log("get ");
		fetch('https://raw.githubusercontent.com/Aatish13/DDUConnectDatabase/master/votingStatus.json', {method: "GET"})
		 .then((response) => response.json())
		 .then((responseData) =>
		 {
		   //set your data here
			console.log(responseData);
			if(responseData.VotingStatus == true){
				this.setState({modalVisible :true,link_for_vote:responseData.link});
				
			}
			else{
				this.setState({modalVisible :false});

			}
			console.log(this.state.modalVisible);
		 })
		 .catch((error) => {
			 console.error(error);
		 });
	   
		}
		
	   }
		
	
	render(){
		
		
		// if(this.state.isLoading){
		// 	return(
		// 	  <View style={{flex: 1,justifyContent:'center',padding: 20}}>
		// 		<ActivityIndicator size='large'/>
		// 	  </View>
		// 	)
		// }
		
		return(
			<Container style={styles.container}>
					
			<View style={{height:100,width:100,justifyContent:'center',alignItems:'center',position:"absolute",justifyContent:"center",alignItems:"center"}}>
			 { this.state.firstTime && this.state.modalVisible && this.goforvote(this)}
				</View>

			<ScrollView>

				<SearchBarComponent />
				<View style={{margin:5}}></View>
				<Category navigation={this.props.navigation}/>
				
				<Text style={{fontSize:20,paddingLeft:10,fontFamily:'Montserrat-Light',fontWeight:'bold'}}>Latest Articles</Text>
				<LatestArticle  navigation={this.props.navigation}/>
				 {/* <TouchableOpacity 
				onPress={()=>{
                              this.props.navigation.navigate('AlertWebView',{link:this.state.link_for_vote})
                              }
				}
				  style={{flex:1,justifyContent:'center',alignItems:'center',borderColor:'#222',borderWidth:1}}>
				 <Text  >Vote For Star Of DDU</Text>
				  </TouchableOpacity> */}
				<Text style={{fontSize:20,paddingLeft:10,fontFamily:'Montserrat-Bold',fontWeight:'bold'}} >Buzz</Text>
				<Buzz navigation={this.props.navigation}/>
			</ScrollView>

		</Container>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		fontFamily:'Montserrat-Medium'
	  },

}
);
