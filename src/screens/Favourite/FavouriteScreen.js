import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,

} from 'react-native';

import {Header,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';

export default class FavouriteScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Favourite',
    
  };
    render(){
      return (
        <View
          style={{ flex:1,width: '100%', height: '100%', backgroundColor: '#3D4051' }}>
         <View style={{marginTop:20,marginLeft:20}}>
          <TouchableOpacity   onPress={this.props.navigation.toggleDrawer}>
            <Icon color='#fff' backgroundColor='#fff' style={{color:'#fff'}} name='menu' />
          </TouchableOpacity>
          </View>
          <SafeAreaView style={styles.con}>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold', fontSize: 30 ,
      color: 'white'}}>
                  {' '}
                  {'\n'}
              
                  From The {'\n'} {'\t'} {'\t'}{'\t'}
                  <Text style={{ fontWeight: 'bold',color:'#db5b5c', fontSize: 30 }}> Editor's </Text>
                  Desk{' '}
                </Text>
                {'\n'}
                {'\n'}
                <Text style={{ fontWeight: 'bold' ,
      color: 'white'}}>
                  {' '}
                  When Success Reveals its Secrets
                </Text>
                {'\n'}
                {'\n'}
                Have you ever compared the life of a bird and an ant? When their
                shelters are concerned, the birds isolate themselves from their
                own species and work tirelessly towards weaving its nest. While,
                it takes generations for ants to build their little home. But what
                happens when storm hit them? Where birds fly off from their nests
                for better shelters, the anthill roar louder than storm to protect
                its creators.
                {'\n'}
                {'\n'}
                In life, we are often disappointed by the success of an
                undeserving candidate. But if we compare their success stories
                with the stories of successful tycoons, we find the few chapters
                to be missing.These chapters talk about dedication, sincerity and
                team-spirit. Now, it is unto us if we want to weep on our failure
                like the little bird or, to add these missing chapters towards
                building our success story.
                {'\n'}
                {'\n'}
                We, as always, await your stories of adventures and experiences at
                dduconnect@gmail.com.
  {'\n'}
                {'\n'}
                Nirmal Sunil{'\n'}
        <Text style={{ fontWeight: 'bold',
      color: 'white' }}>         
  Editor-in-Chief</Text>
  {'\n'}
                {'\n'}
              </Text>
            </ScrollView>
          </SafeAreaView>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    cont: {
      flex: 1,
      marginTop: 1,
    },
    scrollView: {
      marginHorizontal: 20,
    },
    text: {
      fontSize: 14,
      color: 'white',
      marginBottom:50
    },
  });
  