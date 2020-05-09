import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,ScrollView,Image, Dimensions,ActivityIndicator} from 'react-native';
import {Header,Title,Card,Text,Left,Right,Button,Body,Container,Icon, CardItem,} from 'native-base';
import moment from "moment";
import {widthPercentageToDP , heightPercentageToDP } from 'react-native-responsive-screen';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import Svg, {Circle, Rect, } from 'react-native-svg'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Buzz extends Component{

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
            
            const base = `https://raw.githubusercontent.com/Aatish13/DDUConnectDatabase/master/Buzz.json`;

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
  contentTitle(item){
		var title=item.title.rendered;

		while(
		  title.includes("&nbsp;")  || title.includes("<p>") ||
		  title.includes("&#038;") ||  title.includes("</p>") ||
		  title.includes("[&hellip;]") || title.includes ("&#8211;") ||
		  title.includes("&#8220;") ||  title.includes("&#8221;") ||
		  title.includes("&#8216;") || title.includes("&#8217;")   
		  || title.includes("&#8230;")        
		  ){
		  title = title.replace("&nbsp;", " ");
		  title = title.replace("<p>", "");
		  title = title.replace("&#038;", "&");
		  title = title.replace("</p>", "");
		  title = title.replace("[&hellip;]", "");
		  title = title.replace("&#8211;", "-");
		  title = title.replace("&#8220;", "\"");
		  title = title.replace("&#8221;", "\"");
		  title = title.replace("&#8216;", "\'");
		  title = title.replace("&#8217;", "\'");
		  title = title.replace("&#8230;", "...");
		 }
		return title;
	  }
	

  content({excerpt}){
    var tempdetails=excerpt.rendered;
    
    while(
      tempdetails.includes("&nbsp;")  || tempdetails.includes("<p>") ||
      tempdetails.includes("&#038;") ||  tempdetails.includes("</p>") ||
      tempdetails.includes("[&hellip;]") || tempdetails.includes ("&#8211;") ||
      tempdetails.includes("&#8220;") ||  tempdetails.includes("&#8221;") ||
      tempdetails.includes("&#8216;") || tempdetails.includes("&#8217;")   
      || tempdetails.includes("&#8230;")        
      ){
      tempdetails = tempdetails.replace("&nbsp;", " ");
      tempdetails = tempdetails.replace("<p>", "");
      tempdetails = tempdetails.replace("&#038;", "&");
      tempdetails = tempdetails.replace("</p>", "");
      tempdetails = tempdetails.replace("[&hellip;]", "");
      tempdetails = tempdetails.replace("&#8211;", "-");
     tempdetails = tempdetails.replace("&#8220;", "\"");
      tempdetails = tempdetails.replace("&#8221;", "\"");
      tempdetails = tempdetails.replace("&#8216;", "\'");
      tempdetails = tempdetails.replace("&#8217;", "\'");
     tempdetails = tempdetails.replace("&#8230;", "...");
     }
   
    return tempdetails;
  }
	render(){
    // console.log(this.state.articles)
		if(this.state.isLoading){
			return(
			 <View style={{flex:1,justifyContent:'center',width:widthPercentageToDP('97%'),alignSelf:'center',alignContent:'center'}}>
           <View style={{flex: 1,justifyContent:'center',width:widthPercentageToDP('97%'),alignSelf:'center',alignContent:'center'}}>
           <SvgAnimatedLinearGradient
                primaryColor="#dbd9d9"
                    secondaryColor="#ecebeb"
                  height={250}
                  style={{flex:1}}
                  width={Dimensions.get('window').width}>

                  <Rect x={Dimensions.get('window').width/50} y="10" rx="0" ry="0" width={Dimensions.get('window').width/1.07} height="150" /> 
                  <Rect x={Dimensions.get('window').width/50}y="170" rx="0" ry="0" width={Dimensions.get('window').width/1.07} height="19" /> 
                  <Rect x={Dimensions.get('window').width/50}y="195" rx="0" ry="0" width={Dimensions.get('window').width/1.07} height="19" /> 
                  <Rect x={Dimensions.get('window').width/50}y="220" rx="0" ry="0" width={Dimensions.get('window').width/1.07} height="19" /> 
        
   
                 </SvgAnimatedLinearGradient>
                 <SvgAnimatedLinearGradient
                primaryColor="#dbd9d9"
                    secondaryColor="#ecebeb"
                  height={250}
                  style={{flex:1}}
                  width={Dimensions.get('window').width}>

                  <Rect x={Dimensions.get('window').width/50} y="10" rx="0" ry="0" width={Dimensions.get('window').width/1.07} height="150" /> 
                  <Rect x={Dimensions.get('window').width/50}y="170" rx="0" ry="0" width={Dimensions.get('window').width/1.07} height="19" /> 
                  <Rect x={Dimensions.get('window').width/50}y="195" rx="0" ry="0" width={Dimensions.get('window').width/1.07} height="19" /> 
                  <Rect x={Dimensions.get('window').width/50}y="220" rx="0" ry="0" width={Dimensions.get('window').width/1.07} height="19" /> 
        
   
                 </SvgAnimatedLinearGradient>
			    
			     </View>
       </View>
			)
		}

        return(
            <Body>
          
          <View >
            <ScrollView>
              
            
			  <View style={{flex:1}}>
				
				  {this.state.articles.map((item, key) => (
						<View style={{ margin: 5}} key={key}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => {
													 //console.log("hi");
                           this.props.navigation.navigate('Post',item);
											}} 							
						> 
							<Card style={{borderRadius: 10 }}>
							<ImageBackground 
									source={{
											uri:   item._embedded['wp:featuredmedia'][0].source_url,
											}}
									style={{ flex:1, height:150, }}
									imageStyle={{borderTopRightRadius:10,borderTopLeftRadius:10,flex:1,width:'100%'}}>
						
									<View style={{flex:1,flexDirection:'column',}}>
										<View style={{
												flex:1,flexDirection:'column-reverse',padding:5,
											}}>
										
										<View
            style={{
              position: 'absolute',

              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.35)'
			  ,
			  height:150
            }}></View>
										 <Card  transparent>            
											<Text style={{ color: '#fff',fontSize:15, fontWeight: 'bold' }}
												onPress={() => {
													// console.log(item._embedded['wp:featuredmedia'][0].source_url);
												 this.props.navigation.navigate('Post',item);
											}}>
                        {this.contentTitle(item)} 
												{/* {item.title.rendered} */}
											</Text>

										</Card>
										</View>	
										
									</View>
									
								</ImageBackground>
                      
											<Text style={{fontSize:10,marginTop:8,padding:10}} numberOfLines={3}>
												{this.content(item)} 
                        {/* item.excerpt.rendered */}
											</Text>
                      <View style={{flex:1,flexDirection:'row-reverse',justifyContent:'space-between',padding:10}}>
                            <TouchableOpacity onPress={()=>{
                              this.props.navigation.navigate('Post',item)}
                              } style={{alignItems:'flex-end',}}>
                            <Text style={{fontSize:10,color:'#0d254a',alignSelf:'flex-end',fontWeight:"900",fontFamily:'Montserrat-Bold'}}> Read More..... </Text>
                          </TouchableOpacity>

                          <Text style={{fontSize:10,color:'#555',alignSelf:'flex-start',fontFamily:'Montserrat-Light'}}>
                            {moment(item.date).format("MMMM D, YYYY")}
                          </Text>
                          
                        </View>


							</Card>
              </TouchableOpacity>
						</View>
					))}


			  </View>
              
            </ScrollView>
          </View>
        </Body>
    );
	}

}