import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image } from 'react-native';
import MapView from 'react-native-maps';
const windowsHeight = Dimensions.get('screen').height;
const windowsWidth = Dimensions.get('screen').width;


export default  function ConfirmAddress(){
  const [address, setaddress] = useState('');
  const [latitud, setLatitud] = useState('');
  const [logitud, setLogitud] = useState('');
  const [placeHolder, setPlaceHolder] = useState('')



    const GetAddres = async (lat,lon) => {
        const myApiKey = "AIzaSyCEASUjkdZ4qQyyz1natXbnLxmXemI2ZYA";
        let response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+lat + ','+ lon + '&key=' + myApiKey);
        let data = await response.json();
        return data;
    }

    const onRegionChange = async (rgn) => {
        let response = await GetAddres(rgn.latitude, rgn.longitude );
        setLatitud(rgn.latitude);
        setLogitud(rgn.longitude);
        setPlaceHolder(response.results[0].formatted_address);
        console.log(response.results[0].formatted_address);
    }
   



    return(
        <View style={styles.container}>
            <View style={{ width: '100%', height: '60%', }}>
            <MapView
            onRegionChangeComplete={ onRegionChange }
            style={{ height: '100%',  width: "100%",  }}
            provider={MapView.PROVIDER_GOOGLE}
            region={{
               latitude: 23.2506643,
               longitude: -106.4151178,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421
           }}
           />
            <View style={styles.markerFixed }>
                <Image source={ require('../../assets/marker.png')} />
            </View>
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
    },
    markerFixed: {
        left: "50%",
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: "50%"
    }
})