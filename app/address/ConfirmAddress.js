import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import MapView from 'react-native-maps';
const windowsHeight = Dimensions.get('screen').height;
const windowsWidth = Dimensions.get('screen').width;


export default  function ConfirmAddress(){
    return(
        <View style={styles.container}>
            <View style={{ width: '100%', height: '60%', }}>
            <MapView
            style={{ height: '100%',  width: "100%",  }}
            provider={MapView.PROVIDER_GOOGLE}
            region={{
               latitude: 37.78825,
               longitude: -122.4324,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421
           }}
           />
            </View>
            <View style={{ width: '90%', height: (windowsHeight * 10)/100,  justifyContent: 'space-around'  }}>
               <Text style={{ fontSize:  (windowsWidth *4)/100}} >Direccion</Text>
               <Text style={{ fontSize:  (windowsWidth *5)/100, fontWeight: 'bold'}} >Primera Carvajal 26</Text>
            </View>
             <View style={{ width: '90%', height: 0.5, backgroundColor: 'grey', marginTop: 5 }}>
             </View> 
             <View style={{ width: '90%', height: 50,  marginTop: 10 }}>
                <TextInput   style={ {  width: '80%'  }}   placeholder="Agregar apto, piso, casa"   placeholderTextColor="grey" />
                </View>

                <View style={{ width: '90%', height: '10%', backgroundColor: 'black', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, color: "#fff", fontWeight: 'bold' }}>Confirmar dirección</Text>
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    }
})