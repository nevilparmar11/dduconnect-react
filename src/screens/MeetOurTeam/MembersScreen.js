import React, {Component, PropType} from 'react';
import {View, ActivityIndicator,Image, ScrollView} from 'react-native';
import {
  Header,
  Title,
  Card,
  Text,
  Left,
  Right,
  Button,
  Body,
  Container,
  Icon,
  CardItem,
} from 'native-base';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default class MembersScreen extends Component {

  componentDidMount() {
      this.setState({d:this.props.navigation.state.params})
    if (!this.state.mem) {
      return fetch(
        'https://kiranbhanushali.github.io/DDUConnect/json/teams_8th.json',
      )
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              nmem:responseJson[this.props.navigation.state.params.d],
            },
            function() {},
          );
        })
        .catch(error => {
          console.error(error);
        });
    }
    // console.log(this.props);
  }
  constructor(props) {
    super(props);
    this.state = {isLoading: true,};
    global.mem = this.state.mem;
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1,justifyContent:'center',alignSelf:'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    // console.log(this.props.navigation.state.params)
 
    console.log(this.state.nmem);
    return (
      <Container>
        <View style={{flex: 1}}>
          <ScrollView>
          
          <View style={{flex: 1,width:widthPercentageToDP('65%'),justifyContent:'center',alignSelf:'center'}}>
            {this.state.nmem.members.map((item, key) => (
              <Card style={{flex:1,alignItems:'center',padding:8}} key={key}>
                 <Image  	source={{	uri:item.image
											}} style={{width:100,height:100,borderRadius:100/2}}/>
                <Text style={{fontSize:14}}> {item.name}</Text>
                <Text style={{fontSize:7}}>{item.post}</Text>
                 
              </Card>
            ))}
          </View>
          </ScrollView>
        </View>
      </Container>
    );
  }
}
