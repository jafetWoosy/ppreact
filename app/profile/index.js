import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
export default function Profile(){
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
               <TouchableOpacity style={styles.button }>
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Cerrar sesión</Text>
               </TouchableOpacity>
               <Text style={{ color: '#A0A0A0', fontSize: 13 }}>Desarrollado por Softom.mx con ❤</Text>
           </View>
        </View>
    )
}

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
    }
})