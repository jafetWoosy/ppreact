import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;
import { FontAwesome } from '@expo/vector-icons';
import {  useFonts  } from 'expo-font';



 

const slides = [
  {
    key: 1,
    title: '¡Bienvenido a Puro Pollo!',
    text: 'Navega por nuestro delicioso menú, ordena en línea sin necesidad de llamar a la Pollo Linea',
    image: require('../../assets/lotties/lottie1.png'),
    backgroundColor: 'red',
  },
  {
    key: 2,
    title: 'Rastrea tu orden',
    text: 'Conoce el estatus de tu pedido y enterate cuando este ya se encuentre en ruta de entrega',
    image: require('../../assets/lotties/lottie2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Formas de pago',
    text: 'Tu eliges la forma de pago, ya sea en efectivo o tarjeta de crédito o débito',
    image: require('../../assets/lotties/lottie3.png'),
    backgroundColor: '#22bcb5',
  }
];
 



const AppLoa = () =>  {
   return (
       <View>
          <Text>cargando</Text>
       </View>
   )
}

export default function Intro(props){

  

  let [fontsLoaded] = useFonts({
    'Bebas-Neue': require('../../assets/fonts/BebasNeue-Regular.ttf'),
    'Londrina-Solid': require('../../assets/fonts/LondrinaSolid-Regular.ttf')

    
});





  const { navigation  } = props;
  const  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
      <FontAwesome name="chevron-right" size={30}  color="#ffff"  />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
      <FontAwesome name="check" size={30}  color="#ffff"  />
      </View>
    );
  };


   useEffect(() => {
        
   }, [])


  const activePage = "#FFEF00";

  const [showRealApp, setshowRealApp] = useState(true);
  
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={{   width: "90%", height: "60%" , alignItems: "center",  }}>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={item.image}   style={{ width: (windowWidth * 80 )/100, height: (windowHeight * 40 )/100, marginTop: 20 }} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  }
  const _onDone = () => {
    navigation.navigate('SignIn')
      
  }
 
  if (!fontsLoaded) {
    return <AppLoa />;
  } else {
    return(
      <AppIntroSlider   activeDotStyle={ {  backgroundColor: "#FFEF00" } } renderItem={_renderItem} data={slides} onDone={_onDone} 
     renderNextButton={  _renderNextButton }
     renderDoneButton={ _renderDoneButton }
     />
    )
  }
    
   
  
}


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 10,
    height: 10,
    
   
  },
  text: {
    color: '#8D8D8D',
    textAlign: 'center',
    marginTop: 50,
    fontSize: ( windowWidth * 4 )/100,
    fontFamily: "Bebas-Neue"
  },
  title: {
    fontSize: ( windowWidth * 8 )/100,
    color: '#434343',
    textAlign: 'center',
    fontFamily: "Londrina-Solid"
    
    
    
  },

  buttonCircle: { width: 70, height: 70, backgroundColor: "black", borderRadius: (70/2),
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   top: -20
},
});