import React, { Component, PropType } from 'react';
import { FlatList, AppRegistry, ImageBackground, View, ScrollView, Image, Dimensions, ActivityIndicator } from 'react-native';
import { Header, Title, Card, CardItem, Text, Left, Right, Button, Body, Container, Icon, Row } from 'native-base';
import PostScreen from '../screens/Post/PostScreen';
import CategoryHeader from './CategoryHeader';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';



export default class LatestArticle extends Component {

	componentDidMount() {
		if (!this.state.articles) {
			return fetch('https://raw.githubusercontent.com/Aatish13/DDUConnectDatabase/master/LatestArticles.json')
				.then((response) => response.json())
				.then((responseJson) => {
					this.setState({
						isLoading: false,
						articles: responseJson,
					}, function () {

					});

				})
				.catch((error) => {
					console.error(error);
				});
		}
		// else{
		// 	this.setState(isLoading: false,);
		// }
	}
	constructor(props) {
		super(props);
		this.state = { isLoading: true, }
		global.articles = this.state.articles;
	}

	content(item) {
		var title = item.title.rendered;

		while (
			title.includes("&nbsp;") || title.includes("<p>") ||
			title.includes("&#038;") || title.includes("</p>") ||
			title.includes("[&hellip;]") || title.includes("&#8211;") ||
			title.includes("&#8220;") || title.includes("&#8221;") ||
			title.includes("&#8216;") || title.includes("&#8217;")
			|| title.includes("&#8230;")
		) {
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

	render() {

		if (this.state.isLoading) {
			// console.log(this.state.isLoading);
			return (
				<View style={{ flexDirection: 'row', paddingHorizontal: widthPercentageToDP('2%') }}>
					<ContentLoader
						height={110}
						width={220}
						speed={3}
						primaryColor="#dbd9d9"
						secondaryColor="#ecebeb"
					>

					</ContentLoader>
					<View style={{ paddingHorizontal: widthPercentageToDP('2%') }}></View>
					<ContentLoader
						height={110}
						width={220}
						speed={3}

						primaryColor="#dbd9d9"
						secondaryColor="#ecebeb"
					>

					</ContentLoader>
					<View style={{ paddingHorizontal: widthPercentageToDP('2%') }}></View>
					<ContentLoader
						height={110}
						width={220}
						speed={3}

						primaryColor="#dbd9d9"
						secondaryColor="#ecebeb"
					>

					</ContentLoader>
				</View>

			)
		}

		return (
			<Body>

				<View style={{ flexDirection: 'row' }}>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}>
						<View style={{ flex: 1, flexDirection: 'row' }}>

							{this.state.articles.map((item, key) => (
								<View transparent style={{ margin: 5, borderRadius: 10 }} key={key}>
									<TouchableOpacity activeOpacity={0.9} onPress={() => {
										//	 console.log("hi");
										this.props.navigation.navigate('Post', item);
									}}
									>


										<Card style={{ borderRadius: 10 }} >
											<ImageBackground


												source={{
													uri: item._embedded['wp:featuredmedia'][0].source_url,
												}}
												style={{ flex: 1, width: 220, borderRadius: 10, height: 110 }}
												imageStyle={{ borderRadius: 10 }}>

												<View
													style={{
														position: 'absolute',

														top: 0,
														left: 0,
														right: 0,
														bottom: 0,
														backgroundColor: 'rgba(0,0,0,0.35)'
														, borderRadius: 10,
														height: 110
													}}></View>
												<View style={{ flex: 1, flexDirection: 'column' }}>
													<View
														style={{
															flex: 1, paddingRight: 8, paddingTop: 4

														}}>


														<CategoryHeader data={item} />




													</View>
													<View style={{
														flex: 1, flexDirection: 'column-reverse', padding: 5,
													}}>


														<Card transparent>

															<Text style={{ color: '#fff', fontSize: 10, fontFamily: 'Montserrat-Bold', fontWeight: 'bold' }}
																onPress={() => {
																	// console.log(item._embedded['wp:featuredmedia'][0].source_url);
																	this.props.navigation.navigate('Post', item);
																}}>
																{/* {item.title.rendered} */}
																{this.content(item)}
															</Text>


														</Card>
													</View>

												</View>

											</ImageBackground>

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
