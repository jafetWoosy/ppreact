import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {  store} from '../redux/store';
import {  connect   } from 'react-redux';
import {  getStoreData  } from '../utils/storage/AsyncStorage';
import { LinearGradient } from 'expo-linear-gradient';

import { SignFacebook } from '../utils/login-facebook/loginFacebook';
import { SignApple } from '../utils/signApple';



const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;

 function Profile(props){
     const { navigation } =  props;
     
     const SetColorTab = () => {
        store.dispatch({
            type: "SCREEN_PROFILE"
        })
    }


    const goToRegister = () => {
        props.data.navigate('RegisterTel');
    }


    const LoginFacebook = async () => {
        const { final_token: { token }, status } = await SignFacebook();
        if (status) {
            storeData(token);
            LoginFB();
        } else {
            alert('Upps algo ocurrio mal, vuelva a intentarlo');
        }
    }


    const RenderLogin = () =>  {
        return (
            <View style={styles.container}>
              
            <View style={styles.body2}>
                <TouchableOpacity style={styles.face} onPress={LoginFacebook}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: (windowWidth * 4.3) / 100 }}>Con Facebook</Text>
                </TouchableOpacity>
                


                <TouchableOpacity style={styles.apple} onPress={SignApple}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: (windowWidth * 4.3) / 100 }}>Sign in with Apple</Text>
                </TouchableOpacity>

            </View>
            
        </View>
        )
    }



    const Loggout = () => {
       
    }


     useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            SetColorTab();
         });
         return unsubscribe;
     });

    if (props.state.loginReducer.isLoggedIn === false) {
        return   <RenderLogin/>
           
     } else  {
            return(
                <View style={styles.container}>
                   <View style={ styles.body }>
                       <View style={ { flexDirection: 'row', alignItems: 'center', } }>
                        <FontAwesome name="map-marker" size={30} ></FontAwesome>
                        <Text style={{ left:25, fontSize:17 }}>Mis domicilios de entrega</Text> 
                       </View>
                       <View style={{ width:'100%', height:1, backgroundColor: '#F0F0F0' }} ></View>
                       <View style={ { flexDirection: 'row', } }>
                       <FontAwesome name="credit-card" size={30} ></FontAwesome>
                        <Text  style={{ left:18, fontSize:17 }}>Formas de pago</Text> 
                       </View>
                       <View style={{ width:'100%', height:1, backgroundColor: '#F0F0F0' }} ></View>
                       <View style={ { flexDirection: 'row'  } }>
                       <FontAwesome name="align-left" size={30} ></FontAwesome>
                        <Text  style={{ left:18, fontSize:17 }}>Historial de compras</Text> 
                       </View>
                       <View style={{ width:'100%', height:1, backgroundColor: '#F0F0F0' }} ></View>
                       <View style={ { flexDirection: 'row'  } }>
                       <FontAwesome name="file-text-o" size={30} ></FontAwesome>
                        <Text  style={{ left:18, fontSize:17 }}>Politicas de privacidad</Text> 
                       </View>
                   </View>
                   <View style={styles.footer}>
                       <TouchableOpacity style={styles.button }  onPress={ Loggout }>
                          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Cerrar sesión</Text>
                       </TouchableOpacity>
                       <Text style={{ color: '#A0A0A0', fontSize: 13 }}>Desarrollado por Softom.mx con ❤</Text>
                   </View>
                </View>
            )
        }
    
}

  
const mapStateToProps = (state) => {
    return{
        state
    }
}

export default connect(mapStateToProps)(Profile);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    body: {
    
       width:'80%',
       height:'70%',
       backgroundColor: '#fff',
       flexDirection: 'column',
       alignItems: 'flex-start',
       justifyContent: 'space-evenly'
    },
    footer: {
      marginTop:20,
      width: '80%',
      height: '25%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    button: {
        width:'100%',
        height: '40%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    body2: {
        width: '100%', height: '30%', backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 50

    },
    face: {
        backgroundColor: '#3b5998',
        width: '90%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    apple: {
        backgroundColor: 'black',
        width: '90%',
        height: '30%',
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