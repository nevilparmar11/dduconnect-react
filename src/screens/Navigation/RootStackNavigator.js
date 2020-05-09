









import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from "react-navigation"
import SplashScreen from '../StaticScreens/SplashScreen'
import Main from '../Main'
import IntroScreen from '../StaticScreens/IntroScreen'
const RootStackNavigator = createSwitchNavigator({
	Splash: {
		screen: SplashScreen,
		navigationOptions: {
		header: null
		}
	},
	Main: {
		screen: Main,
		navigationOptions: {
		header: null
		}
	},
	Intro:{
		screen: IntroScreen,
		navigationOptions: {
		header: null
		}
	}
},
{
	initialRouteName:'Splash',
}
);

export default createAppContainer(RootStackNavigator);