import React, {  useState } from 'react';
import {  View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput  } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;


export default function Addcard(){
  
    const [num_card, setnum_card] = useState('');
    const [expiration, setexpiration] = useState('');
    const [cvv, setcvv] = useState('');


    const addNumcard = (e) => {
        setnum_card(e.nativeEvent.text);

    }

    const addExpiration = (e) => {
        setexpiration(e.nativeEvent.text);
    }
     
    const addCvv = (e) => {
        setcvv(e.nativeEvent.text);
    }



    return(
        <KeyboardAwareScrollView  contentContainerStyle={{ flex: 1, alignItems: 'center'}}>
            <View style={ styles.title } >
            <Text style={{ fontSize: ( windowWidth * 6 ) /100, marginLeft: 30, fontWeight: 'bold' }} >Elige tu forma de pago</Text>
            </View>
            
                <TouchableOpacity style={styles.line}>
                    <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: (windowWidth * 15)/100, height: (windowWidth * 15 )/100, borderRadius: (( windowWidth * 15 )/100)/2, backgroundColor: '#B4DAEB', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/home/credit-card.png')} style={{ width: (windowWidth * 8)/100, height: (windowWidth * 8) }} resizeMode="contain" />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: (windowWidth * 6) / 100, fontWeight: 'bold' }}>Pago con tarjeta</Text>
                    </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.line}>
            <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{  width: (windowWidth * 15)/100, height: (windowWidth * 15 )/100, borderRadius: (( windowWidth * 15 )/100)/2, backgroundColor: '#0353A5', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../assets/home/visaicon.png')} style={{ width: 40, height: 40 }} resizeMode="contain" />
                </View>
            </View>
            <View style={{  flexDirection: "column", }}>
            <TextInput 
            style={{ height: (windowHeight * 4)/100,  width: '100%', fontSize: ( windowWidth*4 )/100, marginLeft: 5,   borderBottomColor: '#E5E5E5',
            borderBottomWidth: 0.5, }}
            onChangeText={text => onChangeText(text)}
            placeholder="Ingresa el numero de tu tarjeta"
            placeholderTextColor="#E5E5E5"
            />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start',  }}>
                <TextInput 
                style={{ height: (windowHeight * 4)/100,  width: '40%', fontSize: ( windowWidth*4 )/100, marginLeft: 5,   borderBottomColor: '#E5E5E5',
                borderBottomWidth: 0.5, }}
            
                placeholder="DD/MM"
                placeholderTextColor="#E5E5E5"
                />
                <TextInput 
                style={{ height: (windowHeight * 4)/100,  width: '20%', fontSize: ( windowWidth*4 )/100, marginLeft: 5,   borderBottomColor: '#E5E5E5',
                borderBottomWidth: 0.5, }}
                
                placeholder="CVC"
                placeholderTextColor="#E5E5E5"
                />
                </View>
            </View>
        </TouchableOpacity>
            
            <TouchableOpacity style={{ marginTop: 25 }}>
            <Text style={{ fontSize: ( windowWidth * 4 )/100, fontWeight: '800' }}>Agregar nueva forma de pago</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: '90%', height: '10%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', marginTop: 120, borderRadius: 15 }}>
                    <Text style={{ color: "white", fontWeight: 'bold', fontSize: ( windowWidth *4 )/100 }}>Confirmar orden</Text>
            </TouchableOpacity>

    </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
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
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})