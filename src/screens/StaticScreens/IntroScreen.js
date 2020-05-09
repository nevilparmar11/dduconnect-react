import React  , { Component ,PropType } from 'react';
import { View ,Text ,} from 'react-native';
import Main from '../Main'
import AppIntroSlider from 'react-native-app-intro-slider';
import IntroScreenDetails from '../../static/IntroScreenDetails';


export default class IntroScreen extends Component{
 constructor(props) {
    super(props);
     
   }
   _renderNextButton = () => {
    return (
      <View style={{flex:1}}>
         <Text > Next </Text> 
      </View>
    );
  };

  _renderDoneButton = () => {

    return (
     <View  >
    
              <Text > I Accept </Text>
      </View>
    );
  };
 _onDone = () => {
  // User finished the introduction. Show real app through
  // navi this.setState({firstLaunch: "false"});this
    
      this.props.myState(false);
  
    
  }
   render(){

   	 return  <AppIntroSlider
				    slides={ IntroScreenDetails }
				    renderDoneButton={this._renderDoneButton}
				    renderNextButton={this._renderNextButton}
				    onDone={this._onDone}
    				/>
   }


 }