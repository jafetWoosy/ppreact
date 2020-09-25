import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;

export default function Formregister(){
    
    const onChangeText = (input) => {
     console.log(input)
    }


    return (
        <View style={ styles.container }>
             <View style={styles.title}>
                  <Text style={{ fontSize: (windowWidth * 8 )/100, fontWeight: 'bold' }}>Datos generales</Text> 
            </View>

           <View style={ styles.form }>
                <TextInput 
                style={{ height: (windowHeight * 8)/100,  width: '100%', fontSize: 25, marginLeft: 5,   borderBottomColor: '#E5E5E5',
                borderBottomWidth: 0.5, }}
                onChangeText={text => onChangeText(text)}
                placeholder="Nombre"
                placeholderTextColor="#E5E5E5"
                 />
                 <TextInput 
                    style={{ height: (windowHeight * 8)/100,  width: '100%', fontSize: 25, marginLeft: 5,   borderBottomColor: '#E5E5E5',
                    borderBottomWidth: 0.5, }}
                    onChangeText={text => onChangeText(text)}
                    placeholder="Apellido"
                    placeholderTextColor="#E5E5E5"
                 />
                 <TextInput 
                    style={{ height: (windowHeight * 8)/100,  width: '100%', fontSize: 25, marginLeft: 5,   borderBottomColor: '#E5E5E5',
                    borderBottomWidth: 0.5, }}
                    onChangeText={text => onChangeText(text)}
                    placeholder="Contraseña"
                    placeholderTextColor="#E5E5E5"
                 />
                 <TextInput 
                    style={{ height: (windowHeight * 8)/100,  width: '100%', fontSize: 25, marginLeft: 5,   borderBottomColor: '#E5E5E5',
                    borderBottomWidth: 0.5, }}
                    onChangeText={text => onChangeText(text)} 
                    placeholder="Repite tu contraseña"
                    placeholderTextColor="#E5E5E5"
                 />
                 <TouchableOpacity 
               
              style={{ height: (windowHeight * 8 )/100, width: '100%', alignItems: "center", marginTop: 60 }}>
              <LinearGradient
              onTouchStart={ ()=> console.log('touch') }
              colors={['#FFF00C', '#FEF68C']}
              start={[0.3, 0.5]}
              end={[1, 0.60]}
              location={[0.25, 0.4, 1]}
              style={{  alignItems: 'center', borderRadius: 12, width: '90%', flexDirection: 'row', justifyContent: 'center', height:  (windowHeight * 8 )/100 , marginTop: 15 }}>
                
                  <Text
                      style={{
                      fontWeight: 'bold',
                      fontSize: ( windowWidth * 5 )/100,
                      color: 'black',
                      }}>
                       ¡Listo!
                  </Text>
                  </LinearGradient>
              </TouchableOpacity>
           </View>

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
        width: '90%',
        marginTop: 30
    },

    form: { width: '90%', height: '60%', }
})