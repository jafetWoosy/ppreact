import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;
export default function addAdress(props){
    const { navigation } = props;

    const goToConfirm = () => {
         navigation.navigate('ConfirmAdrees');
    }

    const goToBranch = () => {
        navigation.navigate('branchs');
   }

    return(
        
        <View style={styles.container}>
        <StatusBar barStyle="light-content" />
            <TouchableOpacity style={{ width: '90%' }}>
                <Text style={{ fontSize: ( windowWidth * 6 )/100, fontWeight: "bold" }}>X</Text>
            </TouchableOpacity>
          <View style={{ width: '90%',  alignItems: 'flex-start', marginTop: 15 }}>
           <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Elige o agrega</Text>
           <Text style={{ fontSize: 25, fontWeight: 'bold' }} >una dirercción</Text>
          </View>
             <View style={styles.search}>
                  <FontAwesome name="map-marker" size={30}  />
                  <TextInput   style={ {  width: '80%'  }}   placeholder="Ingresa una nueva dirección" onFocus={goToConfirm }   placeholderTextColor="#000" />
             </View>
             <View style={ {  flexDirection: 'row',  width:'90%',  height: '15%', marginTop: 20, justifyContent: 'flex-start', alignItems: 'center'}  }>
                 <View style={{  height:50, width: 50, borderRadius: 50/2, backgroundColor: '#FFEF00', alignItems: 'center', justifyContent: 'center',  marginRight: 20  }}>
                 <Image  source={require('../../assets/home/avion.png')} style={{ width: 20, height:20 }} />
                 </View>
                 <Text style={{ fontSize: 20, marginRight: 60, fontWeight: 'bold' }}>Ubicación actual</Text>
             </View>
             <View style={{ width: '100%',  height: 80,  flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 10,  }}>
                 <View style={{ width: "80%",  flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',  }}>
                    <View style={{ width: '90%',  }}>
                            <Text style={{ fontSize: (windowWidth * 4)/100, fontWeight: 'bold' }}>Av De La Gaviotas 609</Text>
                    </View> 
                    <View style={{ width: '5%',  }}>
                            <Text style={{ fontSize: (windowWidth * 4)/100 }}>&#x205d;</Text>
                    </View> 
                 </View>
                 <View style={{ width: "80%",  flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                    <View style={{ width:'90%', }}>
                      <Text style={{ fontSize: (windowWidth * 4)/100, fontWeight: 'bold' }}>Rio Grijalva 3000</Text>
                    </View>
                    <View style={{ width: '5%',  }}>
                            <Text style={{ fontSize: (windowWidth * 4)/100 }}>&#x205d;</Text>
                    </View> 
                 </View>
             </View>
             <View style={ {  flexDirection: 'row',  width:'90%',  height: '15%', marginTop: 20, justifyContent: 'flex-start', alignItems: 'center'}  }>
                 <View style={{  height:50, width: 50, borderRadius: 50/2, backgroundColor: '#FFEF00', alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
                 <Image  source={require('../../assets/home/avion.png')} style={{ width: 20, height:20 }} />
                 </View>
                 <TouchableOpacity onPress={ goToBranch }>
                    <Text style={{ fontSize: 20, marginRight: 60, fontWeight: 'bold' }}>Recoger en sucursal</Text>
                 </TouchableOpacity>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center', 
        marginTop: 40
        
    },
    search: { flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-around', marginTop: 30,
    height: 50, borderRadius: 30, backgroundColor: 'white', 
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