import React  , { Component ,PropType } from 'react';
import { View ,Text ,} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import HomeScreen from './Home/HomeScreen'
import IntroScreen from './StaticScreens/IntroScreen'
import AppDrawerNav from './Navigation/AppDrawerNav'
class Main extends Component {
  constructor(){
        super();
        this.state = { firstLaunch: null};
    }
  componentDidMount(){
    
    AsyncStorage.getItem('already-launched').then(
      value =>{
        if(value == null){
         AsyncStorage.setItem('already-launched',JSON.stringify(true)); // No need to wait for `setItem` to finish, although you might want to handle errors
               this.setState({firstLaunch: true});
                                console.log(this.state.firstLaunch);
                               

             }else{
                this.setState({firstLaunch: false});
               
             }

      }
    )


  }
    
firstLaunchA = (value) =>{this.setState({firstLaunch:false})}
  render() {
    
      // console.log("from main       ");
      // console.log(this.props);
      if(this.state.firstLaunch == null){
           return <Text>{this.firstLaunch}</Text>
     }else if (this.state.firstLaunch == false){
         return <AppDrawerNav props={this.props}/>
     }
     else if(this.state.firstLaunch == true){
      
            return <IntroScreen props={this.props} myState={this.firstLaunchA}/>
        
     }
     
  }
 
}

export default Main;