import React, {  useState } from 'react';
import {  View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {  SignApple } from '../../utils/signApple';
import { SignFacebook  } from '../../utils/login-facebook/loginFacebook'; 
const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;

export default function Panel(props) {
   
    const [_URL, setURL] = useState('');

   const goToRegister = () => {
       props.data.navigate('RegisterTel'); 
   }

   const keyboard  = (e) => {
      setURL(e.nativeEvent.text);
      console.log(e.nativeEvent.text)
   }

   const LoginFacebook = () => {
      const { status   }  =   SignFacebook();
      console.log(status);
   }


    return(
        <View style={Styles.container}>
          <View style={{ width: '100%'  }}>
             <Text style={{ fontSize: ( windowWidth * 7 )/100, fontWeight: 'bold' }}>Iniciar sesión</Text>
          </View>
            <View style={ Styles.body }>
                        <TouchableOpacity style={Styles.face}  onPress={ LoginFacebook }>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: ( windowWidth * 4.3 )/100 }}>Con Facebook</Text>
                        </TouchableOpacity>
                        <LinearGradient
                            onTouchStart={ ()=> console.log('touch') }
                            colors={['#FFF00C', '#FEF68C']}
                            start={[0.3, 0.5]}
                            end={[1, 0.60]}
                            location={[0.25, 0.4, 1]}
                            style={{  alignItems: 'center', borderRadius: 12, width: '90%', flexDirection: 'row', justifyContent: 'center', height: '25%',  }}>
                        
                                <Text
                                    style={{
                                    fontWeight: 'bold',
                                    fontSize: ( windowWidth * 4.3 )/100,
                                    color: 'black',
                                    }}>
                                    Con numero telefonico
                                </Text>
                                </LinearGradient>

                               
                        <TouchableOpacity style={Styles.apple} onPress={SignApple}>
                               <Text style={{ color: 'white', fontWeight: 'bold', fontSize: ( windowWidth * 4.3 )/100 }}>Sign in with Apple</Text>
                       </TouchableOpacity>
                       
            </View>
            <View  style={{ width:'90%', height:0.8, backgroundColor: 'grey', marginTop: 20, }} />
                    <TouchableOpacity style={Styles.other }  onPress={ goToRegister }>
                       <Text style={{ fontSize: ( windowWidth * 4.5 )/100, fontWeight: 'bold',  }}>Crear cuenta</Text>
                    </TouchableOpacity>

                   <TouchableOpacity>
                   <Text style={{ fontSize: ( windowWidth * 4 )/100, color: '#5F5F5F', marginTop: 25, }}>Ingresar como invitado</Text>
                   </TouchableOpacity>
      </View>
    )
}

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      width: (windowWidth * 90 ) /100,
      height: (  windowHeight * 70  )/100,
      marginTop: 20,
      flexDirection: 'column',
      alignItems: 'center',
      
    },

    body: { width:'100%', height: '40%', backgroundColor:'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 45
    
},
    face: {
         backgroundColor: '#3b5998',
         width: '90%',
         height: '25%',
         alignItems: 'center',
         justifyContent: 'center',
         borderRadius: 10,
    },
    apple: {
        backgroundColor: 'black',
        width: '90%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    other: { width: '90%',  height: '10%', backgroundColor: 'white',
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
    
  });
