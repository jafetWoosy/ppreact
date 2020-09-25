import React, { useEffect  } from 'react';
import {  View , Text, StyleSheet, Image } from 'react-native';





export default function Login(props) {

	  const { navigation  } = props;
	  
		const routingTime  = () => {
		      setTimeout(() => {
				navigation.navigate('SignIn');
			  }, 3000);
		}

     useEffect(() => {
		routingTime();
	 },)

	return (
		<View style={ styles.container }>
			<View style={styles.logo_center }>
			         <Image  source={ require('./../../assets/login/pollo.png') }  />
			</View>
			  <View style={ styles.footer }>
			      <Image  source={ require('../../assets/login/logo.png') }    style={{ width: 170, height: 50  }} resizeMode="contain"  />
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