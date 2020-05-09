
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Linking, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native'; // 0.6.9
import { Button, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SocialIcon ,Header} from 'react-native-elements';

const Form = t.form.Form;

const User = t.struct({
  fullname: t.String,
  email: t.String,
});
export default class ContactUsScreen extends Component{


  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{
             flex: 1,
             flexDirection: 'column',
             //justifyContent: 'center',
             alignItems: 'stretch',
             marginTop:-20
           }}>

          <Header backgroundColor='fff' >
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
            <Icon name='menu' />
          </Button>
          <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> Contact Us </Text>
          </Header>     

        <View style={{flex:3, backgroundColor:'powderblue'}}>
            <Text style={styles.title}>GET IN TOUCH</Text>
            <View style={styles.container}>
                    {/* <Form type={User}/> */}
                    <TouchableOpacity style={{alignSelf:'center',borderColor:'000',borderWidth:2,padding:5}} onPress={() => Linking.openURL('mailto:dduconnect@gmail.com')}><Text>Send Message</Text></TouchableOpacity>
            </View>
        </View>
		<View style={{flex:2,flexDirection:'row'}}>
		<View style={{ flex:1,backgroundColor: '#ffa31a',padding:10}}>
            <Text style={styles.title}>ADDRESS:</Text>
            <Text style={styles.text} onPress={() => Linking.openURL('https://goo.gl/maps/VAe1e6xiHypuHWfd9')}>Dharmsinh Desai University,</Text>
            <Text style={styles.text}> College Road, Nadiad</Text>
            <Text style={styles.text}> Gujarat 387001</Text>
        </View>
        <View style={{flex:1, backgroundColor: 'steelblue',padding:10}} >
            <Text style={styles.title}>EMAIL:</Text>
            <Text style={styles.text} onPress={() => Linking.openURL('mailto:dduconnect@gmail.com')}>dduconnect@gmail.com</Text>
            <Text style={styles.title}>FOLLOW US:</Text>
            <View style={{flex: 1, flexDirection: 'row',alignContent:'center',alignItems:'center',alignContent:'center'}}>
                  
                 <View style={{height:40,width:40}}>
                     <TouchableHighlight style={{}} onPress={() =>
                                                 Linking.openURL('https://www.instagram.com/dduconnect')}>
                           <SocialIcon
                           
                            button
                            type='instagram'
                          />
                        {/* //  <Image source={require('../../assets/images/instagram-logo.png')} style={{height:40, width:40}} /> */}
                         </TouchableHighlight>
                        </View>

                         <View style={{height:40,width:40}}>
                    <TouchableHighlight style={{}} onPress={() =>
                                                 Linking.openURL('https://www.facebook.com/dduconnect/')}>
                          {/* <Image source={require('../../assets/images/images.png')} style={{height:40, width:40}} />
                         */}
                         <SocialIcon
                           
                            button
                            type='facebook'
                          />
                         </TouchableHighlight>
                         </View>

                         <View style={{height:40,width:40}}>
                        <TouchableHighlight style={{}} onPress={() =>
                                                 Linking.openURL('https://www.linkedin.com/company/ddu-connect/about/')}>
                        {/* <Image source={require('../../assets/images/Li.png')} style={{height:40, width:40}} /> */}
                        <SocialIcon
                            
                            button
                            type='linkedin'
                          />
                        </TouchableHighlight>
                        </View>
                        <View style={{height:40,width:40}}>
                        <TouchableHighlight style={{}} onPress={() =>
                                                 Linking.openURL('https://www.youtube.com/channel/UCL_HeXMG8OnytZZtIRgkpQA')}>
                         {/* <Image source={require('../../assets/images/youtube.png')} style={{height:40, width:40}} /> */}
                         <SocialIcon
                            button
                            type='youtube'
                          />
                         </TouchableHighlight>
                        </View>
                    
                    
            </View>
        </View>
		</View>
       

      </View>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontFamily: 'fantasy',
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'fantasy',
    //fontStyle:"bold",
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    paddingVertical:15,
  },
   container: {
       justifyContent: 'center',
       marginTop: 40,
       padding: 20,
   },
});