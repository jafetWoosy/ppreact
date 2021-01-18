import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import {  store} from '../redux/store';
import {  connect   } from 'react-redux';


 function Store(props){
    const arra_ = [1,2,3,4,5,6,7,8,9,10]
    const { navigation  } = props;


     const goToInfo = () => {     
       navigation.navigate('Info');
     }

     const SetColorTab = () => {
        store.dispatch({
            type: "SCREEN_STORE"
        })
    }

     useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('entraste ala pantalla');
            SetColorTab();
         });
         return unsubscribe;
     });


     return(
         <View style={ styles.container }>
           <View style={{ width: '100%', height: '35%',  }}>
             <MapView
             style={{ height: '100%',  width: "100%",  }}
             provider={MapView.PROVIDER_GOOGLE}
             region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
            />
           </View>
            <ScrollView style={{ marginTop:10 , }}>
               {
                   arra_.map( element => {
                       return(
                           <View key={element}>
                        <TouchableOpacity style={{ width:'100%', height:(windowHeight * 10)/100,  flexDirection:'row' }} onPress={ goToInfo}key={element}>
                            <View style={{ width:"20%", height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                            <Text>800mts</Text> 
                            </View>
                            <View style={{ width:"80%", height: '100%', backgroundColor: 'white', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Puro Pollo Ejercito Mexicano</Text> 
                            <Text style={{ fontSize:11 }}>Av Ejercito Mexicano 1007, Palos Prietos, 82010, Mazatln, SIn</Text> 
                        </View>
                     </TouchableOpacity>
                     <View  style={{ width: '100%', height: 1, backgroundColor: '#C7C7C7' }} />
                     </View>
                       )
                   })
               }
            </ScrollView>
         </View>
     )
}

const windowWidth = Dimensions.get('window').width;    
const windowHeight = Dimensions.get('window').height;

const mapStateToProps = (state) => {
    return{
        state
    }
}

export default connect(mapStateToProps)(Store);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})