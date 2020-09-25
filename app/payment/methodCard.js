import React, {  useState } from 'react';
import {  View, Text, StyleSheet, Dimensions, Image, TouchableOpacity  } from 'react-native';

const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;


export default function MethodCard(props){
 const { navigation } = props;
    
const goToAddcard = () => {
     navigation.navigate('addcard');
}



    return(
        <View style={styles.container}>
        <View style={ styles.title } >
           <Text style={{ fontSize: ( windowWidth * 6 ) /100, marginLeft: 30, fontWeight: 'bold' }} >Elige tu forma de pago</Text>
        </View>
          
            <TouchableOpacity style={styles.line}>
                <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 70, height: 70, borderRadius: 70 / 2, backgroundColor: '#B4DAEB', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/home/credit-card.png')} style={{ width: 40, height: 40 }} resizeMode="contain" />
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: (windowWidth * 6) / 100, fontWeight: 'bold' }}>Pago con tarjeta</Text>
                </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.line}>
        <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 70, height: 70, borderRadius: 70 / 2, backgroundColor: '#0353A5', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assets/home/visaicon.png')} style={{ width: 40, height: 40 }} resizeMode="contain" />
            </View>
        </View>
        <View>
            <Text style={{ fontSize: (windowWidth * 6) / 100, fontWeight: 'bold' }}>**** 4930</Text>
        </View>
    </TouchableOpacity>
        
        <TouchableOpacity style={{ marginTop: 25 }} onPress={ goToAddcard }>
           <Text style={{ fontSize: ( windowWidth * 4 )/100, fontWeight: '800' }}>Agregar nueva forma de pago</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '90%', height: '10%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', marginTop: 120, borderRadius: 15 }}>
                <Text style={{ color: "white", fontWeight: 'bold', fontSize: ( windowWidth *4 )/100 }}>Confirmar orden</Text>
        </TouchableOpacity>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '10%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    line: {
        backgroundColor: 'white',
        marginTop: 40,
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})