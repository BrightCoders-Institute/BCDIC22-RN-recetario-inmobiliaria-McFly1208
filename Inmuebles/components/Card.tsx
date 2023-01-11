import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import database from '../database/muebles.json';
import Property from '../classes/propiedad';




const parseddatabase = database as Property[];


const { width } = Dimensions.get('window');

export default class App extends Component {
	scrollView: any;

	componentDidMount() {
		setTimeout(() => { this.scrollView.scrollTo({ x: -30 }); }, 1); // scroll view position fix
	}

	render() {
		return (
			<ScrollView
				ref={(scrollView) => { this.scrollView = scrollView; }}
				style={styles.container}
				//pagingEnabled={true}
				decelerationRate={0}
				snapToInterval={width - 30}
				snapToAlignment={'center'}
				contentInset={{
					top: 0,
					left: 30,
					bottom: 0,
					right: 10,
				}}>
				{parseddatabase.map((item, index) => {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					function alert(arg0: string): void {
						throw new Error('Function not implemented.');
					}

					return (
						<View key={index} style={styles.view}>
							<ImageBackground source={{ uri: item.image }} style={styles.image} imageStyle={{ borderRadius: 15 }} >
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'center',
										margin: 5,
										padding: 5,
										paddingHorizontal: 6,
										backgroundColor: '#FBEDB7',
										borderRadius: 10,
									}}
								>

									<Text style={{ color: '#7A6229', fontSize: 12, fontWeight: 'bold', textAlignVertical: 'center', justifyContent: 'space-between' }}> <Image source={require('../img/icons/estrella.png')} style={{ width: 15, height: 12, marginEnd: 6, }} />
										{item.qualification}
									</Text>

								</View>
							</ImageBackground>
							<View style={{ marginStart: 15, justifyContent: 'space-between' }} ><Text style={{ fontWeight: '500', fontSize: 18 }}>{item.name} </Text>

								<View style={{ flexDirection: 'row' }}>

									<Text style={{ fontWeight: '300', fontSize: 13, textAlignVertical: 'center', marginStart: 5 }}> <Image source={require('../img/icons/ubicacion.png')} style={{ width: 15, height: 12, marginEnd: 6, }} />
										{item.address}
									</Text>
								</View>
								<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
									<View style={{ flexDirection: 'row' }}>

										<Text style={{ fontWeight: '600', fontSize: 13, textAlignVertical: 'center', marginStart: 5 }}>  <Image source={require('../img/icons/cama.png')} style={{ width: 15, height: 12, marginEnd: 6, }} />
											{item.rooms}
										</Text>
									</View>
									<View style={{ flexDirection: 'row' }}>

										<Text style={{ fontWeight: '600', fontSize: 13, textAlignVertical: 'center', marginStart: 5 }}> <Image source={require('../img/icons/cuarto-de-bano.png')} style={{ width: 15, height: 12, marginEnd: 6, }} />
											{item.bathrooms}
										</Text>
									</View>
									<View style={{ flexDirection: 'row' }}>

										<Text style={{ fontWeight: '600', fontSize: 13, textAlignVertical: 'center', marginStart: 5 }}><Image source={require('../img/icons/gobernante.png')} style={{ width: 15, height: 12, marginEnd: 6, }} />{`${item.surface.lenght * item.surface.width} ${item.surface.unit} ²`}</Text>
									</View>
								</View>
								<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
									<View style={{ flexDirection: 'row' }}>

										<Text
											style={{ fontWeight: 'bold', fontSize: 16, textAlignVertical: 'center' }}
										><Image source={require('../img/icons/signo-de-dolar.png')} style={{ width: 15, height: 12, marginEnd: 6, }} />{`${item.cost}/m`}</Text>
									</View>

									<TouchableOpacity onPress={() => {
										item.favorite = !item.favorite;
										this.setState({ favorite: item.favorite });
									}} >
										<Image source={require('../img/icons/amor.png')} style={{ width: 24, height: 22, marginEnd: 6, backgroundColor: `${item.favorite ? 'red' : '#00B074'}`, borderRadius: 14 }} />
									</TouchableOpacity>
								</View>

							</View>

						</View>

					);
				})
				}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: { paddingHorizontal: 10, margin: 20, paddingBottom: 10, },
	view: {
		flexDirection: 'row',
		justifyContent: 'center',
		margin: 7,
		padding: 5,
		paddingHorizontal: 8,
		backgroundColor: '#E7F4F7',
		borderRadius: 10,


	},
	image: {
		width: 110, height: 110, justifyContent: 'flex-end', alignItems: 'center', borderRadius: 5,
	},

});
