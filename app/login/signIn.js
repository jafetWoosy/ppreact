import React, { useState, useEffect } from 'react';
import {  View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';

import { FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import {  SwipeablePanel  } from 'rn-swipeable-panel';
import Panel from './components/panel';

import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;



export default function SignIn(props) {
     const { navigation } = props;
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openLarge: true,
        showCloseButton: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),
        // ...or any prop you want
      });
      const [isPanelActive, setIsPanelActive] = useState(false);
     
      const OpenPanel = () => {
        setIsPanelActive(true);
      };
     
      const closePanel = () => {
        setIsPanelActive(false);
      };
      
      



     


    useEffect(() => {
       
    },[] )

     

    return(
        <View style={ styles.container }>
           <View style={ styles.logo }>
                 <Image  source={require('../../assets/login/pollo.png')}  />
           </View>
           <View style={ styles.create }>
                <Text style={{ fontSize: (windowWidth * 6)/100, fontWeight: 'bold' }}>Crea tu cuenta Puro Pollo</Text>
                    <LinearGradient
                    onTouchStart={ ()=> console.log('touch') }
                    colors={['#FFF00C', '#FEF68C']}
                    start={[0.3, 0.5]}
                    end={[1, 0.60]}
                    location={[0.25, 0.4, 1]}
                    style={{  alignItems: 'center', borderRadius: 12, width: '90%', flexDirection: 'row', justifyContent: 'center', height: '17%', marginTop: 15 }}>
                    <FontAwesome name="mobile-phone" size={40} style={{ right: 50 }} />
                        <Text
                            style={{
                            fontWeight: 'bold',
                            fontSize: ( windowWidth * 4 )/100,
                            color: 'black',
                            }}>
                            Con numero telefonico
                        </Text>
                        </LinearGradient>
                    <TouchableOpacity style={styles.other }  onPress={OpenPanel}>
                       <Text style={{ fontSize: ( windowWidth * 4 )/100, fontWeight: 'bold',  }}>Otras formas de ingresar</Text>
                    </TouchableOpacity>
                     <View  style={{  width: '90%', height:0.4, backgroundColor: 'grey', marginTop: 15}} />

                     <Text style={{ fontSize: ( windowWidth * 4 )/100, color: '#5F5F5F', marginTop: 15 }}>Ya tengo cuenta</Text>
                     
           </View>
                    <SwipeablePanel {...panelProps} isActive={isPanelActive}
                     style={{  alignItems: 'center',  }} closeIconStyle={{ backgroundColor: 'white', }} closeRootStyle={{ backgroundColor: 'black', }}>
                         <Panel  data={navigation}/>
                     </SwipeablePanel>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    }, 
    logo: {
       
       width: '100%',
       height: '35%',
       alignItems: 'center', 
       justifyContent: 'flex-end'
    }, 
    create: {
       
        width: '100%',
        height: '45%',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 80,
        justifyContent: 'center'
    },

    other: { width: '90%',  height: '17%', backgroundColor: 'white',
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

    
     
    }
})