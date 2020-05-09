import React,{ Component ,PropType, Children } from 'react';
import {FlatList,ActivityIndicator,ImageBackground,View,ScrollView,Image,TouchableOpacity, Dimensions,} from 'react-native';
import {Header,Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';
import CategoryPostCard from '../../components/CategoryPostCard';
import ReactPlaceholder from 'react-placeholder';

import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import Svg, {Circle, Rect, } from 'react-native-svg'


export default class PostByCategoryScreen extends Component{

    static navigationOptions = ({navigation}) =>{
        //pending 
        const { params = {} } = navigation.state;
		return {
			headerTitle: <Text style={{color:'black'}}> {params.headerTitles} </Text>,
		
		}

    }
    
    constructor(props) {
        super(props);
        this.state={
            isLoading: true,
        }
        global.articles = this.state.articles;
    }

    componentDidMount(){
            // console.log(this)
            const CATEFORY_LINKS = {
                79:"'Tech' it easy",
                111:"Dentistry arround the gloabe",
                129:"Pharmacy: Then & Now",
                82:"Connect-ions",
                83:"Fiction",
                90:"Open Letter",
                91:"Verses",
                81:"Writers' Lounge ",
                133:"Alumni Speaks",
                134:"DDU Speaks",
                135:"Hall of Fame",
                132:"Interview",
                121:"More Content",
                84:"Non-Tech",
                80:"Tech",
            }; 
            const cid = this.props.navigation.state.params.cid;
            console.log(cid);
            const cname = CATEFORY_LINKS[cid];  
            this.props.navigation.setParams({ headerTitles: cname });
            // https://raw.githubusercontent.com/Aatish13/DDUConnectDatabase/master/Category80.json

            var base = `https://raw.githubusercontent.com/Aatish13/DDUConnectDatabase/master/Category${cid}.json`;
            // if(cid=='173') {
            //     base = "https://dduconect.in/wp-json/wp/v2/posts/?_embed&&categories=173";

            // }
            console.log(base);
            
            if(!this.state.articles){
                return fetch(base)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                    isLoading: false,
                    articles: responseJson,
                    }, function(){
            
                    });
            
                })
                .catch((error) =>{
                    console.error(error);
                });
            }

          
            
    }
    render(){
              
        if(this.state.isLoading){
			return(
			//   <View style={{flex: 1,justifyContent:'center',padding: 20}}>
			// 	<ActivityIndicator size='large'/>
            //   </View>
            
            // <ReactPlaceholder  customPlaceholder={<CategoryPostCard />}>
            // <CategoryPostCard item={

            // }/>  
            // </ReactPlaceholder>
            <View style={{flex:1,width:'98%',alignContent:'center',alignSelf:'center'}}>
                <View style={{flex:1,paddingVertical:10}}>
                <SvgAnimatedLinearGradient
                primaryColor="#dbd9d9"
                    secondaryColor="#ecebeb"
                  height={250}
                  style={{flex:1}}
                  width={Dimensions.get('window').width*0.95}>

                  <Rect x={Dimensions.get('window').width/50} y="10" rx="0" ry="0" width={Dimensions.get('window').width/1.04} height="150" /> 
                  <Rect x={Dimensions.get('window').width/50}y="170" rx="0" ry="0" width={Dimensions.get('window').width/1.04} height="19" /> 
                  <Rect x={Dimensions.get('window').width/50}y="195" rx="0" ry="0" width={Dimensions.get('window').width/1.04} height="19" /> 
                  <Rect x={Dimensions.get('window').width/50}y="220" rx="0" ry="0" width={Dimensions.get('window').width/1.04} height="19" /> 
        
   
                 </SvgAnimatedLinearGradient>


                  </View>
                  <View style={{paddingBottom:255}} />
                  <View style={{flex:1,paddingVertical:10}}>
                  <SvgAnimatedLinearGradient
                primaryColor="#dbd9d9"
                    secondaryColor="#ecebeb"
                  height={250}
                  style={{flex:1}}
                  width={Dimensions.get('window').width*0.95}>

                  <Rect x={Dimensions.get('window').width/50} y="10" rx="0" ry="0" width={Dimensions.get('window').width/1.04} height="150" /> 
                  <Rect x={Dimensions.get('window').width/50}y="170" rx="0" ry="0" width={Dimensions.get('window').width/1.04} height="19" /> 
                  <Rect x={Dimensions.get('window').width/50}y="195" rx="0" ry="0" width={Dimensions.get('window').width/1.04} height="19" /> 
                  <Rect x={Dimensions.get('window').width/50}y="220" rx="0" ry="0" width={Dimensions.get('window').width/1.04} height="19" /> 
                 
   
                 </SvgAnimatedLinearGradient>


                  </View>

                  <View style={{paddingBottom:255}} />
                  <View style={{flex:1,paddingVertical:10}}>
                  <SvgAnimatedLinearGradient
                primaryColor="#dbd9d9"
                    secondaryColor="#ecebeb"
                  height={250}
                  style={{flex:1}}
                  width={Dimensions.get('window').width*0.95}>

                  <Rect x={Dimensions.get('window').width/50} y="10" rx="0" ry="0" width={Dimensions.get('window').width/1.04} height="150" /> 
                  <Rect x={Dimensions.get('window').width/50}y="170" rx="0" ry="0" width={Dimensions.get('window').width/1.04} height="19" /> 
                  <Rect x={Dimensions.get('window').width/50}y="195" rx="0" ry="0" width={Dimensions.get('window').width/1.04} height="19" /> 
                  <Rect x={Dimensions.get('window').width/50}y="220" rx="0" ry="0" width={Dimensions.get('window').width/1.04} height="19" /> 
                  
   
                 </SvgAnimatedLinearGradient>


                  </View>


            </View>
            
			)
        }
        //  console.log(this.props.navigation);

        return(

           
            <Body>
          
          <View >
            <ScrollView>
              
              
			  <View style={{flex:1}}>
				
				  {this.state.articles.map((item, key) => (
                      
						<CategoryPostCard  item={item} key={key} navigation={this.props.navigation} />
					))}


			  </View>
              
            </ScrollView>
          </View>
        </Body>
    );
	}

}