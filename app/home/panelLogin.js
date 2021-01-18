import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { SignFacebook } from '../utils/login-facebook/loginFacebook';
import { SignApple } from '../utils/signApple';
import navigation from '../navigation/navigation';


const LoginFacebook = async () => {
    const { final_token: { token }, status } = await SignFacebook();
    if (status) {
        storeData(token);
        LoginFB();
    } else {
        alert('Upps algo ocurrio mal, vuelva a intentarlo');
    }
}


const goToRegister = () => {
    props.data.navigate('RegisterTel');
}




const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;


export default function panelLogin(props) {

    const goToback  = () =>  { 
        props.navigation.pop(1);
    }


     return (
        <View style={ styles.container }>
        <View style={{ width: '90%', marginTop:40, flexDirection: "row", justifyContent: "space-between",  alignItems: "center" }}>
           <Text style={{ fontSize: ( windowWidth * 7 )/100, fontWeight: 'bold' }}>Inicia sesión</Text>
           <TouchableOpacity  onPress={goToback}  style={  {  width: 40, 
            height: 40,
            borderRadius: (40/2), 
            backgroundColor: 'black', opacity: .8,   flexDirection: 'row', alignItems: 'center', justifyContent: 'center'} }>     
            <Image  source={require('../../assets/xblanco.png')} tintColor="white" style={{  width:15 , height:15   }}  resizeMode="contain" />
        </TouchableOpacity>
        </View>
            
        <View style={styles.body}>
        <TouchableOpacity style={styles.face} onPress={LoginFacebook}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: (windowWidth * 4.3) / 100 }}>Con Facebook</Text>
        </TouchableOpacity>
        <LinearGradient
            onTouchStart={() => console.log('touch')}
            colors={['#FFF00C', '#FEF68C']}
            start={[0.3, 0.5]}
            end={[1, 0.60]}
            location={[0.25, 0.4, 1]}
            style={{ alignItems: 'center', borderRadius: 12, width: '80%', flexDirection: 'row', justifyContent: 'center', height: '22%', }}>

            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: (windowWidth * 4.3) / 100,
                    color: 'black',
                }}>
                Con numero telefonico
                        </Text>
        </LinearGradient>


        <TouchableOpacity style={styles.apple} onPress={SignApple}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: (windowWidth * 4.3) / 100 }}>Sign in with Apple</Text>
        </TouchableOpacity>

    </View>
      
    
        
    </View>
           
     )
}





  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: (windowWidth * 100 ) /100,
      height: (  windowHeight * 90  )/100,
       
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: "white"
    },
    
    containerScroll: {
       width: '100%',
       height: '60%',
        
    },
    
    num: { flexDirection: 'row', width: 100, height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-evenly',
    shadowColor: "#000",
    
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3},


    body: {
        width: '100%', height: '35%', backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "space-evenly",
        marginTop: 45

    },
    face: {
        backgroundColor: '#3b5998',
        width: '80%',
        height: '22%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    apple: {
        backgroundColor: 'black',
        width: '80%',
        height: '22%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    other: {
        width: '90%', height: '10%', backgroundColor: 'white',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 2


    }


    })