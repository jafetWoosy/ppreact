1111111



import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { FontAwesome, SimpleLineIcons, MaterialIcons, } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;
import Constants from 'expo-constants';
import * as Location from 'expo-location';

import { store } from '../redux/store';
import { connect } from 'react-redux';


import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';








function addAdress(props) {

    const [location, setlocation] = useState([]);

    const { navigation } = props;



    const handlerExtractdata = (data) => {
        const { lat, lng } = data.geometry.location;
        const { formatted_address } = data;


       const location = { 
            coords: {
                latitude: lat,
                longitude: lng
            }

        
    }
        setTimeout(() => {
            navigation.navigate('ConfirmAdrees', { location });
        }, 1500);


    }

    const goToConfirm = () => {
        navigation.navigate('ConfirmAdrees');
    }

    const goToBranch = () => {
        navigation.navigate('branchs');
    }

    const goToCart = () => {
        navigation.navigate('modalcart');
    }


    const getLocation = () => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            // setErrorMsg('Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
            // );   
        } else {
            (async () => {
                let { status } = await Location.requestPermissionsAsync();
                if (status !== "granted") {
                    setErrorMsg('Permission to access location was denied');
                }
                let location = await Location.getCurrentPositionAsync({});
                console.log(location)
                 navigation.navigate('ConfirmAdrees', { location });s

            })();
        }
    }





    useEffect(() => {
        console.log(props);

    }, [])










    return (

        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={{ width: '87%', marginTop: 14, alignItems: "flex-end", justifyContent: "flex-end", top: 20 }}>
                <TouchableOpacity onPress={goToCart} style={{
                    width: 40,
                    height: 40,
                    borderRadius: (40 / 2),
                    backgroundColor: 'black', opacity: .8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                }}>
                    <Image source={require('../../assets/xblanco.png')} tintColor="white" style={{ width: 15, height: 15 }} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <View style={{ width: '90%', alignItems: 'flex-start', marginTop: 0 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Elige o agrega</Text>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }} >una dirección</Text>
            </View>
            <View style={styles.search}>
                <GooglePlacesAutocomplete
                    suppressDefaultStyles={false}
                    placeholder="Ubicacion"
                    minLength={2}
                    autoFocus={true}
                    returnKeyType={'search'}
                    listViewDisplayed={false}
                    fetchDetails={true}
                    onPress={(data, details) => handlerExtractdata(details)}
                    renderRow={
                        (rowData) => <View style={{ flexDirection: "row" }}>

                            <Text>{rowData.description}</Text>

                        </View>}
                    query={{

                        key: "AIzaSyDUWsTWKqo-16mmxqKPJgxA_gzMq2JTGEo",
                        language: "en"
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={200}
                    styles={{

                        textInputContainer: {
                            backgroundColor: 'white',
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            width: "100%"
                        },
                        textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16,
                            width: "100%"
                        },
                        predefinedPlacesDescription: {
                            color: "#1faadb"
                        },
                        listView: {
                            backgroundColor: "#F7F7F7",
                            zIndex: 100,


                        },
                    }}

                />
            </View>
            <TouchableOpacity onPress={getLocation} style={{ flexDirection: 'row', width: '90%', height: '15%', marginTop: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: '#FFEF00', alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
                    <MaterialIcons name="location-searching" size={30} />
                </View>
                <Text style={{ fontSize: 20, marginRight: 60, fontWeight: 'bold' }}>Ubicación actual</Text>
            </TouchableOpacity>
            <View style={{ width: '100%', height: 80, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 10, }}>
                <View style={{ width: "80%", flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                    <View style={{ width: '90%', }}>
                        <Text style={{ fontSize: (windowWidth * 4) / 100, fontWeight: 'bold' }}>Av De La Gaviotas 609</Text>
                    </View>
                    <View style={{ width: '5%', }}>
                        <Text style={{ fontSize: (windowWidth * 4) / 100 }}>&#x205d;</Text>
                    </View>
                </View>
                <View style={{ width: "80%", flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                    <View style={{ width: '90%', }}>
                        <Text style={{ fontSize: (windowWidth * 4) / 100, fontWeight: 'bold' }}>Rio Grijalva 3000</Text>
                    </View>
                    <View style={{ width: '5%', }}>
                        <Text style={{ fontSize: (windowWidth * 4) / 100 }}>&#x205d;</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '90%', height: '15%', marginTop: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: '#FFEF00', alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
                    <MaterialIcons name="store" size={30} />
                </View>
                <TouchableOpacity onPress={goToBranch}>
                    <Text style={{ fontSize: 20, marginRight: 60, fontWeight: 'bold' }}>Recoger en sucursal</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}




const mapStateToProps = (state) => {
    return {
        state
    }
}


export default connect(mapStateToProps)(addAdress);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',


    },
    search: {
        flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-around', marginTop: 30,
        backgroundColor: 'white',
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