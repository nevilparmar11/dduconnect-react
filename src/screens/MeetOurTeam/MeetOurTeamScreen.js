import React, { Component, PropType } from 'react';
import { View, Text, TouchableOpacity, Picker, StyleSheet, SafeAreaView, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Body, Icon, Button, } from 'native-base';
import { Header } from 'react-native-elements'
export default class MeetOurTeamScreen extends Component {
  // static navigationOptions = ({navigation}) =>{
  // 	return {
  // 		headerTitle: <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> MeetOurTeam </Text>,
  // 		headerLeft: (
  // 			<Button transparent onPress={navigation.toggleDrawer}>
  // 				<Icon name='menu' />
  // 			</Button>
  // 		),
  // 		headerRight:(
  // 			<TouchableOpacity >
  // 				<Icon type="FontAwesome" name='ellipsis-v' />
  // 			</TouchableOpacity>
  // 		),
  // 	}

  // }
  render() {
    return (



      <Body style={{ marginTop: -20, padding: 0 }}>
        <Header backgroundColor='fff'>
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
            <Icon name='menu' />
          </Button>
          <Text style={{ fontFamily: 'Montserrat-Bold', fontWeight: '900' }}> Meet Our Team </Text>
        </Header>
        {/* main */}
       <View style={{flex:1,paddingHorizontal:10}}>

       
      <View style={styles.separator} />
          <TouchableOpacity  onPress={() => { this.props.navigation.navigate('Members', { d: 1 }); }}>
                <View style={{flexDirection:'row',alignItems:'flex-start',}}>
               <Text style={styles.ButtonLayout}>EDITORIAL</Text>
                </View>
          </TouchableOpacity>

            <View style={styles.separator} />
            <TouchableOpacity transparent onPress={() => { this.props.navigation.navigate('Members', { d: 0 }) }}>
              <Text style={styles.ButtonLayout} >DESIGNING</Text>
            </TouchableOpacity>
            <View style={styles.separator} />

            <TouchableOpacity transparent onPress={() => { this.props.navigation.navigate('Members', { d: 2 }) }}>
              <Text style={styles.ButtonLayout}>EVENT MANAGEMENT & ADVERTISING</Text>
            </TouchableOpacity>

            <View style={styles.separator} />
            
            <TouchableOpacity transparent onPress={() => { this.props.navigation.navigate('Members', { d: 3 }) }}>
              <Text style={styles.ButtonLayout}>FINANCE</Text>
            </TouchableOpacity>

            <View style={styles.separator} />

            <TouchableOpacity transparent onPress={() => { this.props.navigation.navigate('Members', { d: 4 }) }}>
              <Text style={styles.ButtonLayout}>PHOTOGRAPHY</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity transparent onPress={() => { this.props.navigation.navigate('Members', { d: 5 }) }}>
              <Text style={styles.ButtonLayout}>WEB DEVELOPMENT</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity transparent onPress={() => { this.props.navigation.navigate('Members', { d: 6 }) }}>
              <Text style={styles.ButtonLayout} >SUPPORTING</Text>
            </TouchableOpacity>
            <View style={styles.separator} />

       </View>

        
      </Body>

    );
  }
}

const styles = StyleSheet.create({
  ButtonLayout: { fontSize: 15, color: '#000000', backgroundColor: "#ffffff", padding: 8,width:'100%',fontWeight:"bold",marginVertical:8}
  ,
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 2,
  },
  container: {
    flex: 1,
    marginTop: 2,
    marginHorizontal: 16,
  },
  iconstyle: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.0)',
    padding: 7,
    borderRadius: 10,
  },
  titlestyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.0)',
    padding: 7,
    borderRadius: 10,
  },
  separator: {
    marginVertical: 0.2,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
