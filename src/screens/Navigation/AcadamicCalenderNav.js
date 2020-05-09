import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Linking, TouchableHighlight } from 'react-native';

import Left from 'native-base'
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from "react-navigation"
import AcademicCalenderScreen from '../StaticScreens/AcademicCalenderScreen';
import AcademicCalenderChoose from '../StaticScreens/AcademicCalenderChoose';
const AcademicCalenderNav = createStackNavigator({

	AcademicCalenderChoose:{
		screen: AcademicCalenderChoose,
		navigationOptions: {
		header: null
		}
    },
    AcademicCalender: {
		screen: AcademicCalenderScreen,
		navigationOptions: {
			title:'Academic Calender'
			}
	},
},
{
	initialRouteName:'AcademicCalenderChoose',
}
);

export default createAppContainer(AcademicCalenderNav);