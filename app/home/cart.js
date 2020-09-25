import  React from 'react';
import { View, Text, ScrollView,  StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowsHeight = Dimensions.get('screen').height;
const windowsWidth = Dimensions.get('screen').width;

export default function  Cart(props){
    const { navigation } = props;
    return(
        <ScrollView contentContainerStyle={{ marginTop: 30,  alignItems: 'center', backgroundColor: 'white' }}>
           <ImageBackground source={require('./../../assets/cart/pruebacrusty.png')} style={{ width:'100%', height: 300,  }}   >
           </ImageBackground>
           <View style={styles.body}>
                <View style={{ height: ( windowsHeight *15 )/100, width: '85%',  }}>
                    <Text style={{ fontWeight: 'bold', fontSize: (windowsWidth *6 )/100 }}>Dedos para dos</Text>
                    <Text style={styles.description}>6 piezas de nuestro delicioso pollo crusty +</Text>
                    <Text style={styles.description}>1/4 de puré + 1/4 ensalada de col + 2 panes</Text>
                    <Text style={styles.description}>colchon + i aderezo al gusto + salsa verde</Text>
                </View>
                <View style={{ marginTop: 40, width: '85%', }}>
                    <Text style={{ fontSize:  (windowsWidth *6 )/100, fontWeight: 'bold' }}>Elige tus complementos</Text>
                </View>
               <View  style={{ width:'100%', height:0.4,backgroundColor: 'grey', marginTop: 25 }}/> 
               <View style={{ marginTop: 20, width: '85%', flexDirection: 'row', justifyContent: 'space-between' }}>
                 <Text style={{ fontSize: 19 }}>Pure de papa</Text>
                 <Text style={{ color: 'grey' }}>▼</Text>
               </View>
               <View  style={{ width:'100%', height:0.4,backgroundColor: 'grey', marginTop: 25 }}/> 
               <View style={{ marginTop: 20, width: '85%', flexDirection: 'row', justifyContent: 'space-between' }}>
                 <Text style={{ fontSize: 19 }}>Ensalada col</Text>
                 <Text style={{ color: 'grey' }}>▼</Text>
               </View>
               <View  style={{ width:'100%', height:0.4,backgroundColor: 'grey', marginTop: 25 }}/> 
               <View style={{ marginTop: 20, width: '85%', flexDirection: 'row', justifyContent: 'space-between' }}>
                 <Text style={{ fontSize: 19 }}>Aderezo con chile</Text>
                 <Text style={{ color: 'grey' }}>▼</Text>
               </View>
               <View  style={{ width:'100%', height:0.4,backgroundColor: 'grey', marginTop: 25 }}/> 
               <View style={{ marginTop: 10, width: '85%' }}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Acompaña tus dedos con</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginTop: 15,   }}>
                     <View style={styles.containerImage}>
                       <Image  source={require('./../../assets/cart/papas.png')} style={{ width: 100, height: 110 }} />
                     </View>
                     <View style={ {  width: '35%', alignItems: 'center', borderRadius: 10  }}>
                       <Image  source={require('./../../assets/cart/papas.png')} style={{ width: 100, height: 110 }} />
                     </View>
                </View>
                <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-around',  marginBottom: 40 }}>
                     <View style={{ width:'35%', alignItems:'center', flexDirection: 'column' }}>
                            <Text style={{ fontSize: (windowsWidth *4 )/100, fontWeight:'bold' }}>Papas caseras</Text>
                            <Text style={{ fontSize: 12, color: '#56b022' }}>por solo $16</Text>
                     </View>
                     <View style={{ width:'35%', alignItems:'center', flexDirection: 'column' }}>
                            <Text style={{ fontSize:  (windowsWidth *4 )/100, fontWeight:'bold' }}>Papas caseras</Text>
                            <Text style={{ fontSize: 12, color: '#56b022' }}>por solo $16</Text>
                     </View>
                </View>
                <View style={{ width:"100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',  height: 80, backgroundColor: '#000', marginBottom: 30 }}>
                   <TouchableOpacity onPress={ ()=> navigation.navigate('addAdreess') }>
                   <Text style={{ color: "#fff", fontSize: 20}}>Agregar al carrito</Text>
                   
                   </TouchableOpacity>
                <Text style={{ color: "#fff", fontSize:20}}>$149.00</Text>

                </View>
           </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    
    body:{
        marginTop: 15,
        width: windowsWidth,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    description: {
        fontSize:  (windowsWidth *3.7 )/100
    },
    containerImage: {
        width: '35%',  alignItems: 'center', borderRadius: 6,  height: 130, justifyContent: 'center',
        


    },
    
}) 


