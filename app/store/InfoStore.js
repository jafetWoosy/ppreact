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
                 <View style={{ flexDirection: "column",  alignItems: "center",  }}>
                    <View style={ styles.circle}>
                    <Image  source={ require('./../../assets/info/1.png') }  style={{ width: 40, height: 40, tintColor:"#fff" }}  resizeMode="contain" />
                    </View>
                    <Text style={ styles.txt }>Restaurante</Text>
                 </View>
                 <View style={{ flexDirection: "column", alignItems: "center", }}>
                 <View style={ styles.circle}>
                 <Image  source={ require('./../../assets/info/delivery.png')  }  style={{ width: 40, height: 40, tintColor:"#fff" }}  resizeMode="contain" />
                 </View>
                 <Text style={ styles.txt }>A domicilio</Text>
              </View>
              <View style={{ flexDirection: "column",  alignItems: "center",  }}>
              <View style={ styles.circle}>
              <Image  source={ require('./../../assets/info/parallevar.png') }  style={{ width: 40, height: 40, tintColor:"#fff" }}  resizeMode="contain" />
              </View>
              <Text style={ styles.txt } >Para llevar</Text>
           </View>
           <View style={{ flexDirection: "column",  alignItems: "center",  }}>
           <View style={ styles.circle}>
           <Image  source={ require('./../../assets/info/payments.png') }  style={{ width: 40, height: 40, tintColor:"#fff" }} resizeMode="contain" />
           </View>
           <Text style={ styles.txt }>Pago electronico</Text>
        </View>
           </View>
           <View style={styles.body }>
              <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Direccion:</Text>
              <Text style={{ fontSize: (windowsWidth*4)/100, marginTop: 6 }}>Av Ejercito Mexicano 1007, Palos Prietos</Text>
              <Text>82010 Mazatlan, Sin.</Text>
              <Text style={{ marginTop: 15, fontSize: 21,fontWeight: 'bold' }}>Horarios:</Text>
              <Text style={{ marginTop: 5 }}>Lunes a Domingo: 10:00-18:00</Text>
           </View> 
           <View style={styles.btn}>
              <Text style={{  fontSize: 20, color: "white", fontWeight: 'bold' }}>Abrir en mapas</Text>
           </View>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: "white"
    },
    types: {
        width: '100%',
         height: '15%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 10
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 70/2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: "center"
        
    },
    body: {
        width:'90%',
        height: '20%',
        flexDirection: 'column',
        marginTop: 40,
    
        
    }, 
    btn: {
        marginTop: 60,
        backgroundColor: 'black',
        width: '90%',
        height: '8%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
   },

   txt: { 
       marginTop: 5,
       fontSize: 12
   }
    
})