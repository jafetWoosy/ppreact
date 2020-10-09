import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import MapView from   'react-native-maps';
const windowsHeight = Dimensions.get('screen').height;
const windowsWidth = Dimensions.get('screen').width;

export default function InfoStore(){
    return(
        <View style={styles.container}>
        <View style={{ width: '100%', height: '35%',  }}>
        <MapView
        style={{ height: '100%',  width: "100%",  }}
        region={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421
       }}
       />
       </View>
           <View style={styles.types }>
             <View style={ styles.circle}>
             <Image  source={ require('./../../assets/info/1.png') }  style={{ width: 40, height: 40 }} tintColor="#fff" />
             </View>
             <View style={ styles.circle}>
             <Image  source={ require('./../../assets/info/delivery.png') }  style={{ width: 40, height: 40 }} tintColor="#fff" />
             </View>
             <View style={ styles.circle}>
             <Image  source={ require('./../../assets/info/parallevar.png') }  style={{ width: 40, height: 38 }} tintColor="#fff" />
             </View>
             <View style={ styles.circle}>
             <Image  source={ require('./../../assets/info/payments.png') }  style={{ width: 40, height: 38 }} tintColor="#fff" />
             </View>
           </View>
           <View style={styles.body }>
              <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Direccion:</Text>
              <Text style={{ fontSize: (windowsWidth*4)/100 }}>Av Ejercito Mexicano 1007, Palos Prietos</Text>
              <Text>82010 Mazatlan, Sin.</Text>
              <Text style={{ marginTop: 15, fontSize: 21,fontWeight: 'bold' }}>Horarios:</Text>
              <Text style={{ marginTop: 5 }}>lunes a Domingo: 10:00-18:00</Text>
           </View> 
           <View style={{ backgroundColor: '#000', width: '90%', height: '10%', marginTop: 25, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{  fontSize: 20, color: "white", fontWeight: 'bold' }}>Abrir en mapas</Text>
           </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    types: {
        width: '100%',
         height: '15%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around'

    },
    circle: {
        width: 55,
        height: 55,
        borderRadius: 55/2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: "center"
        
    },
    body: {
        width:'90%',
        height: '30%',
        flexDirection: 'column',
    
        
    }
})