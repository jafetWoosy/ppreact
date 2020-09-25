import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;     //  Constantes de medion de pantalla
const windowHeight = Dimensions.get('window').height;

export default function Status(){
    const arr = [1,2,3,4];
    return(
        <View style={ styles.container}>
           <View style={styles.header}>
              <View style={styles.folio}>
              <Text style={{ textAlign: "center", fontSize:  ( windowWidth * 4 )/100 , fontWeight: 'bold' }}>FOLIO APP-27199</Text>
              </View>
           </View>
           <View style={styles.body}>
                 <Text style={{ fontSize: 15, color: '#707070', marginTop: 10  }}>Tu orden sera entregada en</Text>
                 <Text style={{ marginTop: 10,
                    marginBottom: 10, fontSize:  ( windowWidth * 5 )/100}}>Sucursal Ejercito Mexicano</Text>
                 <TouchableOpacity style={ { flexDirection: "column", alignItems: "center",
                  justifyContent: 'center', backgroundColor: '#FFED00',
                   width: '40%', height: '25%',
                    borderRadius: 22,
                    marginBottom: 8
                    
                } }>
                    <Text style={{ fontSize:  ( windowWidth * 4 )/100, fontWeight: 'bold' }}>Como llegar</Text>
                 </TouchableOpacity>
           </View>
             <View style={styles.footer}>
                 <View style={{ width: '100%', height: '15%', flexDirection: 'row' }}>
                     <View style={{ width: '17%', height: '100%',  alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: ( windowWidth * 4 )/ 100 }}>⚫</Text> 
                     </View>
                     <View style={{ width: '90%',  alignItems: 'flex-start', justifyContent: 'center' }}>
                         <Text style={{ fontSize:  (windowWidth * 3.7)/100, fontWeight: 'bold' }}>Tu orden ha sido recibida  en sucursal</Text>
                         <Text style={{ fontSize: ( windowWidth * 3 )/100 }}>13:44</Text>
                     </View>
                 </View>
                 <View style={{ width: '100%', height: '15%',  flexDirection: 'row' }}>
                 <View style={{ width: '17%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: ( windowWidth * 4 )/ 100 }}>⚫</Text> 
                 </View>
                 <View style={{ width: '90%',  alignItems: 'flex-start', justifyContent: 'center' }}>
                     <Text style={{ fontSize:  (windowWidth * 3.7)/100, fontWeight: 'bold' }}>Tu orden ha sido recibida  en sucursal</Text>
                     <Text style={{ fontSize: ( windowWidth * 3 )/100 }}>13:44</Text>
                 </View>
             </View>
             <View style={{ width: '100%', height: '15%', flexDirection: 'row' }}>
             <View style={{ width: '17%', height: '100%',  alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: ( windowWidth * 4 )/ 100 }} >⚫</Text> 
             </View>
             <View style={{ width: '90%',  alignItems: 'flex-start', justifyContent: 'center' }}>
                 <Text style={{ fontSize:  (windowWidth * 3.7)/100, fontWeight: 'bold' }}>Tu orden ha sido recibida  en sucursal</Text>
                 <Text style={{ fontSize: ( windowWidth * 3 )/100 }}>13:44</Text>
             </View>
         </View>
         <View style={{ width: '100%', height: '15%',  flexDirection: 'row' }}>
         <View style={{ width: '17%', height: '100%',  alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: ( windowWidth * 4 )/ 100 }}>⚫</Text> 
         </View>
         <View style={{ width: '90%',  alignItems: 'flex-start', justifyContent: 'center' }}>
             <Text style={{ fontSize:  (windowWidth * 3.7)/100, fontWeight: 'bold' }}>Tu orden ha sido recibida  en sucursal</Text>
             <Text style={{ fontSize: ( windowWidth * 3 )/100 }}>13:44</Text>
         </View>
     </View>
             </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
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
   folio: { width: '50%',
    height:'50%',
     backgroundColor: '#FFED00',
      flexDirection: 'row',
       justifyContent: 'center',
        alignItems: 'center' },

        body: {
            marginTop: 10,
            width: '90%',
            height: '25%',
            backgroundColor: '#fff',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: 'space-around',
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
        },
        footer: {
            marginTop: 25,
            width: ( windowWidth * 90)/100,
            height: '45%',
            backgroundColor: '#fff',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: 'space-evenly',
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
            
        }
})