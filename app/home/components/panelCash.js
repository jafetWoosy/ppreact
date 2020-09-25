import  React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;


export default function PanelCash(props) {
    const { selectCambio } = props;
    return(
        <View style={ styles.container }>
            <TouchableOpacity>
                <Text style={{ fontSize: ( windowWidth * 4 )/100, color: 'white' }}>¿Requieres cambio?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ fontSize: ( windowWidth * 5 )/100, color: 'white' }} >No, pagaré exacto.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={selectCambio}>
                <Text style={{ fontSize: ( windowWidth * 5 )/100, color: 'white' }}>Pagaré con un billete de 500</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ fontSize: ( windowWidth * 5 )/100, color: 'white' }}>Pagaré con un billete de 200</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ fontSize: ( windowWidth * 5 )/100, color: 'white' }}>Pagaré con un billete de 100</Text>
            </TouchableOpacity>
        </View>
    )
}





const styles = StyleSheet.create({
    container: {
    
        marginTop: 15,
        width: windowWidth, 
        alignItems: 'center',
        height: ( windowHeight * 40 ) /100,
        justifyContent: 'space-around'
    },

    
})