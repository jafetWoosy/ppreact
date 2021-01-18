import React, { useEffect } from 'react';
import { store } from '../redux/store';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;

import { useFonts } from 'expo-font';


function Status(props) {



    const { navigation } = props;
    const SetColorTab = () => {
        store.dispatch({
            type: "SCREEN_STATUS"
        })
    }
 

    const AppLoa = () =>  {
        return (
            <View>
               <Text>cargando</Text>
            </View>
        )
      }

    let [fontsLoaded] = useFonts({
        'Bebas-Neue': require('../../assets/fonts/BebasNeue-Regular.ttf'),
        'Londrina-Solid': require('../../assets/fonts/LondrinaSolid-Regular.ttf')
    });


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            SetColorTab();
        });
        return unsubscribe;
    });



      if (!fontsLoaded) {
          return <AppLoa/>
      } else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.folio}>
                        <Text style={{ textAlign: "center", fontSize: (windowWidth * 5.5) / 100, fontFamily: "Londrina-Solid" }}>FOLIO APP-27199</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={{ fontSize: 20, color: 'black', marginTop: 10, fontFamily: "Bebas-Neue" }}>Tu orden sera entregada en:</Text>
                    <Text style={{
                        fontFamily: "Londrina-Solid",
                        marginTop: 10,
                        marginBottom: 10, fontSize: (windowWidth * 6) / 100
                    }}>Sucursal Ejercito Mexicano</Text>
                    <TouchableOpacity style={{
                        flexDirection: "column", alignItems: "center",
                        justifyContent: 'center', backgroundColor: 'black',
                        width: '40%', height: '25%',
                        borderRadius: 9,
                        marginBottom: 8
    
                    }}>
                        <Text style={{ fontSize: (windowWidth * 4.5) / 100,  color: "white", fontFamily: "Bebas-Neue" }}>Como llegar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <View style={{ width: '100%', height: '15%', flexDirection: 'row' }}>
                        <View style={{ width: '17%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: (windowWidth * 4) / 100 }}>⚫</Text>
                        </View>
                        <View style={{ width: '90%', alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ fontSize: (windowWidth * 4) / 100,  fontFamily:"Bebas-Neue" }}>Tu orden ha sido recibida  en sucursal</Text>
                            <Text style={{ fontSize: (windowWidth * 3) / 100 }}>13:44</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: '15%', flexDirection: 'row' }}>
                        <View style={{ width: '17%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: (windowWidth * 4) / 100 }}>⚫</Text>
                        </View>
                        <View style={{ width: '90%', alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ fontSize: (windowWidth * 4) / 100, fontFamily:"Bebas-Neue" }}>Tu orden ha sido recibida  en sucursal</Text>
                            <Text style={{ fontSize: (windowWidth * 3) / 100 }}>13:44</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: '15%', flexDirection: 'row' }}>
                        <View style={{ width: '17%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: (windowWidth * 4) / 100 }} >⚫</Text>
                        </View>
                        <View style={{ width: '90%', alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ fontSize: (windowWidth * 4) / 100,  fontFamily: "Bebas-Neue" }}>Tu orden ha sido recibida  en sucursal</Text>
                            <Text style={{ fontSize: (windowWidth * 3) / 100 }}>13:44</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: '15%', flexDirection: 'row' }}>
                        <View style={{ width: '17%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: (windowWidth * 4) / 100 }}>⚫</Text>
                    </View>
                        <View style={{ width: '90%', alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ fontSize: (windowWidth * 4) / 100, fontFamily: "Bebas-Neue" }}>Tu orden ha sido recibida  en sucursal</Text>
                            <Text style={{ fontSize: (windowWidth * 3) / 100 }}>13:44</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
      }

    
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Status);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',


    },
    header: {
        width: "90%",
        height: "15%",
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginBottom: 23
    },
    folio: {
        width: '50%',
        height: '50%',
        backgroundColor: '#FFED00',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    body: {
        marginTop: 10,
        width: '90%',
        height: '25%',
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'space-around',
        borderRadius: 15,
    },
    footer: {
        marginTop: 25,
        width: (windowWidth * 90) / 100,
        height: '45%',
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'space-evenly',
        borderRadius: 15

    }
})