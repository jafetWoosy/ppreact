import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;

export default function Branch_office(){

    const arr = [1,2,3,5,6,6,6,6];
     return (
         <View style={ styles.container }>
             <View style={ styles.title } >
                 <Text style={{ fontSize: ( windowWidth * 6 ) /100, marginLeft: 30, fontWeight: 'bold' }} >Seleccione una sucursal</Text>
             </View>
              
             <ScrollView contentContainerStyle={ styles.scrollView } style={{ height: "90%", marginTop:10,   }} showsVerticalScrollIndicator={false}>
                     {
                         arr.map( element =>   {
                             return (
                                <TouchableOpacity  style={ styles.card } >
                                    <View style={{ width: '90%'   }}>
                                        <Text style={{ fontSize: ( windowWidth * 4 )/100, fontWeight: 'bold' }} >Sucursal Ejercito Mexicano</Text>
                                        <Text style={{ fontSize: ( windowWidth * 3 )/100,}} >A 800 minutos de ti</Text>
                                        <Text style={{ fontSize: ( windowWidth * 3 )/100,}} >Avenida Ejercito Mexicano numero 114, Mazatlan</Text>
                                    </View>
                                </TouchableOpacity>

                             )  
                         })
                     }
              </ScrollView>

         </View>
     )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
    scrollView: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: 'white'
        
        
     },
     card: {
         backgroundColor: 'white',
         marginTop: 10,
         borderRadius: 8,
         width: ( windowWidth * 90 )/100,
         height:( windowHeight * 20 )/100,
         alignItems: 'center',
         justifyContent: 'center',
         shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 1,

     }
})