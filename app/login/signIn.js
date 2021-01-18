import React, { useState, useEffect,  } from 'react';
import {  View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Animated } from 'react-native';
import * as Permissions from 'expo-permissions';

import { FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import {  SwipeablePanel  } from 'rn-swipeable-panel';
import Panel from './components/panel';
import Panel2 from './components/panel2';
import * as Font from 'expo-font';
import {  connect   } from 'react-redux';

import {  useFonts  } from 'expo-font';


import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;

const AppLoa = () =>  {
  return (
      <View>
         <Text>cargando</Text>
      </View>
  )
}

function SignIn(props) {
     console.log(props)
    const { navigation } = props;
    const [expoPushToken, setExpoPushToken] = useState('');
    const [background, setBackgroud] = useState(false);
    
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openLarge: true,
        showCloseButton: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),
        // ...or any prop you want
      });

      const [panelProps2, setPanelProps2] = useState({
        fullWidth: true,
        openLarge: true,
        showCloseButton: true,
        onClose: () => closePanelTwo(),
        onPressCloseButton: () => closePanelTwo(),
        // ...or any prop you want
      });
      
      const [isPanelActive, setIsPanelActive] = useState(false);
      const [ispanelActivetwo, setIsPanelActivetwo] = useState(false);
     
      const OpenPanel = () => {
        setIsPanelActive(true);
      };
     
      const closePanel = () => {
        setIsPanelActive(false);
       
      };
      
      const openmodaltwo = () => {
        setIsPanelActivetwo(true);
        
      }

      const closePanelTwo = () => {
        setIsPanelActivetwo(false)
      }
     
      
    
     
      let [fontsLoaded] = useFonts({
        'Bebas-Neue': require('../../assets/fonts/BebasNeue-Regular.ttf'),
        'Londrina-Solid': require('../../assets/fonts/LondrinaSolid-Regular.ttf')
    
        
    });


     


    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
              
  
    },[] )

    async function registerForPushNotificationsAsync() {
        let token;
        if (Constants.isDevice) {
          const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            //alert('Failed to get push token for push notification!');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
        } else {
          //alert('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
        console.log(token);
        return token;
      }

     if(!fontsLoaded){
        return <AppLoa/>
     }else {
      return(
        <View style={ styles.container }>
            <View style={styles.logo}>
               <Animated.View style={{  width: "100%", height: "40%",  flexDirection: "row", justifyContent: "flex-end",   }}>
                   <Image  source={ require('../../assets/chicken1.png')} style={{  width: "75%", height: "180%", left: 50, }} resizeMode="contain" />
               </Animated.View>
               <View style={{  width: "100%", height: "20%", alignItems: 'center', marginTop: 40  }}>
                     <Image  source={require('../../assets/info/logopp.png')} style={{  width: ( windowWidth * 60 )/100, height: ( windowHeight * 10 )/100  }} resizeMode="contain" />
               </View>
               <View style={{  width: "100%", height: "40%"  }}>
               <Image  source={ require('../../assets/chicken2.png')} style={{  width: "55%", height: "150%", right: 100}} resizeMode="contain" />
    
               </View>
            </View>
           <View style={ styles.create }>
                <Text style={{ fontSize: (windowWidth * 7.5)/100,  fontFamily: "Londrina-Solid" }}>Crea tu cuenta Puro Pollo</Text>
                    <LinearGradient
                    onTouchStart={ ()=>   navigation.navigate('RegisterTel')  }
                    colors={['#FFF00C', '#FEF68C']}
                    start={[0.3, 0.5]}
                    end={[1, 0.60]}
                    location={[0.25, 0.4, 1]}
                    style={{  alignItems: 'center', borderRadius: 12, width: '90%', flexDirection: 'row', justifyContent: 'center', height: '17%', marginTop: 15 }}>
                    <FontAwesome name="mobile-phone" size={40} style={{ right: 50 }} />
                        <Text
                            style={{
                              fontFamily: "Bebas-Neue",
                            fontSize: ( windowWidth * 5.5 )/100,
                            
                            }}>
                            Con numero telefonico
                        </Text>
                        </LinearGradient>
                    <TouchableOpacity style={styles.other } onPress={openmodaltwo} >
                       <Text style={{ fontSize: ( windowWidth * 5.5 )/100, fontFamily: "Bebas-Neue"  }}>Otras formas de registro</Text>
                    </TouchableOpacity>
                     <View  style={{  width: '90%', height:0.4, backgroundColor: 'grey', marginTop: 15}} />
                      
                     <TouchableOpacity onPress={OpenPanel}>
                         <Text style={{ fontSize: ( windowWidth * 4 )/100, color: '#5F5F5F', marginTop: 15, fontFamily: "Bebas-Neue" }}>Ya tengo cuenta</Text>
                     </TouchableOpacity>
                     
           </View>
                    <SwipeablePanel {...panelProps} isActive={isPanelActive} noBackgroundOpacity={background}
                     style={{  alignItems: 'center',  }} closeIconStyle={{ backgroundColor: 'white', }} closeRootStyle={{ backgroundColor: 'black', }}>
                         <Panel  data={navigation}/>
                     </SwipeablePanel>

                     <SwipeablePanel {...panelProps2} isActive={ispanelActivetwo} 
                     style={{  alignItems: 'center',  }} closeIconStyle={{ backgroundColor: 'white', }} closeRootStyle={{ backgroundColor: 'black', }}>
                         <Panel2  data={navigation}/>
                     </SwipeablePanel>
                     
        </View>
    )
     }
}


const mapStateToProps = (state) => {
    return{
        state
    }
}


export default connect(mapStateToProps)(SignIn);








const styles = StyleSheet.create({
    container: {
     
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    }, 
    logo: {
       marginTop: 60,
       
       width: '100%',
       height: '45%',
       alignItems: 'center', 
       justifyContent: 'center'
    }, 
    create: {
        
        width: '100%',
        height: '45%',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 60,
        
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