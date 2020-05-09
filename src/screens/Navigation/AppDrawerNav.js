import React, {Component, PropType} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

import {Icon, Header} from 'native-base';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';

import HomeScreen from '../Home/HomeScreen';
import FavouriteScreen from '../Favourite/FavouriteScreen';
import AcademicCalenderScreen from '../StaticScreens/AcademicCalenderScreen';
import SplashScreen from '../StaticScreens/SplashScreen';
import GalleryScreen from '../Gallery/GalleryScreen';
import AboutUsScreen from '../StaticScreens/AboutUsScreen';
import MeetOurTeamScreen from '../MeetOurTeam/MeetOurTeamScreen';
import ContactUsScreen from '../StaticScreens/ContactUsScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeStackNavigator from './HomeStackNavigator';
import MeetOurTeamNav from './MeetOurTeamNav';
import CopyrightsScreen from '../StaticScreens/CopyrightsScreen';
import AcademicCalenderNav from './AcadamicCalenderNav';
import PrivacyPolicy from '../StaticScreens/PrivacyPolicy';
import PlacementScreen from '../StaticScreens/PlacementScreen';

const CustomDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
        

        {/* <Image style={{flex:1}}
                     source={require('../../assets/images/The_8th_Volume2.jpg')} /> */}
    <ImageBackground 
		 source={require('../../assets/images/eth_bg.jpeg')} 
		 	style={{flex:1,height:'100%'}}>
   
    <ImageBackground 	style={{flex:1}}
          imageStyle={{flex:1,resizeMode:'contain'}}
                     source={require('../../assets/images/eth.png')}>
                  <View style={{flex:1,flexDirection:'column',alignItems:'center',alignSelf:'center',justifyContent:'flex-end'}} >
                  
                  {/* <Text 
                      style={{fontFamily:'Montserrat-Bold',fontWeight:'900',fontSize:24}}>
                        The 8th Volume</Text> */}
                  <TouchableOpacity onPress={
                    ()=>{
                        props.navigation.navigate('The8ThVolume');
                      }
                   }  >
                    <Text style={{fontSize: 20,color:'#fff',padding:4}}>Know More</Text>
                  </TouchableOpacity>
                  </View>
                  </ImageBackground>
      
			
		    </ImageBackground>
                    

  
        <View  style={{flex:2}}>
          <ScrollView style={{flex:3,}}>
            <DrawerItems {...props} />
          </ScrollView>
        </View>
  
   
  </SafeAreaView>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions:{
        drawerIcon: ({tintColor}) => (
          <Icon  name='home' tintColor={tintColor} />
        
        ),

      }
      // navigation options in rootstack navigator
    },
    Favourite: {
      screen: FavouriteScreen,
      navigationOptions: {
        drawerLabel: 'From The Editors Desk',
        drawerIcon: ({tintColor}) => (
          <Icon type="MaterialIcons" name='edit' tintColor={tintColor} />
        ),
      },
    },
    PlacementScreen: {
      screen: PlacementScreen,
      navigationOptions: {
        drawerLabel: 'Placemen Mania',
        drawerIcon: ({tintColor}) => (
          <Icon type="MaterialIcons" name='people' tintColor={tintColor} />
        )
      },
    },
    AcademicCalender: {
      screen: AcademicCalenderNav,
      navigationOptions: {
        drawerLabel: 'Academic Calender',
        drawerIcon: ({tintColor}) => (
          <Icon type="MaterialIcons" name='today' tintColor={tintColor} />
        )
      },
    },
    AboutUs: {
      screen: AboutUsScreen,
      navigationOptions: {
        drawerLabel: 'About Us',
        drawerIcon: ({tintColor}) => (
          <Icon type="MaterialCommunityIcons" name='account-badge' tintColor={tintColor} />
          
        )
      },
    },
    MeetOurTeam: {
      screen: MeetOurTeamNav,
      navigationOptions: {
        drawerLabel: 'Meet Our Team',
        drawerIcon: ({tintColor}) => (
          <Icon type="MaterialIcons" name='people' tintColor={tintColor} />
        )
      },
    },
    ContactUs: {
      screen: ContactUsScreen,
      navigationOptions: {
        drawerLabel: 'Contact Us',
        drawerIcon: ({tintColor}) => (
          <Icon type="MaterialIcons" name='send' tintColor={tintColor} />
        )
      },
    },
    Copyrights:{
      screen: CopyrightsScreen,
      navigationOptions: {
        drawerLabel: 'Copyrights',
        drawerIcon: ({tintColor}) => (
          <Image
          style={{width: 25, height:25}}
          source={require('../../assets/images/copyrights.jpeg')}
        />
        )
      },
    },
    PrivacyPolicy:{
      screen:PrivacyPolicy,
      navigationOptions: {
        drawerLabel: 'Privacy Policy',
        drawerIcon: ({tintColor}) => (
          <Image
          style={{width: 25, height:25}}
          source={require('../../assets/images/privacy.jpeg')}
        />
        )
      },
    }

  },
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerComponent,
  },
);

const AppDrawerNav = createAppContainer(MyDrawerNavigator);

export default AppDrawerNav;
