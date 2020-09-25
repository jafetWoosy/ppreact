import React from 'react';
import {  View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity  } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;

export default function RegisterTel(props){
    const DefaultValue = '+52'
    const {  navigation  } = props;


       const setCode = (item) =>  {
        console.log(item)
       }

       const onChangeText = (input) => {
         console.log(input);
       }

       const goToForm = () => {
         navigation.navigate('Formregister');
       }

    return (
         <View style={styles.container}>
            <View style={styles.title}>
                  <Text style={{ fontSize: (windowWidth * 8 )/100, fontWeight: 'bold' }}>¡Registrate ahora!</Text> 
            </View> 
            <View style={ styles.down }>
                <DropDownPicker   
                        items={[
                            { label: '+52', value: '+52', icon: () =>  <Image  source={require('../../assets/home/banderamex.png')} />  },
                            

                        ]}
                        defaultValue={DefaultValue}
                        labelStyle={{ fontSize: (windowWidth * 3)/100 }}
                        containerStyle={{ height: (windowHeight * 8)/100, width: (windowWidth * 30)/100,  }}
                        style={{ backgroundColor: 'white',  borderWidth: 0,}}
                        itemStyle={{
                            justifyContent: 'flex-start', zIndex: 10
                        }}
                        dropDownStyle={{ backgroundColor: 'white' }}
                        onChangeItem={item => setCode(item.value)}
                    />
                    <TextInput
                    style={{ height: (windowHeight * 8)/100,  width: '70%', fontSize:  (windowWidth * 5)/100, marginLeft: 5 }}
                    onChangeText={text => onChangeText(text)}
                    placeholder="Numero de telefono"
                    placeholderTextColor="black"
                 
                  />
                
            </View>

              
              <TouchableOpacity 
               onPress={ goToForm  }
              style={{ height: (windowHeight * 8 )/100, width: '100%', alignItems: "center", marginTop: 60 }}>
              <LinearGradient
              onTouchStart={ ()=> console.log('touch') }
              colors={['#FFF00C', '#FEF68C']}
              start={[0.3, 0.5]}
              end={[1, 0.60]}
              location={[0.25, 0.4, 1]}
              style={{  alignItems: 'center', borderRadius: 12, width: '90%', flexDirection: 'row', justifyContent: 'center', height:  (windowHeight * 8 )/100 , marginTop: 15 }}>
              <FontAwesome name="envelope" size={40} style={{ right: 20 }} />
                  <Text
                      style={{
                      fontWeight: 'bold',
                      fontSize: ( windowWidth * 4.5 )/100,
                      color: 'black',
                      }}>
                      Recibir código via SMS
                  </Text>
                  </LinearGradient>
              </TouchableOpacity>
              
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
    down: {
        width: '90%',
     
        height: (windowHeight * 8)/100,
        flexDirection: 'row',
        marginTop: 30
    }
})