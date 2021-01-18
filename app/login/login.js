import React, { useEffect  } from 'react';
import {  View , Text, StyleSheet, Image, Dimensions } from 'react-native';
import { getStoreData } from '../utils/storage/AsyncStorage'


const windowsHeight = Dimensions.get('screen').height;
const windowsWidth = Dimensions.get('screen').width;


export default function Login(props) {
       
	  const { navigation  } = props;
	  const routingTime  =  async () => {
	  const { status, value  } =	await getStoreData();
	  if (!status) {
	     return {  screen: "Home"  }
	  }else
	     return {  screen: "Intro"}     		
	}



     useEffect(() => {
		routingTime().then( data =>  {
			setTimeout(() => {	 navigation.navigate(data.screen)  },3000);
		});

	 })

	return (
		<View style={ styles.container }>
			<View style={styles.logo_center }>
			         <Image  source={ require('./../../assets/info/logopp.png') } style={{  width: ( windowsWidth * 60 )/100, height: ( windowsHeight * 10 )/100  }} resizeMode="contain"  />
			</View>
			  <View style={ styles.footer }>
			      <Image  source={ require('../../assets/info/softom.png') }    style={{ width: 140, height: 30  }} resizeMode="contain"  />
			  </View>
		</View>
		)
} 


const styles  = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},

	logo_center: { width: '100%',
	
	  height: '50%',
	   marginTop: '40%',
		alignItems: 'center',
		 justifyContent: 'center' },

		 footer: {
		
			 width: '100%',
			 height: '20%',
			 marginTop: '10%',
			 flexDirection: 'column',
			 justifyContent: 'flex-end',
			 alignItems: 'center'
		 }
})