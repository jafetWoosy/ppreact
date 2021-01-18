import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import MapView from 'react-native-maps';
const windowsHeight = Dimensions.get('screen').height;
const windowsWidth = Dimensions.get('screen').width;

import { getStoreData } from '../utils/storage/AsyncStorage';





import { store } from '../redux/store';
import { connect } from 'react-redux';
import { render } from 'react-dom';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



function ConfirmAddress(props) {
    console.log(props.route.params)
    const { location: { coords: { latitude, longitude } } } = props.route.params;
    const [address, setaddress] = useState('');
    const [latitud, setLatitud] = useState(latitude);
    const [logitud, setLongitud] = useState(longitude);
    const [placeHolder, setPlaceHolder] = useState('Direccion');
    const [editableAddress, seteditableAddress] = useState(false)
    const [inputEditable, setinputEditable] = useState('');
    const [inputSelect, setImput] = useState(false);



    const onFocusInput = () => {
        console.log('SELECT INPUT');
        setImput(true);
    }


    const editableInputAddress = () => {
        seteditableAddress(true);
        setinputEditable(placeHolder);
    }

    const getAddres = async (lat, lon) => {
        const myApiKey = "AIzaSyDUWsTWKqo-16mmxqKPJgxA_gzMq2JTGEo";
        let response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + lat + ',' + lon + '&key=' + myApiKey);
        let data = await response.json();
        return data;
    }

    const onRegionChange = async (region) => {
        console.log(region);
        let response = await getAddres(region.latitude, region.longitude);
        setLatitud(region.latitude);
        setLongitud(region.longitude);
        setPlaceHolder(response.results[0].formatted_address);
        console.log(response)
    }



    const _setPlaceHolder = async () => {
        const placeHolderONE = await getAddres(latitude, longitude);
        const place = placeHolderONE.results[0].formatted_address;
        setPlaceHolder(place);
    }



    const saveAddress = async (_address) => {
        //   const { status, value  }  = await getStoreData();

        let dat = {
            longitude: 0,
            altitude: 0,
            full_address: _address
        }

        let url = 'https://testpuroporllo.herokuapp.com/app/direcciones';
        const data = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(dat),
            headers: {
                'Content-Type': 'application/json',
                'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Zjc3OTU0NjA0OTlhNDAwMWUyZDhlYzIiLCJpYXQiOjE2MDE2NzI1MTh9.TWrZBvBekYohZUcE8OhIdEnzLXKGuTnZbF3xDohEzBg"
            }
        })

        const response = await data.json();
        console.log('CREADO***');
        console.log(response);
        console.log('CREADO***');


    }

    const confirmAdress = async () => {
        if (editableAddress) {
            let direccion = inputEditable
            store.dispatch({
                type: "ADDADDRESS",
                value: {
                    direccion
                }
            })

           await saveAddress(direccion);
        } else {
            let direccion = placeHolder;
            store.dispatch({
                type: "ADDADDRESS",
                value: {
                    direccion
                }
            })
            await saveAddress(direccion); 
        }

        
    }


    const setDIRECCION = (placeHolder) => {
        store.dispatch({
            type: "ADDADDRESS",
            value: {
                placeHolder
            }
        })
    }





    useEffect(() => {

        _setPlaceHolder();
    }, [])


    return (

        <View

            style={styles.container}
        >
            <View style={{ width: '87%', marginTop: 14, alignItems: "flex-end", justifyContent: "flex-end", top: 50, }}>
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    borderRadius: (40 / 2),
                    position: "absolute",
                    zIndex: 100,
                    backgroundColor: 'black', opacity: .8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                }}>
                    <Image source={require('../../assets/xblanco.png')} tintColor="white" style={{ width: 15, height: 15 }} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', height: inputSelect === true ? 0 : "50%" }}>
                <MapView
                    onRegionChangeComplete={onRegionChange}
                    style={{ height: '100%', width: "100%", }}
                    provider={MapView.PROVIDER_GOOGLE}
                    region={{
                        latitude: latitud,
                        longitude: logitud,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003
                    }}

                />
                <View style={styles.markerFixed}>
                    <Image source={require('../../assets/marker.png')} style={{ opacity: inputSelect ? 0.0 : 1 }} />
                </View>
            </View>
            <KeyboardAwareScrollView contentContainerStyle={{ height: (windowsHeight * 50) / 100, width: (windowsWidth), alignItems: "center" }} >
                <View style={{ width: '90%', height: (windowsHeight * 15) / 100, justifyContent: 'space-around', marginTop: 30, }}>
                    <Text style={{ fontSize: (windowsWidth * 4) / 100 }} >Direccion</Text>
                    <TextInput onChange={e => setinputEditable(e.nativeEvent.text)} onFocus={editableInputAddress} style={{ width: '80%', height: 50, color: "black", fontWeight: "bold" }} multiline={true} placeholderTextColor="grey"
                        value={editableAddress === false ? placeHolder : inputEditable} />
                </View>
                <View style={{ width: '90%', height: 0.5, backgroundColor: 'grey', marginTop: 5 }} />

                <View style={{ width: '90%', height: 40, marginTop: 15 }}>
                    <TextInput onFocus={onFocusInput} style={{ width: '80%' }} placeholder="Agregar apto, piso, casa" placeholderTextColor="grey" />
                </View>
                <View style={{ width: '90%', height: 0.5, backgroundColor: 'grey', marginTop: 0, }} />

                <TouchableOpacity onPress={confirmAdress} style={{ width: '90%', minHeight: '15%', backgroundColor: 'black', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 15, color: "#fff", fontWeight: 'bold' }}>Confirmar dirección</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>

    )
}






const mapStateToProps = (state) => {
    return {
        state
    }
}


export default connect(mapStateToProps)(ConfirmAddress);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    markerFixed: {
        left: "50%",
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: "50%",


    }
})